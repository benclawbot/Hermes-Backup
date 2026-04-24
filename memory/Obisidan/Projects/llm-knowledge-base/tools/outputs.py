#!/usr/bin/env python3
"""
Outputs layer for the LLM knowledge base.
Renders wiki content as: Marp slides, matplotlib charts, and synthesized reports.

Usage:
  python3 -m tools.outputs --slides-all            # render all wiki articles as slides
  python3 -m tools.outputs --slides wiki/.../foo.md  # render one article as slides
  python3 -m tools.outputs --chart "TVL over time" --data tvl.json
  python3 -m tools.outputs --chart-from-wiki "defi ecosystem" --aspect TVL
  python3 -m tools.outputs --report "DeFi landscape" --query "DeFi ecosystem primitives"
  python3 -m tools.outputs --deck "layer 2 solutions" --query "ZK rollup optimistic rollup"
"""
import argparse
import json
import math
import re
import sys
import time
from datetime import datetime
from pathlib import Path

# ── Paths ────────────────────────────────────────────────────────────────────

KB     = Path("/home/thomas/Dropbox/memory/Obisidan/Projects/llm-knowledge-base")
WIKI   = KB / "wiki"
OUTPUTS = KB / "outputs"

TEMPLATES = {
    "research_summary": {
        "theme": "default",
        "header_bar": True,
        "callout_style": True,
        "footer_query": True,
        "page_numbers": True,
    },
    "concept_explain": {
        "theme": "default",
        "two_column": True,
        "callout_style": False,
        "footer_query": False,
        "page_numbers": True,
    },
    "data_report": {
        "theme": "default",
        "chart_first": True,
        "callout_style": True,
        "footer_query": True,
        "page_numbers": True,
    },
}

# ── Markdown → Marp slides ───────────────────────────────────────────────────

def md_to_marp(content: str, title: str = "", theme: str = "default",
               template: str = "research_summary") -> str:
    """
    Convert a wiki article to Marp slide markdown.
    Strategy: H1/H2/H3 become slide boundaries, code blocks stay intact,
    bullet lists are distributed across slides.
    """
    lines = content.splitlines()
    fm = {}
    fm_end = None
    body_start = 0

    for i, line in enumerate(lines):
        if line.strip() == "---":
            if fm_end is None:
                fm_end = i
                continue
            else:
                body_start = i + 1
                break
        if fm_end is not None and i <= fm_end and ":" in line:
            k, v = line.split(":", 1)
            fm[k.strip()] = v.strip().strip('"').strip("'")

    title = title or fm.get("title", "Wiki Article")

    marp = [
        "---",
        f"title: {title}",
        f"theme: {theme}",
        "paginate: true",
        "---",
        "",
    ]

    tmpl = TEMPLATES.get(template, TEMPLATES["research_summary"])

    # Template-specific header bar
    if tmpl.get("header_bar"):
        marp.extend([
            "",
            f"<!-- header: {title} | {datetime.now().strftime('%Y-%m-%d')} -->",
            "",
        ])

    # Callout block for research_summary
    if tmpl.get("callout_style") and template == "research_summary":
        marp.extend(["", "> [!NOTE]", ""])

    # Title slide
    marp.append(f"# {title}")
    marp.append("")
    if fm.get("tags"):
        marp.append(f"Tags: {fm['tags']}")
    if fm.get("created"):
        marp.append(f"Created: {fm['created']}")
    marp.append("")
    marp.append("---")

    body = "\n".join(lines[body_start:])
    in_code = False
    current_slide = []
    slide_count = 1
    bullets_buf = []

    def flush_slide():
        nonlocal current_slide, bullets_buf, slide_count
        if current_slide or bullets_buf:
            if bullets_buf:
                current_slide.extend(bullets_buf)
                bullets_buf = []
            marp.append("")
            marp.extend(current_slide)
            marp.append("")
            marp.append("---")
            current_slide = []
            slide_count += 1

    for line in lines[body_start:]:
        # Code fence toggle
        if line.strip().startswith("```"):
            in_code = not in_code
            current_slide.append(line)
            continue

        # Inside code block — pass through
        if in_code:
            current_slide.append(line)
            continue

        # H1 — major section: new slide
        if line.startswith("# "):
            flush_slide()
            current_slide = [line, ""]
            continue

        # H2 — subsection: new slide
        if line.startswith("## "):
            flush_slide()
            h2_text = line.lstrip("#").strip()
            current_slide = [
                f"## {h2_text}",
                "",
                f"<!-- footer: {title} -->",
                ""
            ]
            continue

        # H3 — inline emphasis
        if line.startswith("### "):
            h3_text = line.lstrip("#").strip()
            current_slide.append(f"**{h3_text}**")
            current_slide.append("")
            continue

        # Empty line
        if not line.strip():
            continue

        # Bullet list item
        m = re.match(r"^(\s*)[-*+]\s+(.*)$", line)
        if m:
            indent = len(m.group(1))
            text = m.group(2).strip()
            if indent <= 2:
                bullets_buf.append(f"- {text}")
            else:
                bullets_buf.append(f"  - {text}")
            continue

        # Numbered list
        nm = re.match(r"^\s*\d+\.\s+(.*)$", line)
        if nm:
            bullets_buf.append(f"1. {nm.group(1).strip()}")
            continue

        # Blockquote
        if line.startswith(">"):
            current_slide.append(f"*{line.lstrip('> ')}*")
            continue

        # Regular paragraph
        bullets_buf.append(line)

    flush_slide()
    return "\n".join(marp)

