#!/usr/bin/env python3
"""
harness.py — 3-agent coding system harness

Usage:
  python harness.py                        # run active project
  python harness.py --project <n>          # run named project
  python harness.py --project <n> intake   # force intake mode
  python harness.py --project <n> status   # print current state
  python harness.py --add <n> <path>       # register new project
"""

import re
import sys
import json
import time
import argparse
from pathlib import Path
from datetime import datetime

import anthropic

# ── Constants ──────────────────────────────────────────────────────────────────

MODEL         = "claude-sonnet-4-6"
MAX_TOKENS    = 4096
MAX_RETRIES   = 2
POLL_INTERVAL = 2

HARNESS_DIR   = Path(__file__).parent
PROJECTS_FILE = HARNESS_DIR / "projects.json"

REQUIRED_FILES = ["CLAUDE.md", "AGENTS.md", "WORKFLOW.md", "TASKS.md", "MEMORY.md", "RETRO.md"]

# Accepts both Unicode arrows (→) and ASCII arrows (->) everywhere
ARROW   = r"(?:->|→)"
ROUTING_RE = re.compile(rf"Routing:\s*(P{ARROW}B{ARROW}R|P{ARROW}B)")

client = anthropic.Anthropic()  # reads ANTHROPIC_API_KEY from env

# ── Project registry ───────────────────────────────────────────────────────────

def load_projects() -> dict:
    if not PROJECTS_FILE.exists():
        return {"projects": {}, "active": None}
    return json.loads(PROJECTS_FILE.read_text())

def save_projects(data: dict):
    PROJECTS_FILE.write_text(json.dumps(data, indent=2))

def get_project_path(name: str | None = None) -> Path:
    data = load_projects()
    name = name or data.get("active")
    if not name:
        die("No active project. Use: python harness.py --add <n> <path>")
    proj = data["projects"].get(name)
    if not proj:
        die(f"Project '{name}' not found. Register with: python harness.py --add {name} <path>")
    return Path(proj["path"])

def add_project(name: str, path: str):
    data = load_projects()
    data["projects"][name] = {"path": str(Path(path).resolve()), "description": ""}
    if not data["active"]:
        data["active"] = name
    save_projects(data)
    print(f"✓ Registered project '{name}' at {path}")
    if data["active"] == name:
        print("  Set as active project.")

# ── File helpers ───────────────────────────────────────────────────────────────

def read_file(path: Path) -> str:
    return path.read_text(encoding="utf-8") if path.exists() else ""

def write_file(path: Path, content: str):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")

def die(msg: str):
    print(f"\n[ERROR] {msg}", file=sys.stderr)
    sys.exit(1)

# ── FIX #8: Startup validation ─────────────────────────────────────────────────

def validate_project_files(proj_root: Path):
    missing = [f for f in REQUIRED_FILES if not (proj_root / f).exists()]
    if missing:
        die(f"Missing required files in {proj_root}: {', '.join(missing)}\n"
            f"Copy all 6 markdown files into the project root before running.")

# ── Project accessor ───────────────────────────────────────────────────────────

class Project:
    def __init__(self, root: Path):
        self.root     = root
        self.tasks    = root / "TASKS.md"
        self.memory   = root / "MEMORY.md"
        self.retro    = root / "RETRO.md"
        self.agents   = root / "AGENTS.md"
        self.claude   = root / "CLAUDE.md"
        self.workflow = root / "WORKFLOW.md"

    def r(self, f: Path) -> str:
        return read_file(f)

    def w(self, f: Path, content: str):
        write_file(f, content)

    def last_n_retro(self, n: int = 3) -> str:
        content = self.r(self.retro)
        entries = re.split(r"(?=### \[\d{4}-\d{2}-\d{2}\])", content)
        entries = [e for e in entries if e.strip().startswith("###")]
        return "\n".join(entries[:n])

    def memory_partial(self, sections: list[str]) -> str:
        content = self.r(self.memory)
        result = []
        for section in sections:
            m = re.search(
                rf"(## {re.escape(section)}.*?)(?=^## |\Z)",
                content, re.DOTALL | re.MULTILINE
            )
            if m:
                result.append(m.group(1).strip())
        return "\n\n".join(result)

