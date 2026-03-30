"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SuccessClient() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [sessionMode, setSessionMode] = useState<"payment" | "subscription" | null>(null);

  useEffect(() => {
    if (!sessionId) return;

    fetch(`/api/stripe/session?session_id=${encodeURIComponent(sessionId)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.mode) setSessionMode(data.mode);
      })
      .catch(() => {});
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-midnight flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-success"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold mb-2">Payment Successful!</h1>
        <p className="text-white/60 mb-6">
          {sessionMode === "subscription"
            ? "Your subscription is active! Check your email for dashboard access."
            : "Your GDPR compliance report is being generated. You'll receive it by email within 2 minutes."}
        </p>
        {sessionMode === "subscription" ? (
          <p className="text-white/40 text-sm mb-6">
            Use your subscriber dashboard to run unlimited scans anytime.
          </p>
        ) : null}
        <div className="flex flex-col gap-3">
          {sessionMode === "subscription" && (
            <Link
              href="/login"
              className="inline-block px-6 py-3 bg-accent-blue text-white rounded-lg font-medium hover:bg-accent-blue/90 transition-colors"
            >
              Access Dashboard
            </Link>
          )}
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
          >
            Scan Another Website
          </Link>
        </div>
      </div>
    </div>
  );
}
