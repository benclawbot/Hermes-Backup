#!/usr/bin/env python3
"""
qmd — local BM25 search engine for the LLM knowledge base wiki.

Usage:
  python3 -m tools.qmd "query"                          # search wiki
  python3 -m tools.qmd "query" --top 5 --json            # JSON output (LLM-friendly)
  python3 -m tools.qmd --reindex                         # rebuild BM25 index
  python3 -m tools.qmd --serve --port 8765              # MCP/JSON-RPC server mode
  python3 -m tools.qmd --mcp-stdio                       # MCP stdio server (for config)

Examples:
  python3 -m tools.qmd "flash loans arbitrage"
  python3 -m tools.qmd "liquidity mining yield farming" --top 3 --json
  python3 -m tools.qmd --reindex
"""
import argparse
import json
import math
import re
import sqlite3
import sys
import time
from datetime import datetime
from pathlib import Path
from typing import Optional

# ── Paths ────────────────────────────────────────────────────────────────────

KB   = Path("/home/thomas/Dropbox/memory/Obisidan/Projects/llm-knowledge-base")
WIKI = KB / "wiki"
DB   = KB / ".qmd.db"

# ── Tokenizer ────────────────────────────────────────────────────────────────

def tokenize(text: str) -> list[str]:
    """Whitespace+punctuation tokenizer, lowercase."""
    return re.findall(r"[a-zA-Z0-9_'-]+", text.lower())

def strip_frontmatter(content: str) -> str:
    """Remove YAML frontmatter from markdown."""
    lines = content.splitlines()
    if lines and lines[0].strip() == "---":
        end = None
        for i, line in enumerate(lines[1:], 1):
            if line.strip() == "---":
                end = i
                break
        if end is not None:
            lines = lines[end+1:]
    return "\n".join(lines)

# ── BM25Indexer ──────────────────────────────────────────────────────────────