# ── TASKS.md state helpers ─────────────────────────────────────────────────────

def get_status(proj: Project) -> str:
    m = re.search(r"\*\*Status:\*\*\s*(\S+)", proj.r(proj.tasks))
    return m.group(1) if m else "INTAKE"

def get_routing(proj: Project) -> str:
    m = ROUTING_RE.search(proj.r(proj.tasks))
    return m.group(1) if m else "P->B->R"

def is_simple_routing(routing: str) -> bool:
    # Matches P->B or P→B but NOT P->B->R / P→B→R
    return bool(re.match(rf"^P{ARROW}B$", routing))

def get_retry_count(proj: Project) -> int:
    m = re.search(r"\*\*Retry count:\*\*\s*(\d+)", proj.r(proj.tasks))
    return int(m.group(1)) if m else 0

def set_field(proj: Project, field: str, value: str):
    content = proj.r(proj.tasks)
    new = re.sub(
        rf"(\*\*{re.escape(field)}:\*\*)\s*[^\n]*",
        rf"\1 {value}",
        content
    )
    proj.w(proj.tasks, new)

def set_status(proj: Project, status: str):
    set_field(proj, "Status", status)

def set_current_agent(proj: Project, agent: str):
    set_field(proj, "Current agent", agent)

def log_to_tasks(proj: Project, agent: str, message: str):
    ts = datetime.now().strftime("%Y-%m-%d %H:%M")
    entry = f"- [{agent}] [{ts}] {message}"
    content = proj.r(proj.tasks)
    # Append after ### Log header (not replace-first which breaks on repeated calls)
    content = re.sub(r"(### Log\n)", rf"\1{entry}\n", content, count=1)
    proj.w(proj.tasks, content)

def has_pending_in_queue(proj: Project) -> bool:
    m = re.search(r"## Queue\n(.*?)(?=\n## |\Z)", proj.r(proj.tasks), re.DOTALL)
    if not m:
        return False
    queue_text = m.group(1).strip()
    return bool(queue_text and not queue_text.startswith("<!--"))

def _get_task_name(proj: Project) -> str:
    m = re.search(r"\*\*Name:\*\*\s*(.+)", proj.r(proj.tasks))
    return m.group(1).strip() if m else "unknown"

def _get_task_id(proj: Project) -> str:
    m = re.search(r"\*\*ID:\*\*\s*(.+)", proj.r(proj.tasks))
    return m.group(1).strip() if m else "—"

# ── FIX #3: Subtask checkoff writer ───────────────────────────────────────────

def apply_subtask_checkoffs(proj: Project, builder_response: str):
    """
    Parse all 'Completed: - [x] <text>' lines from Builder output.
    For each, find the matching '- [ ] <text>' in TASKS.md and mark it [x].
    """
    completed = re.findall(r"Completed:\s*-\s*\[x\]\s*(.+)", builder_response, re.IGNORECASE)
    if not completed:
        return
    content = proj.r(proj.tasks)
    for task_text in completed:
        task_text = task_text.strip()
        # Match loosely — ignore arrow suffixes like -> BUILDER [PARALLEL_OK]
        pattern = re.compile(
            r"- \[ \] " + re.escape(task_text.split("->")[0].strip()),
            re.IGNORECASE
        )
        content = pattern.sub(lambda m: m.group(0).replace("- [ ]", "- [x]"), content, count=1)
    proj.w(proj.tasks, content)

def all_subtasks_done(proj: Project) -> bool:
    content = proj.r(proj.tasks)
    # Only look inside the Active Task section
    m = re.search(r"## Active Task.*?## Queue", content, re.DOTALL)
    if not m:
        return True
    return len(re.findall(r"- \[ \]", m.group(0))) == 0

# ── FIX #11: File written log — append, not replace ───────────────────────────

def update_files_written(proj: Project, paths: list[str]):
    if not paths:
        return
    content = proj.r(proj.tasks)
    entries = "\n".join(f"- {p}" for p in paths)
    # Replace placeholder on first call
    if "*(none)*" in content or "(none yet)" in content:
        content = re.sub(r"\*(none)\*|\(none yet\)", entries, content, count=1)
    else:
        # Append to existing list
        content = re.sub(
            r"(### Files Written\n)(.*?)(### )",
            lambda m: m.group(1) + m.group(2).rstrip() + "\n" + entries + "\n\n" + m.group(3),
            content, flags=re.DOTALL, count=1
        )
    proj.w(proj.tasks, content)