def render_slides(input_path: Path, output_dir: Path = None,
                  template: str = "research_summary",
                  fmt: str = "md") -> Path:
    """Render one wiki article as Marp slides."""
    content = input_path.read_text(encoding="utf-8")
    title_match = re.search(r"^#\s+(.+)$", content, re.MULTILINE)
    title = title_match.group(1).strip() if title_match else input_path.stem

    marp_content = md_to_marp(content, title=title, template=template)
    out_dir = output_dir or (OUTPUTS / "slides" / input_path.stem)
    out_dir.mkdir(parents=True, exist_ok=True)
    # Use article stem as filename unless caller overrides (single-article mode uses slides.md)
    if output_dir:
        out_path = out_dir / f"{input_path.stem}.md"
    else:
        out_path = out_dir / "slides.md"
    out_path.write_text(marp_content, encoding="utf-8")

    if fmt == "md":
        return out_path

    if fmt in ("pdf", "html"):
        import subprocess
        try:
            result = subprocess.run(
                ["marp", "--" + fmt,
                 "--output", str(output_dir) if output_dir else str(OUTPUTS / "slides"),
                 str(out_path)],
                capture_output=True, text=True, timeout=60
            )
            if result.returncode != 0:
                print(f"  marp-cli warning: {result.stderr}", file=sys.stderr)
            suffix = ".pdf" if fmt == "pdf" else ".html"
            return out_path.with_suffix(suffix)
        except FileNotFoundError:
            print("  marp-cli not found — install with: npm install -g @marp-team/marp-cli",
                  file=sys.stderr)
            return out_path
        except subprocess.TimeoutExpired:
            print("  marp-cli timed out", file=sys.stderr)
            return out_path
    return out_path

def render_all_slides(wiki_root: Path, output_dir: Path = None, domain: str = None) -> list[Path]:
    """Render all wiki articles as Marp slides. Each article gets its own subdirectory."""
    out_dir = output_dir or (OUTPUTS / "slides")
    out_dir.mkdir(parents=True, exist_ok=True)
    rendered = []

    target = wiki_root / domain if domain else wiki_root
    count = 0
    for md in target.rglob("*.md"):
        if "wiki-health-report" in md.name or md.name in ("index.md", "log.md", "SCHEMA.md"):
            continue
        try:
            # Don't pass output_dir — let render_slides create per-article subdirs
            path = render_slides(md)
            rendered.append(path)
            count += 1
            if count % 20 == 0:
                print(f"  ... {count} articles rendered", file=sys.stderr)
        except Exception as e:
            print(f"  Skipping {md.name}: {e}", file=sys.stderr)

    print(f"Rendered {len(rendered)} slide decks → {out_dir}", file=sys.stderr)
    return rendered

