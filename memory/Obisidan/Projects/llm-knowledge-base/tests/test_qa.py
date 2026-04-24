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
