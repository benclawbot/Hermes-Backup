"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ReportPage() {
  const params = useParams();
  const scanId = Array.isArray(params.id) ? params.id[0] : params.id;

  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [error, setError] = useState<string>("");
  const [reportHtml, setReportHtml] = useState<string | null>(null);
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    if (!scanId) return;

    let attempts = 0;
    const maxAttempts = 90;

    const poll = async () => {
      try {
        const r = await fetch(`/api/report/${encodeURIComponent(scanId!)}`);
        if (r.ok) {
          const data = await r.json();
          if (data.reportHtml) {
            setReportHtml(data.reportHtml);
            if (data.url) setUrl(data.url);
            setStatus("ready");
            return;
          }
        }
        attempts++;
        if (attempts < maxAttempts) {
          setTimeout(poll, 1000);
        } else {
          setStatus("error");
        }
      } catch {
        attempts++;
        if (attempts >= maxAttempts) setStatus("error");
        else setTimeout(poll, 1000);
      }
    };

    poll();
  }, [scanId]);

  if (status === "error") {
    return (
      <div className="min-h-screen bg-midnight flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Report Unavailable</h1>
          <p className="text-white/60 mb-8">The scan could not be completed. Please try again.</p>
          <a href="/" className="inline-block px-6 py-3 bg-accent-blue text-white rounded-lg font-medium hover:bg-accent-blue/90 transition-all">
            Scan Another Site
          </a>
        </div>
      </div>
    );
  }

  if (status !== "ready" || !reportHtml) {
    return (
      <div className="min-h-screen bg-midnight flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-success animate-spin" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Your GDPR Report is Being Prepared…</h1>
          <p className="text-white/60 mb-2">This may take up to 90 seconds while your site is being scanned.</p>
          {scanId && <p className="text-white/30 text-xs">Scan ID: {scanId.substring(0, 8)}…</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-midnight">
      {/* Sticky header */}
      <div className="sticky top-0 z-10 bg-midnight/95 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Your GDPR Report is Ready</p>
              <p className="text-white/40 text-xs">Scan complete — scroll for full results</p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={async () => {
                if (!scanId) return;
                try {
                  const res = await fetch(`/api/report/${encodeURIComponent(scanId)}/pdf`);
                  if (!res.ok) throw new Error("PDF fetch failed");
                  const blob = await res.blob();
                  const blobUrl = URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = blobUrl;
                  a.download = `GDPR-Report-${scanId}.pdf`;
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                  setTimeout(() => URL.revokeObjectURL(blobUrl), 10000);
                } catch {
                  // Fallback: open in new tab
                  window.open(`/api/report/${encodeURIComponent(scanId)}/pdf`, "_blank");
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/20 transition-all border border-white/10"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </button>
            <a href="/" className="inline-flex items-center gap-2 px-4 py-2 bg-accent-blue text-white rounded-lg text-sm font-medium hover:bg-accent-blue/90 transition-all">
              Scan Another
            </a>
          </div>
        </div>
      </div>

      {/* Report body */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
          <iframe
            srcDoc={reportHtml}
            className="w-full"
            style={{ height: "80vh", border: "none" }}
            title="GDPR Report"
          />
        </div>
      </div>
    </div>
  );
}
