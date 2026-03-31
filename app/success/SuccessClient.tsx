"use client";

import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";

export default function SuccessClient() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const scanId = searchParams.get("scan_id");

  const [sessionMode, setSessionMode] = useState<"payment" | "subscription" | null>(null);
  const [reportHtml, setReportHtml] = useState<string | null>(null);
  const [reportStatus, setReportStatus] = useState<"loading" | "ready" | "pending" | "error">("loading");
  const [elapsed, setElapsed] = useState(0);
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

  // For one-time payments: trigger scan immediately, then poll until ready
  useEffect(() => {
    if (sessionMode !== "payment" || !scanId || startedRef.current) return;
    startedRef.current = true;

    setReportStatus("pending");
    let attempts = 0;
    const maxAttempts = 30;
    const timer = setInterval(() => setElapsed((e) => e + 1), 1000);

    // Trigger scan immediately (bypasses webhook dependency)
    fetch("/api/scan/trigger", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ scanId }),
    }).catch(() => {});

    const poll = () => {
      fetch(`/api/report/${encodeURIComponent(scanId)}`)
        .then(async (r) => {
          const data = await r.json();
          if (r.status === 202) {
            attempts++;
            if (attempts >= maxAttempts) {
              setReportStatus("error");
              clearInterval(timer);
            }
          } else if (r.status === 200 && data.reportHtml) {
            setReportHtml(data.reportHtml);
            setReportStatus("ready");
            clearInterval(timer);
          }
        })
        .catch(() => {
          attempts++;
          if (attempts >= maxAttempts) {
            setReportStatus("error");
            clearInterval(timer);
          }
        });
    };

    // Start polling
    const pollInterval = setInterval(poll, 3000);
    poll(); // immediate first check

    return () => {
      clearInterval(timer);
      clearInterval(pollInterval);
    };
  }, [sessionMode, scanId]);

  // Subscriptions → dashboard
  if (sessionMode === "subscription") {
    return (
      <div className="min-h-screen bg-midnight flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
              <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M6 14h12v8H6v-8z"/>
              </svg>
              Save as PDF
            </button>
            <a href="/" className="inline-block px-6 py-3 bg-accent-blue text-white rounded-lg font-medium hover:bg-accent-blue/90 transition-all">
              Scan Another Website
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Loading / pending state
  return (
    <div className="min-h-screen bg-midnight flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Payment Confirmed!</h1>
        <p className="text-white/60 mb-2">Your GDPR compliance scan is being generated.</p>
        {scanId && (
          <p className="text-white/30 text-xs mb-8">Scan ID: {scanId.substring(0, 8)}...</p>
        )}

        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <svg className="animate-spin w-5 h-5 text-accent-blue" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"/>
            </svg>
            <span className="text-white font-medium">
              {reportStatus === "error" ? "Taking longer than expected..." : `Scanning... ${elapsed}s`}
            </span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2">
            <div
              className="bg-accent-blue h-2 rounded-full transition-all duration-1000"
              style={{ width: `${Math.min((elapsed / 30) * 100, 90)}%` }}
            />
          </div>
          <p className="text-white/40 text-xs mt-2">Usually takes 20–60 seconds</p>
        </div>

        {reportStatus === "error" && (
          <p className="text-red-400 text-sm mb-4">Scan is taking longer than expected. This page will update automatically.</p>
        )}

        <button
          disabled
          className="w-full rounded-lg bg-white/5 text-white/30 py-3 font-medium cursor-not-allowed"
        >
          Scan Another Website — available when report is ready
        </button>
      </div>
    </div>
  );
}