# ── FILE block parser — R9 enforcement ────────────────────────────────────────

def extract_file_blocks(text: str) -> list[tuple[str, str]]:
    pattern = r"<!-- FILE: (.+?) -->\s*```[^\n]*\n(.*?)```\s*<!-- /FILE -->"
    return [(p.strip(), c) for p, c in re.findall(pattern, text, re.DOTALL)]

def write_file_blocks(proj: Project, text: str) -> list[str]:
    blocks = extract_file_blocks(text)
    written = []
    for rel_path, content in blocks:
        write_file(proj.root / rel_path, content)
        written.append(rel_path)
        print(f"  ✓ wrote {rel_path}")
    return written

# ── FIX #12: R2 output contract validator ─────────────────────────────────────

def validate_role_declaration(response: str, expected_role: str) -> bool:
    return bool(re.search(rf"^\[{expected_role}\]", response.strip(), re.MULTILINE | re.IGNORECASE))

def enforce_role(response: str, role: str):
    if not validate_role_declaration(response, role):
        print(f"  [RULE VIOLATION: R2] Agent did not declare [{role}] at turn start.")

# ── Claude API ─────────────────────────────────────────────────────────────────

def call_claude(system: str, messages: list[dict]) -> str:
    response = client.messages.create(
        model=MODEL,
        max_tokens=MAX_TOKENS,
        system=system,
        messages=messages
    )
    return response.content[0].text

# ── Agent system prompts ───────────────────────────────────────────────────────

def planner_system(proj: Project) -> str:
    return (
        "You are the PLANNER agent in a 3-agent autonomous coding system.\n\n"
        f"Role contract:\n{proj.r(proj.agents)}\n\n"
        f"System constitution:\n{proj.r(proj.claude)}\n\n"
        f"Workflow:\n{proj.r(proj.workflow)}\n\n"
        "IMPORTANT: Use ASCII arrows (P->B, P->B->R) not Unicode arrows.\n"
        "You MUST follow your output contract exactly. No deviations."
    )

def builder_system(proj: Project) -> str:
    return (
        "You are the BUILDER agent in a 3-agent autonomous coding system.\n\n"
        f"Role contract:\n{proj.r(proj.agents)}\n\n"
        "CRITICAL — R9 file output format (harness ignores code outside these blocks):\n"
        "<!-- FILE: relative/path/from/project/root/file.ext -->\n"
        "```lang\nfile content\n```\n"
        "<!-- /FILE -->\n\n"
        "For each completed subtask output:\n"
        "[BUILDER] Subtask: <n>\n"
        "Status: DONE | BLOCKED\n"
        "Completed: - [x] <subtask text exactly as written in TASKS.md>\n"
        "Files written: <list> | none\n"
        "Blocked reason: — | <reason>\n\n"
        "You MUST follow your output contract exactly."
    )

def reviewer_system(proj: Project) -> str:
    return (
        "You are the REVIEWER agent in a 3-agent autonomous coding system.\n\n"
        f"Role contract:\n{proj.r(proj.agents)}\n\n"
        f"System constitution:\n{proj.r(proj.claude)}\n\n"
        "CRITICAL: If Result is FAIL, you MUST append a ---RETRO_ENTRY_START--- block "
        "immediately after your output contract. Harness extracts and writes it to RETRO.md. "
        "Without this block, the failure is not logged and R6 is violated."
    )

# ── Escalation ─────────────────────────────────────────────────────────────────

def escalate(reason: str, context: str) -> str:
    print("\n" + "━" * 50)
    print(f"[ESCALATION] {reason}")
    print(f"Context: {context}")
    print("━" * 50)
    return input("Your input: ").strip()

# ── FIX #7: Systemic failure detection ────────────────────────────────────────