# ── Chart generation ──────────────────────────────────────────────────────────

def render_chart(
    data: list | dict,
    title: str,
    output_dir: Path = None,
    chart_type: str = "bar",
    filename: str = None,
) -> Path:
    """
    Render a matplotlib chart from structured data.
    data: list of {label, value} dicts, or dict with 'x'/'y' keys.
    """
    try:
        import matplotlib
        matplotlib.use("Agg")
        import matplotlib.pyplot as plt
    except ImportError:
        print("matplotlib not available. Install: pip install matplotlib", file=sys.stderr)
        sys.exit(1)

    out_dir = output_dir or (OUTPUTS / "charts")
    out_dir.mkdir(parents=True, exist_ok=True)

    # Normalise data
    if isinstance(data, dict):
        x = data.get("x", list(range(len(data.get("y", [])))))
        y = data.get("y", [])
    else:
        x = [str(d.get("label", i)) for i, d in enumerate(data)]
        y = [float(d.get("value", 0)) for d in data]

    fig, ax = plt.subplots(figsize=(10, 5))
    # Warm off-white background tuned for Obsidian light theme
    fig.patch.set_facecolor("#FAFAF8")
    ax.set_facecolor("#FFFFFF")
    ax.tick_params(colors="#444444")
    ax.xaxis.label.set_color("#333333")
    ax.yaxis.label.set_color("#333333")
    ax.title.set_color("#1A1A1A")
    ax.spines["top"].set_visible(False)
    ax.spines["right"].set_visible(False)
    ax.spines["left"].set_color("#DDDDDD")
    ax.spines["bottom"].set_color("#DDDDDD")
    ax.grid(True, alpha=0.2, color="#CCCCCC", axis="y")

    # Warm amber/terracotta palette for bars
    warm_colors = ["#D4854A", "#C4763A", "#A65D2E", "#8B4E26", "#6F3D1E",
                   "#5A3018", "#4A2814", "#3A2010", "#2A180C"]

    slug = re.sub(r"[^a-z0-9]+", "-", title.lower())[:40]

    if chart_type == "bar":
        bars = ax.bar(x, y, color=warm_colors[0], edgecolor="none", linewidth=0, width=0.7)
        ax.bar_label(bars, fmt="%.1f", color="#333333", fontsize=10, padding=3)
        ax.set_ylim(0, max(y) * 1.2 if y else 1)
    elif chart_type == "line":
        ax.plot(x, y, color=warm_colors[0], linewidth=2.5, marker="o", markersize=5,
                markerfacecolor="#FFFFFF", markeredgecolor=warm_colors[0])
        ax.fill_between(range(len(y)), y, alpha=0.1, color=warm_colors[0])
    elif chart_type == "pie":
        wedges, labels, autotexts = ax.pie(
            y, labels=x, autopct="%1.1f%%",
            colors=warm_colors[:len(y)],
            textprops={"color": "#333333"}
        )
        for at in autotexts:
            at.set_color("#FFFFFF")
    else:
        ax.scatter(x, y, color=warm_colors[0], s=60)

    ax.set_title(title, color="#1A1A1A", fontsize=16, fontweight="bold", pad=12)
    plt.xticks(rotation=30, ha="right", fontsize=10, color="#444444")
    plt.yticks(fontsize=9, color="#444444")
    plt.tight_layout()

    out_name = filename or f"{slug}.png"
    out_path = out_dir / out_name
    plt.savefig(out_path, dpi=150, facecolor="#FAFAF8", bbox_inches="tight")
    plt.close()
    return out_path

