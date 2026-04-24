# Harness Setup

## Prerequisites
```bash
pip install anthropic
export ANTHROPIC_API_KEY=sk-ant-...
```

## Project Structure
```
harness/
  harness.py        ← runtime engine
  projects.json     ← project registry
  
your-project/
  CLAUDE.md         ← system constitution
  AGENTS.md         ← role contracts
  WORKFLOW.md       ← execution engine
  TASKS.md          ← shared state (harness-managed)
  MEMORY.md         ← persistent memory
  RETRO.md          ← failure log
  src/              ← Builder writes code here
```

## First Run

**1. Register your project:**
```bash
python harness.py --add my-app /path/to/your/project
```

**2. Copy the 6 markdown files into your project root.**

**3. Fill in MEMORY.md → Project Context** (stack, entry points, constraints).

**4. Start:**
```bash
python harness.py intake            # fresh start — Planner interviews you
python harness.py run               # resume from current state
python harness.py status            # check what's happening
python harness.py -p other-app run  # switch project
```

## How it works

```
You describe goal → [PLANNER] asks ≤5 questions → TASKS.md auto-written
→ [BUILDER] executes, writes files to disk → [REVIEWER] validates
→ lessons written to MEMORY.md → next task pulled from queue
→ loop continues until queue empty → prompts you for next goal
```

## Escalation (the only times you're interrupted)

- Builder hits an ambiguity it can't resolve
- Task fails ≥ MAX_RETRIES times  
- Reviewer proposes a new system rule (requires your approval)

## Changing the model

Edit `MODEL` in harness.py:
- `claude-sonnet-4-6` — default (fast, balanced)
- `claude-opus-4-6` — harder tasks, slower, more expensive