def check_systemic_failures(proj: Project) -> str | None:
    """Return most common root cause if ≥3 RETRO entries share it, else None."""
    content = proj.r(proj.retro)
    causes = re.findall(r"\*\*Root cause:\*\*\s*(.+)", content)
    if len(causes) < 3:
        return None
    # Cluster by first 60 chars (rough similarity)
    buckets: dict[str, int] = {}
    for c in causes:
        key = c.strip()[:60].lower()
        buckets[key] = buckets.get(key, 0) + 1
    top = max(buckets, key=lambda k: buckets[k])
    return top if buckets[top] >= 3 else None

# ── INTAKE ─────────────────────────────────────────────────────────────────────

def run_intake(proj: Project, seed_text: str = ""):
    """
    Multi-turn terminal conversation using proper messages array (FIX #17).
    Planner interviews user, then writes TASKS.md and MEMORY.md (FIX #14, #4).
    """
    print("\n[INTAKE] Planner is ready. Describe your goal.\n")

    system = planner_system(proj)
    messages: list[dict] = []

    # Seed system context as first user message
    seed_prompt = (
        "You are in INTAKE mode.\n\n"
        f"Current MEMORY.md:\n{proj.r(proj.memory)}\n\n"
        f"RETRO (last 3):\n{proj.last_n_retro(3)}\n\n"
        "The user will now describe their goal. Ask ≤5 targeted questions, one at a time. "
        "Infer what you can from MEMORY.md — don't ask what's already known.\n"
        "When you have enough information, output your INTAKE_COMPLETE block and "
        "MEMORY_CONTEXT block exactly as specified in AGENTS.md.\n"
    )
    # FIX #4: Inject any previously typed goal text
    if seed_text:
        seed_prompt += f"\nUser's initial description: {seed_text}\n"

    messages.append({"role": "user", "content": seed_prompt})
    response = call_claude(system, messages)
    print(f"[PLANNER] {response}\n")
    messages.append({"role": "assistant", "content": response})

    while "INTAKE_COMPLETE" not in response:
        user_input = input("You: ").strip()
        if not user_input:
            continue
        messages.append({"role": "user", "content": user_input})
        response = call_claude(system, messages)
        print(f"\n[PLANNER] {response}\n")
        messages.append({"role": "assistant", "content": response})

    # Parse and write TASKS.md
    m = re.search(r"---TASKS_ENTRY_START---\n(.*?)---TASKS_ENTRY_END---", response, re.DOTALL)
    if not m:
        die("Planner returned INTAKE_COMPLETE but no TASKS_ENTRY block found.")
    _inject_task_entry(proj, m.group(1).strip())

    # FIX #14: Parse and write MEMORY.md → Project Context
    mc = re.search(r"---MEMORY_CONTEXT_START---\n(.*?)---MEMORY_CONTEXT_END---", response, re.DOTALL)
    if mc:
        _write_memory_context(proj, mc.group(1).strip())

    print("\n[HARNESS] TASKS.md written. Starting execution loop.\n")

def _inject_task_entry(proj: Project, entry: str):
    """
    FIX #15: Strip any Status/Current agent lines from Planner block before injection
    to prevent duplicate fields. Harness sets those fields explicitly after.
    """
    # Remove lines harness owns to avoid duplicates
    entry_clean = re.sub(r"\*\*(Status|Current agent):\*\*[^\n]*\n?", "", entry)
    content = proj.r(proj.tasks)
    new_content = re.sub(
        r"(## Active Task\n).*?(## Queue)",
        f"\\1\n{entry_clean.strip()}\n\n---\n\n\\2",
        content, flags=re.DOTALL
    )
    proj.w(proj.tasks, new_content)
    # Harness owns these fields
    set_status(proj, "PENDING")
    set_current_agent(proj, "PLANNER")

def _write_memory_context(proj: Project, context_block: str):
    content = proj.r(proj.memory)
    new_content = re.sub(
        r"(## Project Context\n<!-- .+?-->\n\n).*?(?=\n---|\n## )",
        rf"\1{context_block}\n",
        content, flags=re.DOTALL
    )
    # If pattern didn't match (blank template), do a direct replace
    if new_content == content:
        new_content = content.replace(
            "- **Project name:** —",
            context_block.split("\n")[0]
        )
    proj.w(proj.memory, new_content)

# ── PLANNER (Mode B) ───────────────────────────────────────────────────────────

