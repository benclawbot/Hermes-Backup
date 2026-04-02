"use client";

import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";

export default function SuccessClient() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const scanId = searchParams.get("scan_id");

  const [sessionMode, setSessionMode] = useState<"payment" | "subscription" | null>(null);
  const [subscriberToken, setSubscriberToken] = useState<string | null>(null);
  const [customerEmail, setCustomerEmail] = useState<string | null>(null);
  const [reportStatus, setReportStatus] = useState<"loading" | "error">("loading");
  const [reportError, setReportError] = useState<string>("");
  const startedRef = useRef(false);

  // Fetch session mode + subscriber token for subscriptions
  useEffect(() => {
    if (!sessionId) return;
    fetch(`/api/stripe/session?session_id=${encodeURIComponent(sessionId)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.mode) setSessionMode(data.mode);
        if (data.subscriberToken) setSubscriberToken(data.subscriberToken);
        if (data.customerEmail) setCustomerEmail(data.customerEmail);
      })
      .catch(() => {});
  }, [sessionId]);

  // Trigger scan + poll until ready, then redirect to report page
  // Skip for subscriptions — they have no URL at signup time, redirect to dashboard instead
  useEffect(() => {
    if (!sessionId || !scanId || startedRef.current) return;
    if (sessionMode === 'subscription') return;
    startedRef.current = true;

    // Trigger scan immediately
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
    }).catch(() => {
      triggerFailed = true;
      setReportError("Network error. Please check your connection and try again.");
      setReportStatus("error");
    });

    let attempts = 0;
    const maxAttempts = 90;

    const poll = () => {
      if (triggerFailed) return;
      fetch(`/api/report/${encodeURIComponent(scanId)}?session_id=${encodeURIComponent(sessionId)}`)
        .then(async (r) => {
          if (r.ok) {
            const data = await r.json();
            if (data.reportHtml) {
              // Redirect to dedicated report page instead of showing inline
              window.location.href = `/report/${encodeURIComponent(scanId)}`;
              return;
            }
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

    setTimeout(poll, 3000);
  }, [sessionId, scanId]);

  // Subscriptions → dashboard with token
  if (sessionMode === "subscription") {
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