def render_wiki_chart(
    query: str,
    aspect: str,
    wiki_root: Path,
    output_dir: Path = None,
) -> Path | None:
    """
    Try to extract structured data from wiki articles matching `query`,
    then render a chart for `aspect` (e.g. 'TVL', 'fee', 'apy').
    Falls back to generating sample data if no structured data found.
    """
    # Simple data extraction — look for numeric patterns in matching articles
    sys.path.insert(0, str(KB / "tools"))
    from qmd import BM25Indexer, DB as QMD_DB

    try:
        if QMD_DB.exists():
            idx = BM25Indexer.from_sqlite(QMD_DB)
        else:
            idx = BM25Indexer().build(wiki_root)
    except Exception:
        idx = BM25Indexer().build(wiki_root)

    results = idx.search(query, top_n=5)
    if not results:
        print(f"No wiki articles found for: {query}", file=sys.stderr)
        return None

    # Extract numeric facts from top articles
    numbers: dict[str, float] = {}
    for r in results:
        path = Path(r["path"])
        if not path.exists():
            continue
        content = path.read_text(encoding="utf-8")
        # Look for patterns like "TVL: $10B" or "fee: 0.3%"
        # Normalise values: "10B" -> 10_000_000_000, "5M" -> 5_000_000, "0.3%" -> 0.003
        def parse_val(val_str: str, unit_str: str | None) -> float:
            val = float(val_str.replace(",", ""))
            if not unit_str:
                return val
            u = unit_str.lower()
            if u in ("billion", "b"):
                return val * 1_000_000_000
            elif u in ("million", "m"):
                return val * 1_000_000
            elif u in ("thousand", "k"):
                return val * 1_000
            elif u == "bp":
                return val / 10_000
            elif u == "%":
                return val / 100
            return val

        patterns = [
            r"(?P<label>[A-Za-z ][A-Za-z ]*?)[\s:]+?\$?(?P<value>[\d,]+\.?\d*)\s*(?P<unit>billion|million|thousand|B|M|K|bp|%)?",
        ]
        for pat in patterns:
            for m in re.finditer(pat, content, re.IGNORECASE):
                label = m.group("label").strip()[:30]
                val_str = m.group("value").replace(",", "")
                try:
                    val = parse_val(val_str, m.group("unit"))
                    numbers[label] = val
                except ValueError:
                    pass

    if numbers:
        data = [{"label": k, "value": v} for k, v in sorted(numbers.items(), key=lambda x: -x[1])[:10]]
        return render_chart(data, title=f"{aspect} — {query}", output_dir=output_dir)

    # Fallback: generate a placeholder chart from article counts
    data = [{"label": r["title"][:20], "value": r["score"]} for r in results[:8]]
    return render_chart(data, title=f"Search relevance: {query}", output_dir=output_dir)

# ── Report composer ────────────────────────────────────────────────────────────