def run_planner(proj: Project):
    print("[PLANNER] Planning task...")
    set_current_agent(proj, "PLANNER")

    response = call_claude(planner_system(proj), [{"role": "user", "content":
        f"Current TASKS.md:\n{proj.r(proj.tasks)}\n\n"
        f"Full MEMORY.md:\n{proj.r(proj.memory)}\n\n"
        f"RETRO (last 3):\n{proj.last_n_retro(3)}\n\n"
        "Execute Mode B — PLAN. Output your [PLANNER] block now."
    }])
    print(response)
    enforce_role(response, "PLANNER")
    _patch_planner_output(proj, response)
    set_status(proj, "IN_PROGRESS")
    set_current_agent(proj, "BUILDER")
    log_to_tasks(proj, "PLANNER", "Plan complete → BUILDER")

def _patch_planner_output(proj: Project, response: str):
    m_complexity = re.search(r"Complexity:\s*(SIMPLE|COMPLEX)", response)
    m_routing    = ROUTING_RE.search(response)

    if m_complexity:
        set_field(proj, "Complexity", m_complexity.group(1))
    if m_routing:
        # Normalise to ASCII arrows for consistent regex matching
        routing_val = re.sub(r"→", "->", m_routing.group(1))
        set_field(proj, "Routing", routing_val)

    # FIX #10: Whitespace-optional subtask regex
    m_subtasks = re.search(r"Subtasks:\n((?:\s*- .*\n?)+)", response)
    if m_subtasks:
        subtask_block = m_subtasks.group(0).strip()
        # Normalise: ensure each subtask line starts with "- " (no leading spaces in file)
        normalised = "\n".join(
            "- " + line.lstrip("- \t") if line.strip().startswith("-") else line
            for line in subtask_block.splitlines()
        )
        content = proj.r(proj.tasks)
        content = re.sub(
            r"### Subtasks\n.*?(?=### |\Z)",
            f"### Subtasks\n{normalised}\n\n",
            content, flags=re.DOTALL
        )
        proj.w(proj.tasks, content)

# ── BUILDER ────────────────────────────────────────────────────────────────────

def run_builder(proj: Project):
    print("[BUILDER] Executing subtasks...")
    set_current_agent(proj, "BUILDER")

    response = call_claude(builder_system(proj), [{"role": "user", "content":
        f"Active task from TASKS.md:\n{proj.r(proj.tasks)}\n\n"
        f"Relevant MEMORY.md (Context + Patterns + Entities):\n"
        f"{proj.memory_partial(['Project Context', 'Patterns', 'Entities'])}\n\n"
        "Execute all pending subtasks. Output one [BUILDER] block per subtask, then FILE blocks."
    }])
    print(response)
    enforce_role(response, "BUILDER")

    # FIX #3: Write subtask checkoffs to TASKS.md
    apply_subtask_checkoffs(proj, response)

    # Write files to disk
    written = write_file_blocks(proj, response)
    if written:
        update_files_written(proj, written)
        log_to_tasks(proj, "BUILDER", f"Wrote {len(written)} file(s): {', '.join(written)}")

    # FIX #2: Strict BLOCKED detection — output contract only
    if re.search(r"^Status:\s*BLOCKED", response, re.MULTILINE):
        blocked_reason = ""
        m = re.search(r"Blocked reason:\s*(.+)", response)
        if m:
            blocked_reason = m.group(1).strip()
        clarification = escalate("Builder is blocked", blocked_reason or "See Builder output above")
        # Inject clarification into TASKS.md Blockers section
        content = proj.r(proj.tasks)
        content = re.sub(
            r"### Blockers / Unknowns\n.*?(?=### |\Z)",
            f"### Blockers / Unknowns\nUser clarified: {clarification}\n\n",
            content, flags=re.DOTALL
        )
        proj.w(proj.tasks, content)
        log_to_tasks(proj, "BUILDER", "BLOCKED → user clarified → resuming")
        return  # Loop will re-call Builder

    # Advance state
    routing = get_routing(proj)
    if is_simple_routing(routing):
        set_field(proj, "Routing", routing + " (lessons)")
    set_status(proj, "REVIEW")
    set_current_agent(proj, "REVIEWER")
    log_to_tasks(proj, "BUILDER", "Subtasks complete → REVIEW")

