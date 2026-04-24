"""Tests for qmd.py BM25 and hybrid search."""
import sys
sys.path.insert(0, "/home/thomas/Dropbox/memory/Obisidan/Projects/llm-knowledge-base/tools")
from pathlib import Path
from qmd import BM25Indexer

WIKI = Path("/home/thomas/Dropbox/memory/Obisidan/Projects/llm-knowledge-base/wiki")

def test_phrase_search_returns_results():
    """Phrase search should return results for a known bigram query."""
    idx = BM25Indexer.from_sqlite(
        Path("/home/thomas/Dropbox/memory/Obisidan/Projects/llm-knowledge-base/.qmd.db")
    )
    results = idx.phrase_search("liquidity pool", top_n=5)
    assert len(results) > 0
    assert "title" in results[0]
    assert "score" in results[0]

def test_phrase_search_different_from_bm25():
    """Phrase search may differ from plain BM25 due to proximity penalty."""
    idx = BM25Indexer.from_sqlite(
        Path("/home/thomas/Dropbox/memory/Obisidan/Projects/llm-knowledge-base/.qmd.db")
    )
    bm25_results = idx.search("liquidity pool", top_n=5)
    phrase_results = idx.phrase_search("liquidity pool", top_n=5)
    # Both should return results; phrase may reorder
    assert len(bm25_results) > 0
    assert len(phrase_results) > 0