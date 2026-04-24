#!/usr/bin/env python3
"""
Q&A agent over the wiki. Asks complex questions against the knowledge base.
Usage:
  python qa.py "What are the main regulatory risks for DeFi protocols?"
  python qa.py --interactive
  python qa.py --question "..." --output report.md
  python qa.py --question "..." --file-back    # answer gets filed as wiki article
"""
import argparse
import json
import re
import sys
import subprocess
from pathlib import Path
from datetime import datetime

VAULT = Path("/home/thomas/Dropbox/memory/Obisidan")
WIKI = VAULT / "Projects" / "llm-knowledge-base" / "wiki"
WIKI_JSON = WIKI / "index.json"
LOG = WIKI / "log.md"
KB = WIKI.parent


def cite_formatter(sources: list[dict]) -> str:
    """
    Format a list of search results as Obsidian wikilink citations.
    sources: list of dicts with keys: path, title, score (optional)
    Returns a markdown string like:
      Sources: [[slug]] (BM25: 0.84) — Title, [[slug2]] (BM25: 0.71) — Title2
    """
    if not sources:
        return ""
    parts = []
    for s in sources:
        path = Path(s.get("path", ""))
        title = s.get("title") or path.stem
        score = s.get("score")
        # Try to read frontmatter title if available
        try:
            if path.exists():
                raw = path.read_text(encoding="utf-8")
                fm_match = re.search(r'^title:\s*["\']?(.+?)["\']?\s*$', raw, re.MULTILINE)
                if fm_match:
                    title = fm_match.group(1).strip()
        except Exception:
            pass
        slug = re.sub(r'[^a-zA-Z0-9\s-]', '', title).strip().replace(' ', '-').lower()
        score_str = f" (BM25: {score:.2f})" if score is not None else ""
        parts.append(f"[[{slug}]]{score_str} — {title}")
    return "Sources: " + ", ".join(parts)


def filing_decision(answer_text: str, source_count: int) -> dict:
    """
    Decide where to file an answer based on length and source count.
    Returns: {target, slug, word_count, source_count}
    """
    word_count = len(answer_text.split())
    slug = slugify(answer_text[:60])

    if word_count < 150 or source_count == 1:
        target = "questions"
    elif word_count > 800 or source_count >= 4:
        target = "articles"
    else:
        target = "concepts"

    return {"target": target, "slug": slug, "word_count": word_count, "source_count": source_count}


def auto_file(question: str, answer_text: str, sources: list[dict],
              wiki_root: Path) -> Path | None:
    """
    Route and write a Q&A answer to the correct wiki location automatically.
    Returns the Path of the created file, or None if filing failed.
    """
    decision = filing_decision(answer_text, len(sources))
    target_dir = wiki_root / decision["target"]
    target_dir.mkdir(parents=True, exist_ok=True)

    # Use question-based slug for the filename
    slug = slugify(question)
    dest = target_dir / f"q-{slug[:40]}.md"

    # If file exists, append as new question entry instead of overwriting
    if dest.exists():
        existing = dest.read_text(encoding="utf-8")
        separator = f"\n\n---\n\n## Q: {question}\n\n"
        new_entry = separator + answer_text.strip() + "\n\n" + cite_formatter(sources)
        dest.write_text(existing + new_entry, encoding="utf-8")
        print(f"  Appended to existing: {dest.name}")
        return dest

    # Try base slug match (without URL-encoded chars) to handle possessive forms
    base = slug.split('-')[0:3]
    # Strip trailing 's' from last base word for possessive matching
    if len(base) >= 3 and base[2].endswith('s'):
        base = base[:2] + [base[2][:-1]]
    for candidate in target_dir.glob("q-*.md"):
        cand_slug = candidate.stem  # e.g. "q-what-is-solana"
        # Strip leading "q-" prefix
        cand_parts = cand_slug.split('-')[1:4]  # ['what', 'is', 'solana']
        if len(cand_parts) >= 3 and cand_parts[2].endswith('s'):
            cand_parts = cand_parts[:2] + [cand_parts[2][:-1]]
        if cand_parts == base:
            dest = candidate
            existing = dest.read_text(encoding="utf-8")
            separator = f"\n\n---\n\n## Q: {question}\n\n"
            new_entry = separator + answer_text.strip() + "\n\n" + cite_formatter(sources)
            dest.write_text(existing + new_entry, encoding="utf-8")
            print(f"  Appended to existing: {dest.name}")
            return dest

    citations = cite_formatter(sources)
    frontmatter = f'''---
title: "{question[:80]}"
question: "{question}"
answered: {datetime.now().date()}
target: {decision["target"]}
word_count: {decision["word_count"]}
sources: {decision["source_count"]}
tags: [research]
---

# {question}

{answer_text.strip()}

{citations}
'''
    try:
        dest.write_text(frontmatter, encoding="utf-8")
        print(f"  Filed to: {dest}")
        return dest
    except Exception as e:
        print(f"  WARNING: Filing failed ({e}) — answer not saved to wiki")
        return None