# ── REVIEWER ───────────────────────────────────────────────────────────────────

def run_reviewer(proj: Project):
    routing = get_routing(proj)
    mode = "LESSONS_ONLY" if "lessons" in routing.lower() else "FULL"
    print(f"[REVIEWER] Reviewing (mode={mode})...")
    set_current_agent(proj, "REVIEWER")

    response = call_claude(reviewer_system(proj), [{"role": "user", "content":
        f"Active task:\n{proj.r(proj.tasks)}\n\n"
        f"Full MEMORY.md:\n{proj.r(proj.memory)}\n\n"
        f"Files written by Builder:\n{_read_written_files(proj)}\n\n"
        f"Mode: {mode}\n"
        f"{'Full PASS/FAIL validation required.' if mode == 'FULL' else 'Lessons-only. Output Result: DONE.'}\n"
        "Output your [REVIEWER] block now. If Result is FAIL, append your RETRO block."
    }])
    print(response)
    enforce_role(response, "REVIEWER")

    # FIX #5: Parse structured lessons from output contract
    lessons = _parse_lessons(response)
    _write_lessons(proj, lessons)

    # FIX #1: Extract and write RETRO block if present
    _apply_retro_block(proj, response)

    # Check for rule proposal
    _apply_rule_proposal(proj, response)

    # FIX #7: Systemic failure check
    systemic = check_systemic_failures(proj)
    if systemic:
        approval = escalate(
            "Systemic failure pattern detected (≥3 same root cause in RETRO)",
            f"Root cause: {systemic}"
        )
        if approval.lower() in ("y", "yes"):
            escalate_systemic_rule(proj, systemic)

    # Parse result and advance state
    result_m = re.search(r"Result:\s*(PASS|FAIL|DONE)", response)
    result = result_m.group(1) if result_m else "DONE"

    if result in ("PASS", "DONE"):
        # FIX #5 enforcement: warn if no lessons were written
        if not lessons:
            print("  [RULE VIOLATION: R5] No lessons parsed from Reviewer output.")
        set_status(proj, "DONE")
        log_to_tasks(proj, "REVIEWER", f"Result: {result} → DONE")
        print("\n[HARNESS] Task complete. ✓\n")
    else:
        retry = get_retry_count(proj)
        if retry >= MAX_RETRIES:
            escalate(
                f"Task failed {retry + 1} times (max {MAX_RETRIES})",
                f"Task: {_get_task_name(proj)} — see RETRO.md"
            )
            set_status(proj, "FAILED")
            log_to_tasks(proj, "REVIEWER", f"FAILED — max retries reached")
        else:
            set_field(proj, "Retry count", str(retry + 1))
            set_status(proj, "PENDING")
            log_to_tasks(proj, "REVIEWER", f"FAIL → re-queue (retry {retry + 1})")
            print(f"\n[HARNESS] Task re-queued (retry {retry + 1}/{MAX_RETRIES})\n")

# ── Reviewer helpers ───────────────────────────────────────────────────────────

def _parse_lessons(response: str) -> list[str]:
    """
    FIX #5: Parse structured lessons block from output contract.
    Looks for the indented list under 'Lessons written: <n>'.
    """
    # Find the lessons block
    m = re.search(r"Lessons written:\s*\d+\n((?:- .+\n?)+)", response)
    if not m:
        return []
    return [line.lstrip("- ").strip() for line in m.group(1).splitlines() if line.strip().startswith("-")]

def _write_lessons(proj: Project, lessons: list[str]):
    if not lessons:
        return
    ts = datetime.now().strftime("%Y-%m-%d")
    task_name = _get_task_name(proj)
    content = proj.r(proj.memory)
    entries = "".join(f"[{ts}] [{task_name}] {l}\n" for l in lessons)
    content = re.sub(r"(## Lessons Learned\n)", rf"\1{entries}", content, count=1)
    proj.w(proj.memory, content)