class BM25Indexer:
    """
    In-memory BM25 index over wiki markdown files.
    Stores: documents (id → doc), vocabulary (term → df), posting lists (term → [doc_ids]).
    """
    def __init__(self, k1: float = 1.5, b: float = 0.75):
        self.k1 = k1
        self.b  = b
        self.doc_ids: list[int]   = []
        self.docs: dict[int, dict] = {}   # id → {path, title, content, tokens, summary}
        self.vocab: dict[str, int] = {}   # term → document frequency (df)
        self.postings: dict[str, list[int]] = {}  # term → [doc_ids] (inverted index)
        self.N: int = 0
        self.avgdl: float = 0.0

    def index_file(self, path: Path) -> Optional[int]:
        """Index one markdown file. Returns doc_id or None."""
        try:
            raw = path.read_text(encoding="utf-8")
        except Exception:
            return None

        content = strip_frontmatter(raw)

        # Extract title
        m = re.search(r"^#\s+(.+)$", content, re.MULTILINE)
        title = m.group(1).strip() if m else path.stem

        # Summary: first non-heading paragraph
        summary = ""
        for line in content.splitlines():
            line = line.strip()
            if line and not line.startswith("#"):
                summary = line[:200]
                break

        tokens = tokenize(content)
        self.N += 1
        doc_id = self.N

        self.doc_ids.append(doc_id)
        self.docs[doc_id] = {
            "path":    str(path),
            "title":   title,
            "content": content,
            "summary": summary,
            "tokens":  tokens,
            "dl":      len(tokens),
        }

        # Update vocab + postings
        seen: set[str] = set()
        for tok in tokens:
            if tok not in seen:
                seen.add(tok)
                self.vocab[tok] = self.vocab.get(tok, 0) + 1
                self.postings.setdefault(tok, []).append(doc_id)

        return doc_id

    def build(self, wiki_root: Path) -> "BM25Indexer":
        """Index all .md files under wiki_root."""
        for md in wiki_root.rglob("*.md"):
            # Skip health reports and generated indexes
            if "wiki-health-report" in md.name:
                continue
            self.index_file(md)

        total = sum(d["dl"] for d in self.docs.values())
        self.avgdl = total / self.N if self.N else 1
        return self

    def _score_bm25(self, doc_id: int, query_tokens: list[str]) -> float:
        """Compute BM25 score for one document."""
        doc = self.docs[doc_id]
        score = 0.0
        doc_len = doc["dl"]
        tf_doc = {}
        for t in doc["tokens"]:
            tf_doc[t] = tf_doc.get(t, 0) + 1

        for tok in query_tokens:
            if tok not in self.vocab:
                continue
            df = self.vocab[tok]
            tf = tf_doc.get(tok, 0)
            if tf == 0:
                continue
            idf = math.log((self.N - df + 0.5) / (df + 0.5) + 1)
            tf_norm = (tf * (self.k1 + 1)) / (tf + self.k1 * (1 - self.b + self.b * doc_len / self.avgdl))
            score += idf * tf_norm
        return score

    def _detect_phrases(self, tokens: list[str]) -> list[list[str]]:
        """Detect bigram phrases from query tokens. Returns list of bigram lists."""
        phrases = []
        for i in range(len(tokens) - 1):
            t1, t2 = tokens[i], tokens[i+1]
            stopwords = {"the", "and", "for", "with", "from", "that", "this"}
            if len(t1) >= 3 and len(t2) >= 3 and t1 not in stopwords and t2 not in stopwords:
                phrases.append([t1, t2])
        return phrases

    def phrase_search(self, query: str, top_n: int = 10) -> list[dict]:
        """
        BM25 pass that requires query terms to appear in document with
        proximity (consecutive or within 3 tokens). Returns top-N results.
        """
        tokens = tokenize(query)
        phrases = self._detect_phrases(tokens)

        scored: dict[int, float] = {}
        for doc_id in self.doc_ids:
            doc = self.docs[doc_id]
            bm25 = self._score_bm25(doc_id, tokens)

            # Check phrase proximity
            phrase_ok = True
            for phrase in phrases:
                found = False
                for i in range(len(doc["tokens"]) - 1):
                    window = doc["tokens"][i:i+4]
                    if phrase[0] in window and phrase[1] in window:
                        found = True
                        break
                if not found and phrases:
                    phrase_ok = False

            if bm25 > 0:
                penalty = 0.5 if (phrases and not phrase_ok) else 1.0
                scored[doc_id] = bm25 * penalty

        ranked = sorted(scored.items(), key=lambda x: -x[1])
        results = []
        for doc_id, score in ranked[:top_n]:
            doc = self.docs[doc_id]
            snippet = self._snippet(doc["content"], tokens)
            results.append({
                "rank": len(results) + 1,
                "title": doc["title"],
                "path": doc["path"],
                "summary": doc["summary"],
                "snippet": snippet,
                "score": round(score, 4),
            })
        return results

    def search(self, query: str, top_n: int = 10, oversample: int = 1) -> list[dict]:
        """
        BM25 search. Returns top-N results with title, path, summary, and score.
        """
        query_tokens = tokenize(query)
        if not query_tokens:
            return []

        # Score all docs
        scores: dict[int, float] = {}
        for doc_id in self.doc_ids:
            s = self._score_bm25(doc_id, query_tokens)
            if s > 0:
                scores[doc_id] = s

        # Sort by score descending
        ranked = sorted(scores.items(), key=lambda x: -x[1])
        top_k = top_n * oversample
        results = []
        for doc_id, score in ranked[:top_k]:
            doc = self.docs[doc_id]
            # Highlight: extract snippet around first query token match
            snippet = self._snippet(doc["content"], query_tokens)
            results.append({
                "rank":   len(results) + 1,
                "title":  doc["title"],
                "path":   doc["path"],
                "summary": doc["summary"],
                "snippet": snippet,
                "score":  round(score, 4),
            })
        return results

    def _snippet(self, content: str, query_tokens: list[str], context: int = 60) -> str:
        """Extract snippet with first query term occurrence highlighted."""
        lc = content.lower()
        best_pos = -1
        for tok in query_tokens:
            pos = lc.find(tok)
            if pos != -1:
                best_pos = pos
                break

        if best_pos == -1:
            return content[:context * 2]

        start = max(0, best_pos - context)
        end   = min(len(content), best_pos + context)
        snippet = content[start:end].replace("\n", " ").strip()
        if start > 0:
            snippet = "..." + snippet
        if end < len(content):
            snippet = snippet + "..."
        return snippet

    def to_sqlite(self, db_path: Path):
        """Persist index to SQLite for fast re-load."""
        con = sqlite3.connect(str(db_path))
        cur = con.cursor()
        cur.execute("CREATE TABLE IF NOT EXISTS meta (key TEXT PRIMARY KEY, val TEXT)")
        cur.execute("CREATE TABLE IF NOT EXISTS docs (id INTEGER PRIMARY KEY, path, title, summary, content, dl)")
        cur.execute("CREATE TABLE IF NOT EXISTS vocab (term TEXT PRIMARY KEY, df)")
        cur.execute("CREATE TABLE IF NOT EXISTS postings (term, doc_id, PRIMARY KEY(term, doc_id))")

        cur.execute("REPLACE INTO meta VALUES ('N', ?)", (str(self.N),))
        cur.execute("REPLACE INTO meta VALUES ('avgdl', ?)", (str(self.avgdl),))
        cur.execute("REPLACE INTO meta VALUES ('k1', ?)", (str(self.k1),))
        cur.execute("REPLACE INTO meta VALUES ('b', ?)", (str(self.b),))

        for doc_id, doc in self.docs.items():
            cur.execute("REPLACE INTO docs VALUES (?,?,?,?,?,?)",
                (doc_id, doc["path"], doc["title"], doc["summary"], doc["content"], doc["dl"]))
        for term, df in self.vocab.items():
            cur.execute("REPLACE INTO vocab VALUES (?,?)", (term, df))

        # Batch-postings for speed
        for term, doc_ids in self.postings.items():
            for did in doc_ids:
                cur.execute("INSERT OR IGNORE INTO postings VALUES (?,?)", (term, did))

        con.commit()
        con.close()

    @classmethod
    def from_sqlite(cls, db_path: Path) -> "BM25Indexer":
        """Load index from SQLite."""
        con = sqlite3.connect(str(db_path))
        cur = con.cursor()
        idx = cls()

        row = cur.execute("SELECT val FROM meta WHERE key='N'").fetchone()
        if not row:
            con.close()
            return idx
        idx.N = int(row[0])
        idx.avgdl = float(cur.execute("SELECT val FROM meta WHERE key='avgdl'").fetchone()[0])
        idx.k1 = float(cur.execute("SELECT val FROM meta WHERE key='k1'").fetchone()[0])
        idx.b  = float(cur.execute("SELECT val FROM meta WHERE key='b'").fetchone()[0])

        for did, path, title, summary, content, dl in cur.execute("SELECT * FROM docs"):
            idx.doc_ids.append(did)
            idx.docs[did] = {
                "path":    path,
                "title":   title,
                "summary": summary,
                "content": content,
                "tokens":  tokenize(content),
                "dl":      dl,
            }

        for term, df in cur.execute("SELECT * FROM vocab"):
            idx.vocab[term] = df

        rows = cur.execute("SELECT term, doc_id FROM postings ORDER BY term")
        current_term = None
        for term, did in rows:
            if term != current_term:
                current_term = term
                idx.postings[term] = []
            idx.postings[term].append(did)

        con.close()
        return idx

