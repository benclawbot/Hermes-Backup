"use client";

import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";

export default function SuccessClient() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const scanId = searchParams.get("scan_id");

  const [sessionMode, setSessionMode] = useState<"payment" | "subscription" | null>(null);
  const [reportHtml, setReportHtml] = useState<string | null>(null);
  const [reportStatus, setReportStatus] = useState<"loading" | "ready" | "error">("loading");
  const [reportError, setReportError] = useState<string>("");
  const [reportUrl, setReportUrl] = useState<string>("");
  const startedRef = useRef(false);

  // Fetch session mode
  useEffect(() => {
    if (!sessionId) return;
    fetch(`/api/stripe/session?session_id=${encodeURIComponent(sessionId)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.mode) setSessionMode(data.mode);
      })
      .catch(() => {});
  }, [sessionId]);

  // Trigger scan + poll until ready (Lambda cold starts can take 30s+ on serverless)
  useEffect(() => {
    if (!sessionId || !scanId || startedRef.current) return;
    startedRef.current = true;

    // Trigger scan immediately, store the AbortController for cleanup
    let triggerFailed = false;
    fetch("/api/scan/trigger", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ scanId }),
    }).then(async (r) => {
      if (!r.ok) {
        const err = await r.json().catch(() => ({}));
        triggerFailed = true;
        setReportError(err.error || "Scan failed. Please try again.");
        setReportStatus("error");
        return;
      }
      // If ok, let polling detect the result
    }).catch(() => {
      // Network error on trigger → show error immediately
      triggerFailed = true;
      setReportError("Network error. Please check your connection and try again.");
      setReportStatus("error");
    });

    let attempts = 0;
    const maxAttempts = 90; // up to 90s for slow serverless cold starts

    const poll = () => {
      if (triggerFailed) return; // stop polling if trigger already failed
      fetch(`/api/report/${encodeURIComponent(scanId)}?session_id=${encodeURIComponent(sessionId)}`)
        .then(async (r) => {
          if (r.ok) {
            const data = await r.json();
            if (data.reportHtml) {
              setReportHtml(data.reportHtml);
              if (data.url) setReportUrl(data.url);
              setReportStatus("ready");
              return;
            }
            // 200 ok but no reportHtml yet → scan still processing
          }
          attempts++;
          if (attempts < maxAttempts) {
            setTimeout(poll, 1000);
          } else {
            setReportStatus("error");
          }
        })
        .catch(() => {
          attempts++;
          if (attempts >= maxAttempts) setReportStatus("error");
        });
    };

    // Start polling after a short delay to allow trigger to complete
    setTimeout(poll, 3000);
  }, [sessionId, scanId]);

  // Subscriptions → dashboard
  if (sessionMode === "subscription") {
    return (
      <div className="min-h-screen bg-midnight flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Subscription Active!</h1>
          <p className="text-white/60 mb-8">Your monthly subscription is confirmed.</p>
          <a href="/login" className="inline-block px-6 py-3 bg-accent-blue text-white rounded-lg font-medium hover:bg-accent-blue/90 transition-all">
            Access Dashboard
          </a>
        </div>
      </div>
    );
  }

  // Report ready → show it
  if (reportStatus === "ready" && reportHtml) {
    return (
      <div className="min-h-screen bg-midnight">
        <div className="max-w-4xl mx-auto py-8 px-4">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white">Your GDPR Report is Ready</h1>
            <p className="text-white/60 mt-1">Scan complete. See your compliance results below.</p>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
            <iframe srcDoc={reportHtml} className="w-full" id="report-frame" style={{ height: "80vh", border: "none" }} title="GDPR Report" />
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={async () => {
                if (!scanId) return;
                // Derive filename from scan URL at click time (not stale state)
                let domain = scanId;
                try {
                  const res = await fetch(`/api/report/${encodeURIComponent(scanId)}`);
                  if (res.ok) {
                    const data = await res.json();
                    if (data.url) {
                      domain = new URL(data.url).hostname.replace(/[^a-zA-Z0-9]/g, '-');
                    }
                  }
                } catch {}
                const date = new Date().toISOString().split("T")[0];
                const filename = `GDPR-Report-${domain}-${date}.pdf`;
                const a = document.createElement("a");
                a.href = `/api/report/${encodeURIComponent(scanId)}/pdf`;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </button>
            <a href="/" className="inline-block px-6 py-3 bg-accent-blue text-white rounded-lg font-medium hover:bg-accent-blue/90 transition-all">
              Scan Another Website
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Loading / error state
  return (
    <div className="min-h-screen bg-midnight flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {reportStatus === "error" ? (
          <>
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Scan Failed</h1>
            <p className="text-white/60 mb-2">Something went wrong during the scan.</p>
            {reportError && (
              <p className="text-red-400 text-sm mb-8 max-w-sm mx-auto px-4">{reportError}</p>
            )}
            {!reportError && (
              <a href="/" className="inline-block px-6 py-3 bg-accent-blue text-white rounded-lg font-medium hover:bg-accent-blue/90 transition-all">
                Try Again
              </a>
            )}
          </>
        ) : (
          <>
            <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Payment Confirmed!</h1>
            <p className="text-white/60 mb-2">Loading your GDPR compliance report…</p>
            {scanId && (
              <p className="text-white/30 text-xs">Scan ID: {scanId.substring(0, 8)}…</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
