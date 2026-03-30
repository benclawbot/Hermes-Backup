"use client";

import { useState } from "react";
import Link from "next/link";
import { getDb } from "@/lib/db";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ found: boolean; dashboardUrl?: string } | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.dashboardUrl) {
        setResult({ found: true, dashboardUrl: data.dashboardUrl });
      } else if (data.notFound) {
        setResult({ found: false });
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to look up your account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-midnight flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="font-heading text-2xl font-bold text-white hover:text-accent-glow transition-colors">
            ComplyScan
          </Link>
          <h1 className="text-2xl font-bold text-white mt-6 mb-2">Subscriber Login</h1>
          <p className="text-white/60">Enter your email to access your dashboard</p>
        </div>

        {/* Card */}
        <div className="bg-midnight-light border border-white/10 rounded-2xl p-8">
          {result === null ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm text-white/70 mb-2">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-lg bg-midnight border border-white/20 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all"
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-accent-blue px-6 py-3 font-semibold text-white hover:bg-accent-glow transition-all shadow-lg shadow-accent-blue/30 hover:shadow-accent-blue/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Looking up account..." : "Access Dashboard"}
              </button>
            </form>
          ) : result.found ? (
            <div className="text-center">
              <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white mb-2">Dashboard Access Found!</h2>
              <p className="text-white/60 text-sm mb-6">
                Click below to open your subscriber dashboard.
              </p>
              <a
                href={result.dashboardUrl}
                className="inline-block w-full rounded-lg bg-accent-blue px-6 py-3 font-semibold text-white hover:bg-accent-glow transition-all shadow-lg shadow-accent-blue/30 hover:shadow-accent-blue/50 text-center"
              >
                Open Dashboard
              </a>
              <p className="text-white/40 text-xs mt-4">
                Bookmark this link for future access.
              </p>
            </div>
          ) : (
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white mb-2">No Active Subscription Found</h2>
              <p className="text-white/60 text-sm mb-6">
                We don&apos;t have an active subscriber account for that email address.
              </p>
              <Link
                href="/#pricing"
                className="inline-block w-full rounded-lg bg-accent-blue px-6 py-3 font-semibold text-white hover:bg-accent-glow transition-all shadow-lg shadow-accent-blue/30 hover:shadow-accent-blue/50 text-center"
              >
                Subscribe Now
              </Link>
            </div>
          )}
        </div>

        <div className="text-center mt-6">
          <Link href="/" className="text-sm text-white/50 hover:text-white/70 transition-colors">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