# ── Hybrid Search (BM25 + Semantic Reranking) ─────────────────────────────────

class _EmbeddingReranker:
    """
    Lazy-loaded sentence-transformer reranker.
    """
    _instance: Optional["_EmbeddingReranker"] = None
    _model = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def load(self):
        if self._model is None:
            try:
                from sentence_transformers import SentenceTransformer
                self._model = SentenceTransformer("all-MiniLM-L6-v2")
            except ImportError:
                return False
        return True

    def encode(self, texts: list[str]) -> Optional[list[list[float]]]:
        if self._model is None:
            return None
        try:
            return self._model.encode(texts, convert_to_numpy=True).tolist()
        except Exception:
            return None

    @staticmethod
    def cosine(a: list[float], b: list[float]) -> float:
        import math
        dot = sum(x*y for x,y in zip(a,b))
        norm_a = math.sqrt(sum(x*x for x in a))
        norm_b = math.sqrt(sum(x*x for x in b))
        return dot / (norm_a * norm_b + 1e-8)


def _rerank_hybrid(bm25_results: list[dict], query: str,
                   alpha: float = 0.4, top_k: int = 20) -> list[dict]:
    """
    Re-rank BM25 results using semantic similarity.
    alpha=0.4 means 40% BM25 / 60% semantic weight.
    """
    reranker = _EmbeddingReranker()
    if not reranker.load():
        for r in bm25_results:
            r["bm25_score"] = r.pop("score", 0)
            r["semantic_score"] = None
            r["hybrid_score"] = r["bm25_score"]
        return bm25_results

    query_emb = reranker.encode([query])
    if not query_emb:
        for r in bm25_results:
            r["bm25_score"] = r.pop("score", 0)
            r["semantic_score"] = None
            r["hybrid_score"] = r["bm25_score"]
        return bm25_results

    texts = [r.get("summary", r.get("title", "")) for r in bm25_results]
    doc_embs = reranker.encode(texts)
    if not doc_embs:
        for r in bm25_results:
            r["bm25_score"] = r.pop("score", 0)
            r["semantic_score"] = None
            r["hybrid_score"] = r["bm25_score"]
        return bm25_results

    bm25_max = max((r["score"] for r in bm25_results), default=1.0)
    query_emb = query_emb[0]

    for r, doc_emb in zip(bm25_results, doc_embs):
        bm25_norm = r["score"] / bm25_max
        semantic = reranker.cosine(query_emb, doc_emb)
        r["bm25_score"] = r.pop("score", 0)
        r["semantic_score"] = round(semantic, 4)
        r["hybrid_score"] = round(alpha * bm25_norm + (1 - alpha) * semantic, 4)

    bm25_results.sort(key=lambda x: -x["hybrid_score"])
    for i, r in enumerate(bm25_results):
        r["rank"] = i + 1
    return bm25_results