def compose_report(
    topic: str,
    wiki_root: Path,
    output_dir: Path = None,
    max_articles: int = 6,
) -> Path:
    """
    Compose a long-form report on `topic` by:
    1. Searching the wiki for relevant articles
    2. Reading top-N articles
    3. Producing a structured markdown report with sections synthesized from sources
    4. Embedding wiki-links back to source articles

    The report is NOT written by an LLM here — it's assembled from existing wiki content.
    Use with an external LLM for synthesis: python3 -m tools.qa "Synthesize a report on X" --file-back
    """
    sys.path.insert(0, str(KB / "tools"))
    from qmd import BM25Indexer, DB as QMD_DB

    try:
        if QMD_DB.exists():
            idx = BM25Indexer.from_sqlite(QMD_DB)
        else:
            idx = BM25Indexer().build(wiki_root)
    except Exception:
        idx = BM25Indexer().build(wiki_root)

    results = idx.search(topic, top_n=max_articles)

    out_dir = output_dir or (OUTPUTS / "reports")
    out_dir.mkdir(parents=True, exist_ok=True)
    slug = re.sub(r"[^a-z0-9]+", "-", topic.lower())[:50]
    out_path = out_dir / f"{slug}.md"

    date = datetime.now().strftime("%Y-%m-%d")

    lines = [
        "---",
        f"title: Report — {topic}",
        f"topic: {topic}",
        f"date: {date}",
        f"sources: {len(results)} articles",
        "---",
        "",
        f"# {topic}",
        "",
        f"_Compiled from the knowledge base — {date}_",
        "",
        "## Sources",
        "",
    ]

    for r in results:
        lines.append(f"- [[{r['title']}]]  _(score: {r['score']:.2f})_")

    lines.extend(["", "---", "", "## Overview", ""])

    for r in results:
        path = Path(r["path"])
        if not path.exists():
            continue
        content = path.read_text(encoding="utf-8")
        # Extract first paragraph
        for line in content.splitlines():
            line = line.strip()
            if line and not line.startswith("#") and not line.startswith("---"):
                lines.append(f"_{path.stem}:_ {line[:300]}")
                lines.append("")
                break

    lines.extend(["", "---", "", "## Key Findings", ""])

    for r in results[:3]:
        path = Path(r["path"])
        if not path.exists():
            continue
        content = path.read_text(encoding="utf-8")
        lines.append(f"### {r['title']}")
        lines.append("")
        # Collect non-empty paragraphs
        paras = []
        in_fm = False
        for line in content.splitlines():
            if line.strip() == "---":
                in_fm = not in_fm
                continue
            if in_fm:
                continue
            if line.startswith("#"):
                continue
            stripped = line.strip()
            if stripped and not stripped.startswith("-"):
                paras.append(stripped)
            if len(paras) >= 3:
                break
        for p in paras[:3]:
            lines.append(f"{p}")
        lines.append("")

    lines.extend([
        "---",
        "",
        f"_Generated {date} · {len(results)} sources · [View in Obsidian](obsidian://open?path={WIKI})_",
    ])

    out_path.write_text("\n".join(lines), encoding="utf-8")
    return out_path

# ── Deck composer (multi-article slide deck) ─────────────────────────────────

def compose_deck(
    topic: str,
    wiki_root: Path,
    output_dir: Path = None,
    max_articles: int = 8,
) -> Path:
    """
    Compose a Marp slide deck covering `topic` by combining content from
    top-N wiki articles into one coherent deck.
    """
    sys.path.insert(0, str(KB / "tools"))
    from qmd import BM25Indexer, DB as QMD_DB

    try:
        if QMD_DB.exists():
            idx = BM25Indexer.from_sqlite(QMD_DB)
        else:
            idx = BM25Indexer().build(wiki_root)
    except Exception:
        idx = BM25Indexer().build(wiki_root)

    results = idx.search(topic, top_n=max_articles)

    out_dir = output_dir or (OUTPUTS / "decks")
    out_dir.mkdir(parents=True, exist_ok=True)
    slug = re.sub(r"[^a-z0-9]+", "-", topic.lower())[:50]
    out_path = out_dir / f"{slug}-deck.md"

    date = datetime.now().strftime("%Y-%m-%d")

    slides = [
        "---",
        f"title: {topic}",
        "theme: default",
        "paginate: true",
        "---",
        "",
        f"# {topic}",
        f"_Sources: {len(results)} articles · {date}_",
        "",
        "---",
    ]

    for r in results:
        path = Path(r["path"])
        if not path.exists():
            continue
        content = path.read_text(encoding="utf-8")
        title_match = re.search(r"^#\s+(.+)$", content, re.MULTILINE)
        article_title = title_match.group(1).strip() if title_match else r["title"]

        slides.append("")
        slides.append(f"## {article_title}")
        slides.append("")

        # First substantive paragraph
        in_fm = False
        para_count = 0
        for line in content.splitlines():
            if line.strip() == "---":
                in_fm = not in_fm
                continue
            if in_fm:
                continue
            if line.startswith("#"):
                continue
            stripped = line.strip()
            if stripped and not stripped.startswith("-"):
                slides.append(stripped[:200])
                para_count += 1
                if para_count >= 2:
                    break

        slides.append("")
        slides.append(f"<!-- footer: [[{r['title']}]] -->")
        slides.append("---")

    out_path.write_text("\n".join(slides), encoding="utf-8")
    return out_path