def _apply_retro_block(proj: Project, response: str):
    """FIX #1: Extract embedded RETRO block from Reviewer response and write to RETRO.md."""
    m = re.search(r"---RETRO_ENTRY_START---\n(.*?)---RETRO_ENTRY_END---", response, re.DOTALL)
    if not m:
        return
    entry = m.group(1).strip()
    retro_content = proj.r(proj.retro)
    retro_content = re.sub(r"(## Log\n)", rf"\1{entry}\n\n", retro_content, count=1)
    proj.w(proj.retro, retro_content)
    print("  ✓ RETRO entry written")

def _apply_rule_proposal(proj: Project, response: str):
    m = re.search(r"Rule proposed:\s*(?!none)(.+)", response, re.IGNORECASE)
    if not m:
        return
    rule_text = m.group(1).strip()
    if rule_text.lower() == "none":
        return
    approval = escalate("Reviewer proposes new systemic rule", rule_text)
    if approval.lower() in ("y", "yes"):
        _append_rule(proj, rule_text)
        print("[HARNESS] Rule added to CLAUDE.md.")

def _read_written_files(proj: Project) -> str:
    content = proj.r(proj.tasks)
    m = re.search(r"### Files Written\n(.*?)(?=### |\Z)", content, re.DOTALL)
    if not m:
        return "(none)"
    paths = re.findall(r"- (.+)", m.group(1))
    parts = []
    for p in paths:
        abs_p = proj.root / p.strip()
        if abs_p.exists():
            parts.append(f"=== {p} ===\n{read_file(abs_p)}")
    return "\n\n".join(parts) if parts else "(files not found on disk)"

def _append_rule(proj: Project, rule_text: str):
    """FIX #16: Use rule count detection instead of hardcoded anchor."""
    content = proj.r(proj.claude)
    existing = re.findall(r"\[R(\d+)\]", content)
    n = max(int(x) for x in existing) + 1 if existing else 12
    entry = f"- **[R{n}]** {rule_text}"
    # Insert before the closing line of the Mandatory Rules section
    content = re.sub(r"(---\n\n## Token Efficiency)", f"{entry}\n\\1", content, count=1)
    proj.w(proj.claude, content)

def escalate_systemic_rule(proj: Project, root_cause: str):
    """Planner updates WORKFLOW.md with a prevention note."""
    content = proj.r(proj.workflow)
    ts = datetime.now().strftime("%Y-%m-%d")
    prevention = (
        f"\n### Systemic Prevention [{ts}]\n"
        f"Root cause pattern: {root_cause}\n"
        f"Prevention: Review RETRO.md before planning any task touching this area.\n"
    )
    content += prevention
    proj.w(proj.workflow, content)
    print("[HARNESS] WORKFLOW.md updated with systemic prevention note.")

# ── Archive + queue ────────────────────────────────────────────────────────────

def archive_task(proj: Project):
    name = _get_task_name(proj)
    ts   = datetime.now().strftime("%Y-%m-%d")
    content = proj.r(proj.tasks)
    content = re.sub(r"(## Completed\n)", rf"\1- [{ts}] {name} | DONE\n", content, count=1)
    _reset_active_task(proj, content)

def _reset_active_task(proj: Project, content: str = ""):
    """FIX #6: Full reset of Active Task section — no stale data leaks."""
    if not content:
        content = proj.r(proj.tasks)
    blank = (
        "**ID:** —\n"
        "**Name:** —\n"
        "**Status:** INTAKE\n"
        "**Complexity:** —\n"
        "**Routing:** —\n"
        "**Retry count:** 0\n"
        "**Started:** —\n"
        "**Current agent:** PLANNER\n\n"
        "### Subtasks\n*(populated by Planner)*\n\n"
        "### Files Written\n*(none yet)*\n\n"
        "### Blockers / Unknowns\n*(none)*\n\n"
        "### Log\n*(populated during execution)*"
    )
    new_content = re.sub(
        r"(## Active Task\n).*?(## Queue)",
        f"\\1\n{blank}\n\n---\n\n\\2",
        content, flags=re.DOTALL
    )
    proj.w(proj.tasks, new_content)

