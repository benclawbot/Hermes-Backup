"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

// Browser-native gzip+base64 (same as Hero.tsx — avoids require('zlib') in browser)
async function gzipBase64(str: string): Promise<string> {
  const buf = new TextEncoder().encode(str);
  const cs = new CompressionStream("gzip");
  const writer = cs.writable.getWriter();
  writer.write(buf);
  writer.close();
  const reader = cs.readable.getReader();
  const chunks: Uint8Array[] = [];
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { done, value } = await reader.read();
    if (done || !value) break;
    chunks.push(value);
  }
  const total = chunks.reduce((a, b) => a + b.length, 0);
  const combined = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) { combined.set(chunk, offset); offset += chunk.length; }
  let binary = "";
  for (let i = 0; i < combined.length; i++) binary += String.fromCharCode(combined[i]);
  return btoa(binary);
}

export default function SuccessClient() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const scanId = searchParams.get("scan_id");
  const plan = searchParams.get("plan");
  const url = searchParams.get("url");
  const email = searchParams.get("email");

  const [subscriberToken, setSubscriberToken] = useState<string | null>(null);
  const [customerEmail, setCustomerEmail] = useState<string | null>(null);
  const [reportStatus, setReportStatus] = useState<"loading" | "error">("loading");
  const [reportError, setReportError] = useState<string>("");

  // Subscriptions → dashboard
  useEffect(() => {
    if (!sessionId) return;
    fetch(`/api/stripe/session?session_id=${encodeURIComponent(sessionId)}`)
      .then((res) => {
        if (!res.ok) return { subscriberToken: null, customerEmail: null } as any;
        return res.json() as Promise<{ subscriberToken?: string; customerEmail?: string }>;
      })
      .then(async (data) => {
        if (data?.subscriberToken) setSubscriberToken(data.subscriberToken);
        if (data?.customerEmail) setCustomerEmail(data.customerEmail);
      })
      .catch(() => {});
  }, [sessionId]);

  // PDF purchase: scan already exists → redirect to report
  useEffect(() => {
    if (!scanId || plan !== "pdf") return;
    if (sessionId) {
      // Verify the scan is completed, then redirect
      fetch(`/api/scan/trigger`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ scanId, url: url || "", email: email || "" }),
      })
        .then(r => r.json())
        .then(async (data) => {
          if (data.status === "completed" || data.result) {
            // Store in sessionStorage for cold-start resilience
            try { sessionStorage.setItem(`scan:${scanId}`, JSON.stringify(data.result)); } catch {}
            // Embed result in URL (gzip+base64) to survive cold-starts
            const rawJson = JSON.stringify(data.result);
            const compressed = await gzipBase64(rawJson);
            window.location.href = `/report/${encodeURIComponent(scanId)}?r=${compressed}&session_id=${encodeURIComponent(sessionId || '')}`;
          } else {
            setReportError("Scan not found. Please contact support.");
            setReportStatus("error");
          }
        })
        .catch(() => {
          // On error, try redirecting anyway — the report page will show current state
          window.location.href = `/report/${encodeURIComponent(scanId)}?session_id=${encodeURIComponent(sessionId || '')}`;
        });
    } else {
      window.location.href = `/report/${encodeURIComponent(scanId)}`;
    }
  }, [scanId, plan, sessionId, url, email]);

  // Single-scan (legacy): run scan synchronously and redirect to report.
  useEffect(() => {
    if (!sessionId || !scanId || plan === "monthly" || plan === "pdf") return;
    if (!url) {
      setReportError("Missing scan URL. Please contact support.");
      setReportStatus("error");
      return;
    }

    let cancelled = false;

    fetch("/api/scan/trigger", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ scanId, url, email }),
    })
      .then(async (r) => {
        if (cancelled) return;
        if (!r.ok) {
          const err = await r.json().catch(() => ({}));
          setReportError(err.error || "Scan failed. Please try again.");
          setReportStatus("error");
          return;
        }
        const data = await r.json();
        if (data.status === "completed" || data.result) {
          if (data.result) {
            try {
              sessionStorage.setItem(`scan:${scanId}`, JSON.stringify(data.result));
            } catch {}
          }
          if (data.result) {
            try {
              const raw = JSON.stringify(data.result);
              const compressed = await gzipBase64(raw);
              window.location.href = `/report/${encodeURIComponent(scanId)}?r=${compressed}`;
            } catch {
              window.location.href = `/report/${encodeURIComponent(scanId)}`;
            }
          } else {
            window.location.href = `/report/${encodeURIComponent(scanId)}`;
          }
        } else {
          setReportError("Scan did not return a result.");
          setReportStatus("error");
        }
      })
      .catch(() => {
        if (cancelled) return;
        setReportError("Network error. Please check your connection and try again.");
        setReportStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [sessionId, scanId, plan, url, email]);

  // Subscription flow
  if (plan === "monthly") {
    const dashboardUrl = subscriberToken
      ? `/dashboard?token=${encodeURIComponent(subscriberToken)}`
      : "/dashboard";
    return (
      <div className="min-h-screen bg-midnight flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Subscription Active!</h1>
          <p className="text-white/60 mb-2">Your monthly subscription is confirmed.</p>
          {customerEmail && (
            <p className="text-white/40 text-sm mb-6">{customerEmail}</p>
          )}
          {subscriberToken ? (
            <>
              <p className="text-white/60 text-sm mb-4">Save your dashboard access token:</p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-3 mb-6 text-left">
                <code className="text-accent-blue text-xs break-all">{subscriberToken}</code>
              </div>
              <a
                href={dashboardUrl}
                className="inline-block px-6 py-3 bg-accent-blue text-white rounded-lg font-medium hover:bg-accent-blue/90 transition-all"
              >
                Go to Dashboard
              </a>
            </>
          ) : (
            <a
              href="/dashboard"
              className="inline-block px-6 py-3 bg-accent-blue text-white rounded-lg font-medium hover:bg-accent-blue/90 transition-all"
            >
              Access Dashboard
            </a>
          )}
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
            <div className="relative w-16 h-16 mx-auto mb-6">
              {/* Spinning ring */}
              <div className="absolute inset-0 rounded-full border-4 border-white/10" />
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-accent-blue animate-spin" style={{ animationDuration: '1s' }} />
              {/* Inner dot */}
              <div className="absolute inset-3 rounded-full bg-accent-blue/30" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Payment Confirmed!</h1>
            <p className="text-white/60 mb-2">Running your GDPR compliance scan…</p>
            <p className="text-white/40 text-sm">This takes about 30 seconds. Please don't close this page.</p>
            {scanId && (
              <p className="text-white/30 text-xs mt-4">Scan ID: {scanId.substring(0, 8)}…</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