# ── context gathering ─────────────────────────────────────────────────────────

def load_wiki_context(max_files: int = 30, max_words: int = 80000) -> str:
    """Load wiki content for LLM context, up to word limit."""
    if WIKI_JSON.exists():
        try:
            index = json.loads(WIKI_JSON.read_text(encoding="utf-8"))
        except Exception:
            index = []
    else:
        index = []

    context_parts = []
    total_words = 0

    # Sort by word count (prefer shorter, well-structured articles)
    index.sort(key=lambda x: x.get("word_count", 0))

    for item in index:
        if len(context_parts) >= max_files:
            break
        path = Path(item["path"])
        if not path.exists():
            continue
        try:
            content = path.read_text(encoding="utf-8")
        except Exception:
            continue

        wc = item.get("word_count", len(content.split()))
        if total_words + wc > max_words:
            # Partial: include first portion of this file
            lines = content.splitlines()
            budget = max_words - total_words
            approx_lines = budget // 5  # rough chars per line
            content = "\n".join(lines[:approx_lines])
            context_parts.append(f"\n\n=== {item['title']} ===\n\n{content}\n")
            break

        context_parts.append(f"\n\n=== {item['title']} ===\n\n{content}\n")
        total_words += wc

    return "\n".join(context_parts)

def load_wiki_index() -> list[dict]:
    if WIKI_JSON.exists():
        try:
            return json.loads(WIKI_JSON.read_text(encoding="utf-8"))
        except Exception:
            pass
    return []

def build_qa_prompt(question: str, context: str, index: list[dict]) -> str:
    """Build the Q&A prompt for the LLM."""
    article_list = "\n".join(
        f"- [[{i['title']}]]" for i in sorted(index, key=lambda x: x.get("title",""))
    )
    prompt = f"""You are a research assistant answering questions from a personal knowledge base wiki.

Answer the question below using ONLY the wiki content provided. Be precise, cite sources, and note where the wiki lacks information.

## Question

{question}

## Wiki Content

{context}

## Article Index

{article_list}

## Instructions

- Answer based strictly on the wiki content above.
- Use wikilinks `[[Article Title]]` to cite sources.
- If the answer is uncertain, say "The wiki does not contain sufficient information on this."
- If the question is broad, structure your answer with sections.
- At the end, suggest 2-3 follow-up questions worth exploring.

## Output format

Format your answer as a markdown wiki article with:
- YAML frontmatter (title, question, answered, tags)
- The answer body
- A "Sources" section listing relevant wiki articles
- A "Follow-up Questions" section

Example frontmatter:
```yaml
---
title: "Regulatory Risks for DeFi Protocols"
question: "{question}"
answered: {datetime.now().date()}
tags: [defi, regulation]
---
```
"""
    return prompt

def build_followup_prompt(original_question: str, answer: str, context: str) -> str:
    """After answering, ask the LLM to file the Q&A as a wiki article."""
    return f"""The following Q&A was generated from the wiki. File it as a permanent wiki article.

## Original Question
{original_question}

## Answer
{answer}

## Wiki Context (for citations)
{context[:5000]}

Write this as a wiki article in the format:
```json
{{"path": "wiki/questions/q-<slug>.md", "content": "..."}}
```

Use a slug derived from the question. Include YAML frontmatter. Output only the JSON.
"""

def slugify(text: str) -> str:
    """Create a filesystem-safe slug from question text."""
    import urllib.parse
    clean = re.sub(r'[^\w\s-]', '', text.lower())
    slug = re.sub(r'[\s_]+', '-', clean).strip('-')[:60]
    return urllib.parse.quote(slug, safe='')