def _promote_queued_task(proj: Project):
    """FIX #6: Reset Active Task before promoting queued item."""
    content = proj.r(proj.tasks)
    m = re.search(r"## Queue\n((?:- .+\n?)+)", content)
    if not m:
        return
    lines = [l for l in m.group(1).strip().splitlines() if l.strip()]
    if not lines:
        return
    first = lines[0]
    rest  = "\n".join(lines[1:])

    name_m = re.search(r"\] (.+?) —", first)
    name = name_m.group(1).strip() if name_m else first.lstrip("- ")
    is_retry = "[RETRY]" in first

    # Full reset first, then set fields
    _reset_active_task(proj)
    set_field(proj, "Name", name)
    set_status(proj, "PENDING")
    set_field(proj, "Retry count", "1" if is_retry else "0")

    # Remove promoted item from queue
    new_queue = rest.strip()
    content = proj.r(proj.tasks)
    content = re.sub(
        r"(## Queue\n).*?(## Completed)",
        f"\\1{new_queue}\n\n\\2",
        content, flags=re.DOTALL
    )
    proj.w(proj.tasks, content)

# ── FIX #13: Restart with FAILED status → re-queue ───────────────────────────

def handle_failed_on_start(proj: Project):
    retry = get_retry_count(proj)
    if retry >= MAX_RETRIES:
        print(f"[HARNESS] Task FAILED after {MAX_RETRIES} retries. Manual intervention needed.")
        input("Press Enter to exit.")
        sys.exit(1)
    else:
        print(f"[HARNESS] Resuming failed task (retry {retry + 1}/{MAX_RETRIES})...")
        set_status(proj, "PENDING")

# ── Main loop ──────────────────────────────────────────────────────────────────

def run_loop(proj: Project, force_intake: bool = False):
    print(f"[HARNESS] Project: {proj.root}")
    print(f"[HARNESS] Model:   {MODEL}\n")
    pending_goal: str = ""

    while True:
        status = get_status(proj)

        if force_intake or status == "INTAKE":
            force_intake = False
            run_intake(proj, seed_text=pending_goal)
            pending_goal = ""

        elif status == "PENDING":
            run_planner(proj)

        elif status == "IN_PROGRESS":
            run_builder(proj)

        elif status == "REVIEW":
            run_reviewer(proj)

        elif status == "DONE":
            archive_task(proj)
            if has_pending_in_queue(proj):
                print("[HARNESS] Pulling next task from queue...\n")
                _promote_queued_task(proj)
            else:
                print("[HARNESS] Queue empty.\n")
                again = input("Describe your next goal (or press Enter to exit): ").strip()
                if again:
                    pending_goal = again  # FIX #4: passed into run_intake seed
                    set_status(proj, "INTAKE")
                else:
                    break

        elif status == "FAILED":
            handle_failed_on_start(proj)  # FIX #13

        time.sleep(POLL_INTERVAL)

# ── Status command ─────────────────────────────────────────────────────────────

def print_status(proj: Project):
    content = proj.r(proj.tasks)
    status  = get_status(proj)
    name    = _get_task_name(proj)
    agent_m = re.search(r"\*\*Current agent:\*\*\s*(.+)", content)
    agent   = agent_m.group(1).strip() if agent_m else "—"
    retries = get_retry_count(proj)
    routing = get_routing(proj)

    print(f"\n{'─'*45}")
    print(f"Project:       {proj.root.name}")
    print(f"Active task:   {name}")
    print(f"Status:        {status}")
    print(f"Routing:       {routing}")
    print(f"Current agent: {agent}")
    print(f"Retry count:   {retries}/{MAX_RETRIES}")
    print(f"{'─'*45}\n")

# ── Entry point ────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="3-agent coding harness")
    parser.add_argument("command", nargs="?", choices=["intake", "run", "status"], default="run")
    parser.add_argument("--project", "-p", help="Project name from projects.json")
    parser.add_argument("--add", nargs=2, metavar=("NAME", "PATH"), help="Register a new project")
    args = parser.parse_args()

    if args.add:
        add_project(args.add[0], args.add[1])
        return

    proj_path = get_project_path(args.project)
    validate_project_files(proj_path)       # FIX #8: validate before anything runs
    proj = Project(proj_path)

    if args.command == "status":
        print_status(proj)
    elif args.command == "intake":
        run_loop(proj, force_intake=True)
    else:
        run_loop(proj)

if __name__ == "__main__":
    main()