def hybrid_search(self, query: str, top_n: int = 10, use_semantic: bool = True) -> list[dict]:
    """
    Hybrid search: BM25 first pass + optional semantic reranking.
    Falls back to pure BM25 if semantic reranking is unavailable.
    """
    bm25_results = self.search(query, top_n=top_n, oversample=2)
    if not use_semantic:
        for r in bm25_results:
            r["bm25_score"] = r["score"]
            r["semantic_score"] = None
            r["hybrid_score"] = r["bm25_score"]
        return bm25_results[:top_n]
    reranked = _rerank_hybrid(bm25_results, query, alpha=0.4)
    return reranked[:top_n]

BM25Indexer.hybrid_search = hybrid_search

# ── JSON-RPC MCP server ────────────────────────────────────────────────────────

def mcp_server(index: BM25Indexer, port: int = 8765):
    """Simple JSON-RPC over HTTP for MCP clients."""
    try:
        from http.server import HTTPServer, BaseHTTPRequestHandler
        import urllib.parse
    except ImportError:
        print("HTTP server not available in this Python version", file=sys.stderr)
        sys.exit(1)

    class Handler(BaseHTTPRequestHandler):
        def do_GET(self):
            if self.path == "/health":
                self.send_response(200)
                self.end_headers()
                self.wfile.write(b'{"status":"ok"}')
                return

            if self.path.startswith("/search?"):
                query = urllib.parse.parse_qs(self.path[8:]).get("q", [""])[0]
                top   = int(urllib.parse.parse_qs(self.path[8:]).get("top", ["10"])[0])
                results = index.search(query, top_n=top)
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps(results, indent=2).encode())
                return

            self.send_response(404)
            self.end_headers()

        def log_message(self, fmt, *args):
            pass  # silence request logs

    print(f"BM25 server running on http://localhost:{port}")
    print(f"  GET /search?q=<query>&top=<N>  — search wiki")
    print(f"  GET /health                    — health check")
    server = HTTPServer(("localhost", port), Handler)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        server.shutdown()