def file_answer_to_wiki(question: str, answer_text: str, context: str) -> Path:
    """Write a Q&A answer back to the wiki as a questions/ article."""
    followup_prompt = build_followup_prompt(question, answer_text, context)
    out = KB / ".qa_followup_prompt.md"
    out.write_text(followup_prompt, encoding="utf-8")

    # LLM will respond with JSON: {"path": "...", "content": "..."}
    # For now, create the file path and write a placeholder that the LLM should replace.
    slug = slugify(question)
    dest = WIKI / "crypto-trading" / "questions" / f"q-{slug[:40]}.md"
    dest.parent.mkdir(parents=True, exist_ok=True)

    if dest.exists():
        print(f"  Article already exists: {dest.name}")
        return dest

    # Write a template — LLM fills in via the followup_prompt
    template = f"""---
title: "{question}"
question: "{question}"
answered: {datetime.now().date()}
tags: [research]
---

# {question}

<!-- LLM: fill in the answer below using the followup prompt at .qa_followup_prompt.md -->

_This article was auto-generated from a Q&A session and needs the LLM to complete it._

"""
    dest.write_text(template, encoding="utf-8")
    print(f"  Created: {dest}")
    print(f"  Followup prompt: {out}")
    print("  → Run your LLM on .qa_followup_prompt.md to complete the article.")
    return dest

# ── CLI ───────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="Ask questions against the wiki")
    parser.add_argument("question", nargs="?", default=None)
    parser.add_argument("--interactive", action="store_true", help="Interactive Q&A mode")
    parser.add_argument("--output", type=Path, help="Output path for the answer")
    parser.add_argument("--max-words", type=int, default=80000, help="Max context words")
    parser.add_argument("--file-back", action="store_true",
                        help="After generating answer, file it as a wiki article")
    args = parser.parse_args()

    index = load_wiki_index()
    if not index:
        print("Wiki index not found. Run: python3 -m tools.index --rebuild")
        sys.exit(1)

    print(f"Wiki loaded: {len(index)} articles")

    if args.interactive:
        print("Interactive Q&A mode. Type 'exit' to quit.\n")
        while True:
            try:
                q = input("Q> ")
            except (EOFError, KeyboardInterrupt):
                break
            if q.strip().lower() in ("exit", "quit", "q"):
                break
            if not q.strip():
                continue
            context = load_wiki_context(max_words=args.max_words)
            prompt = build_qa_prompt(q, context, index)
            out = KB / ".qa_prompt.md"
            out.write_text(prompt, encoding="utf-8")
            print(f"\n→ Prompt written to: {out}")
            print("  Hand this to the LLM agent to generate the answer.\n")
        return

    if not args.question:
        parser.print_help()
        return

    context = load_wiki_context(max_words=args.max_words)
    prompt = build_qa_prompt(args.question, context, index)

    out = KB / ".qa_prompt.md"
    out.write_text(prompt, encoding="utf-8")

    if args.output:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(prompt, encoding="utf-8")
        print(f"Q&A prompt written to: {args.output}")
    else:
        print("\n" + "=" * 70)
        print(f"QUESTION: {args.question}")
        print("=" * 70)
        print(f"\nPrompt written to: {out}")
        print("  → Hand to LLM to generate the answer.")
        print("  → After getting the answer, run with --file-back to file it as a wiki article.")

    if args.file_back:
        # Placeholder — user pastes LLM answer here
        print("\nPaste the LLM's answer below (end with Ctrl+D / Ctrl+Z):")
        try:
            answer = sys.stdin.read()
        except EOFError:
            answer = ""
        if answer.strip():
            dest = file_answer_to_wiki(args.question, answer.strip(), context)
            # Append to log
            _append_log(f"query | {args.question[:60]} → filed to {dest.relative_to(WIKI)}")
            print(f"\n✓ Filed to wiki and logged.")
        else:
            print("No answer provided, skipping wiki filing.")

def _append_log(entry: str):
    """Append to log.md with date prefix."""
    if not LOG.exists():
        LOG.write_text("# Wiki Log\n\n---\n", encoding="utf-8")
    LOG.write_text(LOG.read_text(encoding="utf-8") + f"## [{datetime.now().strftime('%Y-%m-%d')}] {entry}\n",
                     encoding="utf-8")

if __name__ == "__main__":
    main()
