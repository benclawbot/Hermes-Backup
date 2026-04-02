"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface DashboardClientProps {
  sessionToken: string;
}

export default function DashboardClient({ sessionToken }: DashboardClientProps) {
  const [email, setEmail] = useState<string | null>(null);
  const [userType, setUserType] = useState<"user" | "subscriber" | null>(null);
  const [subscriptionStatus, setSubscriptionStatus] = useState<{
    plan: string;
    status: string;
    currentPeriodEnd: string | null;
    cancelAtPeriodEnd: boolean;
  } | null>(null);
  const [recentScans, setRecentScans] = useState<any[]>([]);
  const [url, setUrl] = useState("");
  const [scanning, setScanning] = useState(false);
  const [scanMessage, setScanMessage] = useState("");
  const [error, setError] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (!sessionToken) {
      setError("Not logged in.");
      return;
    }

    fetch("/api/auth/me", {
      headers: { Authorization: `Bearer ${sessionToken}` },
    })
      .then((res) => {
        if (res.status === 401) {
          setError("Session expired or subscription inactive. Please renew.");
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (data?.authenticated) {
          setEmail(data.email);
          setUserType(data.type);
          setAuthenticated(true);
          if (data.type === "subscriber") {
            setSubscriptionStatus({
              plan: data.plan,
              status: data.status,
              currentPeriodEnd: data.currentPeriodEnd,
              cancelAtPeriodEnd: data.cancelAtPeriodEnd,
            });
          }
          loadScans(data.type);
        }
      })
      .catch(() => setError("Failed to load dashboard."));
  }, [sessionToken]);

  const loadScans = (type: "user" | "subscriber") => {
    if (type === "subscriber") {
      fetch("/api/scan/subscriber", {
        headers: { Authorization: `Bearer ${sessionToken}` },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.scans) setRecentScans(data.scans);
        })
        .catch(() => {});
    } else {
      fetch("/api/scan/user", {
        headers: { Authorization: `Bearer ${sessionToken}` },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.scans) setRecentScans(data.scans);
        })
        .catch(() => {});
    }
  };

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || !sessionToken) return;

    setScanning(true);
    setScanMessage("");
    setError("");

    if (userType === "subscriber") {
      // Subscriber scan via /api/scan/subscriber
      const res = await fetch("/api/scan/subscriber", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, token: sessionToken }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Scan failed. Please try again.");
        return;
      }
      setScanMessage("Scan started! The report will appear in your history once ready.");
      setUrl("");
      if (data.scanId) {
        setRecentScans((prev) => [
          { id: data.scanId, url, status: "processing", created_at: new Date().toISOString() },
          ...prev,
        ]);
      }
    } else {
      // User scan via /api/scan/user
      const res = await fetch("/api/scan/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionToken}`,
        },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Scan failed. Please try again.");
        return;
      }
      setScanMessage("Scan started! The report will appear below once ready.");
      setUrl("");
      if (data.scanId) {
        setRecentScans((prev) => [
          { id: data.scanId, url, status: "processing", created_at: new Date().toISOString() },
          ...prev,
        ]);
      }
    }
    setScanning(false);
  };

  const handleLogout = () => {
    document.cookie = "session=; Max-Age=0; path=/";
    document.cookie = "session_token=; Max-Age=0; path=/";
    window.location.href = "/";
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-midnight flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Access Required</h1>
          <p className="text-white/60 mb-6">{error || "Please log in to access your dashboard."}</p>
          <Link href="/" className="inline-block px-6 py-3 bg-accent-blue text-white rounded-lg font-medium hover:bg-accent-glow transition-all">
            Go to Home
          </Link>
        </div>
      </div>
    );
  }

  const periodEnd = subscriptionStatus?.currentPeriodEnd
    ? new Date(subscriptionStatus.currentPeriodEnd).toLocaleDateString("en-GB", { timeZone: "Europe/Zurich" })
    : null;
  const isCancelling = subscriptionStatus?.cancelAtPeriodEnd;

  return (
    <div className="min-h-screen bg-midnight">
      {/* Header */}
      <header className="border-b border-white/10 bg-midnight-light">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-heading text-xl font-bold text-white hover:text-accent-glow transition-colors">
            ComplyScan
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-white/60 text-sm">{email}</span>
            {userType === "subscriber" && (
              <span className="text-xs bg-accent-blue/20 text-accent-blue px-2 py-1 rounded-full font-medium">
                Monthly Plan
              </span>
            )}
            <button onClick={handleLogout} className="text-sm text-white/50 hover:text-white transition-colors">
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">
              {userType === "subscriber" ? "Subscriber Dashboard" : "Your Dashboard"}
            </h1>
            <p className="text-white/60">
              {userType === "subscriber"
                ? "Unlimited GDPR compliance scans included in your plan."
                : "Run GDPR compliance scans on any website."}
            </p>
          </div>
        </div>

        {/* Subscription status banner for subscribers */}
        {userType === "subscriber" && subscriptionStatus && (
          <div className={`rounded-xl p-4 mb-6 border ${isCancelling ? "bg-yellow-500/10 border-yellow-500/30" : "bg-accent-blue/10 border-accent-blue/30"}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm font-medium ${isCancelling ? "text-yellow-400" : "text-accent-blue"}`}>
                  {isCancelling
                    ? "Cancellation scheduled"
                    : subscriptionStatus.status === "active"
                    ? "Subscription active"
                    : subscriptionStatus.status}
                </p>
                {periodEnd && (
                  <p className="text-white/50 text-xs mt-1">
                    {isCancelling
                      ? `Access until ${periodEnd} — your subscription will not renew.`
                      : `Next billing date: ${periodEnd}`}
                  </p>
                )}
              </div>
              {isCancelling && (
                <span className="text-xs text-yellow-400 border border-yellow-400/40 px-2 py-1 rounded">
                  Cancelling
                </span>
              )}
            </div>
          </div>
        )}

        {/* Scan Form */}
        <div className="bg-midnight-light border border-white/10 rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">Scan a Website</h2>
          <form onSubmit={handleScan} className="flex gap-3">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              required
              className="flex-1 rounded-lg bg-midnight border border-white/20 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all"
            />
            <button
              type="submit"
              disabled={scanning}
              className="rounded-lg bg-accent-blue px-6 py-3 font-semibold text-white hover:bg-accent-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {scanning ? "Scanning..." : "Scan Now"}
            </button>
          </form>

          {scanMessage && <p className="mt-3 text-sm text-green-400">{scanMessage}</p>}
          {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
        </div>

        {/* Recent Scans */}
        <h2 className="text-xl font-semibold text-white mb-4">Your Reports</h2>
        {recentScans.length === 0 ? (
          <div className="text-center py-12 text-white/40">
            No scans yet. Enter a URL above to get started.
          </div>
        ) : (
          <div className="space-y-3">
            {recentScans.map((scan) => (
              <div key={scan.id} className="bg-midnight-light border border-white/10 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">{scan.url || "(no URL)"}</p>
                  <p className="text-white/40 text-sm mt-1">
                    {scan.created_at
                      ? new Date(scan.created_at).toLocaleDateString("en-GB", { timeZone: "Europe/Zurich" })
                      : "—"}
                    {" · "}
                    <span className={`capitalize ${
                      scan.status === "completed" ? "text-green-400" :
                      scan.status === "processing" ? "text-yellow-400" :
                      scan.status === "failed" ? "text-red-400" : "text-white/40"
                    }`}>
                      {scan.status}
                    </span>
                  </p>
                </div>
                {scan.status === "completed" && (
                  <a
                    href={`/report/${scan.id}`}
                    className="text-sm bg-accent-blue/20 text-accent-blue px-4 py-2 rounded-lg hover:bg-accent-blue/30 transition-all"
                  >
                    View Report
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