def mcp_stdio_server(index: BM25Indexer):
    """
    MCP stdio server — receives JSON-RPC requests on stdin, writes responses to stdout.
    Protocol: JSON-RPC 2.0
    """
    import threading

    def writer(result: dict):
        sys.stdout.write(json.dumps(result) + "\n")
        sys.stdout.flush()

    def handle_batch(batch: list) -> list:
        responses = []
        for req in batch:
            method = req.get("method", "")
            pid    = req.get("id")
            params = req.get("params", {})

            if method == "search":
                q    = params.get("query", "")
                top  = params.get("top", 10)
                results = index.search(q, top_n=top)
                responses.append({"jsonrpc": "2.0", "id": pid, "result": results})
            elif method == "index":
                # Re-index wiki and return stats
                idx2 = BM25Indexer().build(WIKI)
                idx2.to_sqlite(DB)
                responses.append({"jsonrpc": "2.0", "id": pid, "result": {"indexed": idx2.N, "db": str(DB)}})
            elif method == "tools/list":
                responses.append({
                    "jsonrpc": "2.0", "id": pid,
                    "result": {
                        "tools": [
                            {
                                "name": "search",
                                "description": "Search the wiki using BM25 ranking. Returns top-N results with title, path, summary snippet, and BM25 score.",
                                "inputSchema": {
                                    "type": "object",
                                    "properties": {
                                        "query": {"type": "string", "description": "Search query (can be multi-word)"},
                                        "top":  {"type": "integer", "description": "Max results to return", "default": 10},
                                    },
                                    "required": ["query"]
                                }
                            },
                            {
                                "name": "reindex",
                                "description": "Re-index all wiki files. Call after adding new articles.",
                                "inputSchema": {"type": "object", "properties": {}}
                            }
                        ]
                    }
                })
            elif method == "initialize":
                # MCP handshake — respond with server info
                responses.append({
                    "jsonrpc": "2.0", "id": pid,
                    "result": {
                        "protocolVersion": "2024-11-05",
                        "serverInfo": {
                            "name": "qmd",
                            "version": "1.0.0"
                        },
                        "capabilities": {}
                    }
                })
            elif method == "notifications/initialized":
                # Client is done with handshake — no response needed
                pass
            elif method == "tools/call":
                # Hermes MCP client sends {name, arguments} inside params
                tool_name = params.get("name", "")
                tool_args = params.get("arguments", {})
                if tool_name == "search":
                    results = index.search(tool_args.get("query", ""), top_n=tool_args.get("top", 10))
                    responses.append({"jsonrpc": "2.0", "id": pid, "result": {"content": [{"type": "text", "text": json.dumps(results)}]}})
                elif tool_name == "reindex":
                    idx2 = BM25Indexer().build(WIKI)
                    idx2.to_sqlite(DB)
                    responses.append({"jsonrpc": "2.0", "id": pid, "result": {"content": [{"type": "text", "text": json.dumps({"indexed": idx2.N, "db": str(DB)})}]}})
                elif tool_name == "qmd_search":
                    results = index.search(tool_args.get("query", ""), top_n=tool_args.get("top", 10))
                    responses.append({"jsonrpc": "2.0", "id": pid, "result": {"content": [{"type": "text", "text": json.dumps(results)}]}})
                elif tool_name == "qmd_reindex":
                    idx2 = BM25Indexer().build(WIKI)
                    idx2.to_sqlite(DB)
                    responses.append({"jsonrpc": "2.0", "id": pid, "result": {"content": [{"type": "text", "text": json.dumps({"indexed": idx2.N, "db": str(DB)})}]}})
                else:
                    responses.append({"jsonrpc": "2.0", "id": pid, "error": {"code": -32601, "message": f"Unknown tool: {tool_name}"}})
            else:
                responses.append({"jsonrpc": "2.0", "id": pid,
                                  "error": {"code": -32601, "message": f"Method not found: {method}"}})
        return responses

    def reader():
        line = sys.stdin.readline()
        while line:
            try:
                batch = json.loads(line)
                if not isinstance(batch, list):
                    batch = [batch]
                for resp in handle_batch(batch):
                    writer(resp)
            except json.JSONDecodeError:
                writer({"jsonrpc": "2.0", "error": {"code": -32700, "message": "Parse error"}})
            line = sys.stdin.readline()

    t = threading.Thread(target=reader, daemon=True)
    t.start()
    t.join()

