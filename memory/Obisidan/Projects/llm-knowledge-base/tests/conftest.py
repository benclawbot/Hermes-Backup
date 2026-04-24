"""Shared pytest fixtures for llm-knowledge-base tests."""
import pytest
import tempfile
import pathlib
import shutil

@pytest.fixture
def tmp_wiki(tmp_path):
    """Create a minimal wiki with sample articles for testing."""
    wiki = tmp_path / "wiki"
    concepts = wiki / "concepts"
    articles = wiki / "articles"
    questions = wiki / "questions"
    concepts.mkdir(parents=True)
    articles.mkdir(parents=True)
    questions.mkdir(parents=True)

    (concepts / "liquidity-pools.md").write_text("""---
title: Liquidity Pools
tags: [defi, amm]
created: 2026-01-01
---

# Liquidity Pools

Liquidity pools are token pools locked in smart contracts to facilitate trading.
They are the backbone of AMMs (automated market makers).
""", encoding="utf-8")

    (concepts / "amm.md").write_text("""---
title: Automated Market Makers
tags: [defi, trading]
created: 2026-01-01
---

# Automated Market Makers

AMMs use liquidity pools to price assets algorithmically without order books.
""", encoding="utf-8")

    (concepts / "solana.md").write_text("""---
title: Solana Blockchain
tags: [blockchain, l1]
created: 2026-01-01
---

# Solana Blockchain

Solana is a high-performance blockchain with 0.4 second block times.
""", encoding="utf-8")

    return wiki


@pytest.fixture
def sample_articles(tmp_wiki):
    """Return list of sample article paths from tmp_wiki."""
    return list(tmp_wiki.rglob("*.md"))


@pytest.fixture
def wiki_with_index(tmp_wiki, monkeypatch):
    """tmp_wiki with a fake index.json pointing to the articles."""
    import json
    idx = tmp_wiki / "index.json"
    articles = [
        {"title": "Liquidity Pools", "path": str(tmp_wiki / "concepts" / "liquidity-pools.md"),
         "word_count": 30},
        {"title": "Automated Market Makers", "path": str(tmp_wiki / "concepts" / "amm.md"),
         "word_count": 20},
    ]
    idx.write_text(json.dumps(articles), encoding="utf-8")
    return tmp_wiki