# ── CLI ────────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="Outputs layer: slides, charts, reports, decks")
    parser.add_argument("--slides", type=Path, help="Render one article as Marp slides")
    parser.add_argument("--slides-all", action="store_true", help="Render all wiki articles as slides")
    parser.add_argument("--slides-domain", help="Render all articles in a domain subfolder")
    parser.add_argument("--chart", help="Chart title")
    parser.add_argument("--chart-type", default="bar", choices=["bar", "line", "pie", "scatter"])
    parser.add_argument("--data", type=Path, help="JSON data file for chart")
    parser.add_argument("--chart-from-wiki", help="Extract data from wiki articles for chart")
    parser.add_argument("--aspect", default="Data", help="Aspect to chart (e.g. TVL, fee)")
    parser.add_argument("--report", help="Topic for report composition")
    parser.add_argument("--deck", help="Topic for multi-article slide deck")
    parser.add_argument("--query", help="Search query (for --report / --deck)")
    parser.add_argument("--max-articles", type=int, default=6)
    parser.add_argument("--output-dir", type=Path)
    parser.add_argument("--filename", help="Custom output filename (without extension)")
    parser.add_argument("--template", default="research_summary",
                        choices=list(TEMPLATES.keys()))
    parser.add_argument("--format", default="md", choices=["md", "pdf", "html"])
    args = parser.parse_args()

    if args.slides:
        path = render_slides(args.slides, args.output_dir,
                             template=args.template, fmt=args.format)
        print(f"Slides: {path}")
        print("  View in Obsidian with Marp plugin, or export to PDF/PPTX.")
        return

    if args.slides_all:
        paths = render_all_slides(WIKI, args.output_dir)
        for p in paths:
            print(f"  {p}")
        print(f"\n{len(paths)} slide decks rendered.")
        return

    if args.slides_domain:
        paths = render_all_slides(WIKI, args.output_dir, domain=args.slides_domain)
        for p in paths:
            print(f"  {p}")
        print(f"\n{len(paths)} slide decks rendered.")
        return

    if args.chart and args.data:
        data = json.loads(args.data.read_text(encoding="utf-8"))
        path = render_chart(data, title=args.chart, output_dir=args.output_dir,
                            chart_type=args.chart_type, filename=args.filename)
        print(f"Chart: {path}")
        return

    if args.chart_from_wiki:
        path = render_wiki_chart(
            query=args.chart_from_wiki,
            aspect=args.aspect,
            wiki_root=WIKI,
            output_dir=args.output_dir,
        )
        if path:
            print(f"Chart: {path}")
        else:
            print("No data found.", file=sys.stderr)
            sys.exit(1)
        return

    if args.report:
        topic = args.report
        if args.query:
            topic = args.query
        path = compose_report(topic=topic, wiki_root=WIKI, output_dir=args.output_dir,
                             max_articles=args.max_articles)
        print(f"Report: {path}")
        return

    if args.deck:
        topic = args.deck
        if args.query:
            topic = args.query
        path = compose_deck(topic=topic, wiki_root=WIKI, output_dir=args.output_dir,
                           max_articles=args.max_articles)
        print(f"Deck: {path}")
        return

    parser.print_help()

if __name__ == "__main__":
    main()
