import Link from "next/link";
import ScanResultsClient from "./ScanResultsClient";
import { getDb } from "@/lib/db";

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ r?: string }>;
}

// Server-side: decode ?r= param to avoid DB dependency on cold-starts
// Supports both gzip+base64 (Hero.tsx, ~70% smaller) and plain base64 (legacy)
function decodeResultFromParam(encoded: string): any | null {
  try {
    const decoded = Buffer.from(encoded, 'base64');
    // gzip magic bytes: 0x1f 0x8b
    if (decoded[0] === 0x1f && decoded[1] === 0x8b) {
      return JSON.parse(require('zlib').gunzipSync(decoded).toString('utf8'));
    }
    // Plain base64 JSON (legacy)
    return JSON.parse(decoded.toString('utf8'));
  } catch {
    return null;
  }
}

export default async function ScanResultsPage({ params, searchParams }: Props) {
  const { id } = await params;
  const { r } = await searchParams;
  const scanId = decodeURIComponent(id);

  // Primary: decode result from ?r= URL param (works on cold-start Lambda)
  if (r) {
    const result = decodeResultFromParam(r);
    if (result) {
      return (
        <ScanResultsClient
          scanId={scanId}
          url={result.crawl?.url ?? ""}
          email={null}
          status="completed"
          result={result}
        />
      );
    }
  }

  // Fallback: try DB lookup (works when Vercel has persistent storage)
  try {
    const db = getDb();
    const scan = db
      .prepare("SELECT * FROM scans WHERE id = ?")
      .get(scanId) as any;

    if (scan) {
      let result = null;
      if (scan.result_json) {
        try {
          const decompressed = require("zlib")
            .gunzipSync(Buffer.from(scan.result_json, "base64"))
            .toString("utf8");
          result = JSON.parse(decompressed);
        } catch {
          result = null;
        }
      }
      return (
        <ScanResultsClient
          scanId={scanId}
          url={scan.url}
          email={scan.email}
          status={scan.status}
          result={result}
        />
      );
    }
  } catch {
    // DB not available — proceed to not-found
  }

  return (
    <div className="min-h-screen bg-midnight flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Scan not found</h1>
        <p className="text-white/60 mb-6">This scan may have expired or doesn't exist.</p>
        <Link href="/" className="px-6 py-3 bg-accent-blue text-white rounded-lg font-medium hover:bg-accent-glow transition-all">
          Scan another website
        </Link>
      </div>
    </div>
  );
}
