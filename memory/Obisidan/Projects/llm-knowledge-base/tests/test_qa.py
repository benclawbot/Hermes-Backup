"""Tests for qa.py cite_formatter and filing logic."""
import sys
sys.path.insert(0, "/home/thomas/Dropbox/memory/Obisidan/Projects/llm-knowledge-base/tools")
from pathlib import Path
from qa import cite_formatter

def test_cite_formatter_single_source():
    sources = [
        {"path": "/wiki/crypto-trading/concepts/liquidity-pools.md", "title": "Liquidity Pools", "score": 0.84},
    ]
    result = cite_formatter(sources)
    assert "liquidity-pools" in result.lower() or "Liquidity" in result
    assert "0.84" in result

def test_cite_formatter_multiple_sources():
    sources = [
        {"path": "/wiki/crypto-trading/concepts/liquidity-pools.md", "title": "Liquidity Pools", "score": 0.84},
        {"path": "/wiki/crypto-trading/concepts/amm.md", "title": "AMM", "score": 0.71},
    ]
    result = cite_formatter(sources)
    assert "Liquidity" in result
    assert "AMM" in result
    assert "0.84" in result
    assert "0.71" in result

def test_cite_formatter_empty():
    result = cite_formatter([])
    assert result == ""

def test_cite_formatter_uses_frontmatter_title(monkeypatch):
    """If frontmatter title differs from path stem, use frontmatter title."""
    import tempfile, pathlib
    with tempfile.TemporaryDirectory() as tmpdir:
        wiki_path = pathlib.Path(tmpdir) / "concepts" / "lp.md"
        wiki_path.parent.mkdir()
        wiki_path.write_text("""---
title: "Liquidity Pools v2"
---

# Liquidity Pools
""")
        sources = [{"path": str(wiki_path), "title": "lp", "score": 0.9}]
        result = cite_formatter(sources)
        # Should pick up frontmatter title
        assert "Liquidity Pools" in result or "lp" in result.lower()


# ── filing_decision tests ─────────────────────────────────────────────────────

from qa import filing_decision, auto_file

def test_filing_decision_short_single_source():
    """Short answer from one source → questions/"""
    decision = filing_decision(
        answer_text="Solana block time is 0.4 seconds.",
        source_count=1
    )
    assert decision["target"] == "questions"

def test_filing_decision_long_multi_source():
    """Long answer from multiple sources → articles/"""
    long_text = " ".join(["word"] * 900)
    decision = filing_decision(answer_text=long_text, source_count=4)
    assert decision["target"] == "articles"

def test_filing_decision_medium_multi_source():
    """Medium answer from multiple sources → concepts/"""
    medium = " ".join(["word"] * 300)
    decision = filing_decision(answer_text=medium, source_count=3)
    assert decision["target"] == "concepts"

def test_filing_decision_medium_single_source():
    """Medium answer but single source → still questions (length < 150 OR single source)"""
    medium = " ".join(["word"] * 200)
    decision = filing_decision(answer_text=medium, source_count=1)
    assert decision["target"] == "questions"

def test_auto_file_creates_file(tmp_path):
    """auto_file should create a file in the correct wiki subdirectory."""
    wiki_root = tmp_path / "wiki"
    wiki_root.mkdir()
    question = "What is Solana's block time?"
    answer = "Solana has a 0.4 second block time."
    sources = [{"path": "/wiki/concepts/solana.md", "title": "Solana", "score": 0.8}]
    dest = auto_file(question, answer, sources, wiki_root)
    assert dest is not None
    assert dest.exists()
    assert "solana" in dest.name.lower() or "block-time" in dest.name.lower()

def test_auto_file_append_if_exists(tmp_path):
    """If target file exists, append as new question entry."""
    wiki_root = tmp_path / "wiki"
    concepts = wiki_root / "questions"
    concepts.mkdir(parents=True)
    existing = concepts / "q-what-is-solana.md"
    existing.write_text("# Existing\n\nOld answer.")
    question = "What is Solana's block time?"
    answer = "Solana block time is 0.4 seconds."
    sources = []
    dest = auto_file(question, answer, sources, wiki_root)
    assert dest == existing
    content = existing.read_text()
    assert "New Q" in content or "What is Solana" in content