# ── CLI ────────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="qmd — BM25 search engine for the LLM knowledge base")
    parser.add_argument("query", nargs="?", default=None, help="Search query")
    parser.add_argument("--top",  type=int, default=10,   help="Max results (default: 10)")
    parser.add_argument("--json", action="store_true",     help="Output JSON (LLM-friendly)")
    parser.add_argument("--reindex", action="store_true",  help="Rebuild the BM25 index")
    parser.add_argument("--serve", action="store_true",    help="Run JSON-RPC HTTP server")
    parser.add_argument("--port", type=int, default=8765, help="Server port (default: 8765)")
    parser.add_argument("--mcp-stdio", action="store_true", help="Run MCP stdio server")
    parser.add_argument("--stats", action="store_true",    help="Show index statistics")
    args = parser.parse_args()

    # Load or build index
    if args.reindex:
        print("Building BM25 index...", file=sys.stderr)
        t0 = time.time()
        idx = BM25Indexer().build(WIKI)
        idx.to_sqlite(DB)
        print(f"Indexed {idx.N} documents in {time.time()-t0:.2f}s → {DB}", file=sys.stderr)
        return

    if DB.exists():
        try:
            idx = BM25Indexer.from_sqlite(DB)
        except Exception:
            print("Index corrupted, rebuilding...", file=sys.stderr)
            idx = BM25Indexer().build(WIKI)
            idx.to_sqlite(DB)
    else:
        print("No index found. Building...", file=sys.stderr)
        idx = BM25Indexer().build(WIKI)
        idx.to_sqlite(DB)
        print(f"Indexed {idx.N} documents → {DB}", file=sys.stderr)

    if args.stats:
        print(f"Documents:   {idx.N}")
        print(f"Vocabulary: {len(idx.vocab)} terms")
        print(f"Avg doc len: {idx.avgdl:.1f} tokens")
        print(f"DB size:    {DB.stat().st_size / 1024:.1f} KB")
        return

    if args.mcp_stdio:
        mcp_stdio_server(idx)
        return

    if args.serve:
        mcp_server(idx, port=args.port)
        return

    if not args.query:
        parser.print_help()
        return

    results = idx.search(args.query, top_n=args.top)

    if args.json:
        output = {
            "query":   args.query,
            "took_ms": 0,
            "total":   len(results),
            "results": results,
        }
        print(json.dumps(output, indent=2, ensure_ascii=False))
        return

    # Human-readable output
    print(f"\nTop {len(results)} results for: {args.query}\n")
    for r in results:
        print(f"  #{r['rank']} [{r['score']:.3f}] {r['title']}")
        print(f"      → {r['path']}")
        snippet = r['snippet'].replace('\n', ' ')[:120]
        print(f"      \"{snippet}\"")
        print()

    if not results:
        print("  (no results — try broader terms, or --reindex to rebuild)")
        sys.exit(1)

if __name__ == "__main__":
    main()
