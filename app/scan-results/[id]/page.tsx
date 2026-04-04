"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ScanResultsClient from "./ScanResultsClient";
import { useParams, useSearchParams } from "next/navigation";

export default function ScanResultsPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const scanId = decodeURIComponent(String(params?.id ?? ""));

  const [scanData, setScanData] = useState<{
    url: string;
    email: string | null;
    status: string;
    result: any;
  } | null>(null);

  const [dbResult, setDbResult] = useState<any>(null); // fallback if ?r= absent

  // Decompress ?r= param (gzip+base64 encoded result — survives Lambda cold-start)
  useEffect(() => {
    const encoded = searchParams.get("r");
    if (encoded) {
      try {
        const raw = Buffer.from(encoded, "base64");
        if (raw[0] === 0x1f && raw[1] === 0x8b) {
          const decompressed = require("zlib")
            .gunzipSync(raw)
            .toString("utf8");
          const parsed = JSON.parse(decompressed);
          setScanData({
            url: parsed.crawl?.url ?? "",
            email: null,
            status: "completed",
            result: parsed,
          });
          return;
        }
        // Plain base64 (no gzip)
        const plain = JSON.parse(Buffer.from(encoded, "base64").toString("utf8"));
        setScanData({
          url: plain.crawl?.url ?? "",
          email: null,
          status: "completed",
          result: plain,
        });
      } catch (e) {
        console.error("Failed to decode ?r= result:", e);
      }
    }
  }, [searchParams]);

  // If no ?r=, fall back to DB lookup (works when DB is persistent)
  useEffect(() => {
    if (scanData) return;
    if (!scanId) return;

    fetch(`/api/report/${encodeURIComponent(scanId)}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.url) {
          setDbResult(d);
        }
      })
      .catch(() => {});
  }, [scanId, scanData]);

  if (!scanData && !dbResult) {
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

  // Use ?r= data if available, otherwise DB data
  const data = scanData ?? dbResult;

  return (
    <ScanResultsClient
      scanId={scanId}
      url={data.url}
      email={data.email ?? null}
      status={data.status ?? "completed"}
      result={data.result ?? null}
    />
  );
}
