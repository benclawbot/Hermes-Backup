"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

export default function DashboardClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const [subscriber, setSubscriber] = useState<{ email: string; plan: string; status: string } | null>(null);
  const [recentScans, setRecentScans] = useState<any[]>([]);
  const [url, setUrl] = useState("");
  const [scanning, setScanning] = useState(false);
  const [scanMessage, setScanMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token) return;

    fetch(`/api/dashboard?token=${encodeURIComponent(token)}`)
      .then((res) => {
        if (res.status === 401) {
          setError("Invalid or expired dashboard link. Please log in again.");
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          setSubscriber(data.subscriber);
          setRecentScans(data.recentScans || []);
        }
      })
      .catch(() => setError("Failed to load dashboard."));
  }, [token]);

  const handleLogout = () => {
    router.push("/");
  };

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || !token) return;

    setScanning(true);
    setScanMessage("");
    setError("");

    try {
      const res = await fetch("/api/scan/subscriber", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, token }),
      });

      const data = await res.json();

      if (res.status === 401) {
        setError(data.error || "Session expired. Please log in again.");
        return;
      }

      if (!res.ok) {
        setError(data.error || "Scan failed. Please try again.");
        return;
      }

      setScanMessage(`Scan started! Your GDPR report will be emailed to ${subscriber?.email} within 2 minutes.`);
      setUrl("");

      const scanId = data.scanId;
      if (scanId) {
        setRecentScans((prev) => [
          { id: scanId, url, status: "processing", created_at: new Date().toISOString() },
          ...prev,
        ]);
      }
    } catch {
      setError("Failed to start scan. Please try again.");
    } finally {
      setScanning(false);
    }
  };

  if (!token) {
    return (
      <div className="min-h-screen bg-midnight flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Dashboard Access Required</h1>
          <p className="text-white/60 mb-6">You need a valid dashboard link to access this page.</p>
          <Link
            href="/login"
            className="inline-block px-6 py-3 bg-accent-blue text-white rounded-lg font-medium hover:bg-accent-glow transition-colors"
          >
            Log In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-midnight">
      {/* Header */}
      <nav className="border-b border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-heading text-xl font-bold text-white hover:text-accent-glow transition-colors">
            ComplyScan
          </Link>
          <div className="flex items-center gap-4">
            {subscriber && (
              <span className="text-sm text-white/50">{subscriber.email}</span>
            )}
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-success/20 text-success border border-success/30">
              {subscriber?.status === "active" ? "Active" : subscriber?.status}
            </span>
            <button onClick={handleLogout} className="text-sm text-white/50 hover:text-white transition-colors">
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Plan Banner */}
        <div className="bg-gradient-to-r from-accent-blue/20 to-accent-glow/20 border border-accent-blue/30 rounded-2xl p-8 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white mb-1">Subscriber Dashboard</h1>
              <p className="text-white/60">
                {subscriber?.email ?? "..."} &mdash; Monthly Plan &mdash;{" "}
                <span className="text-success font-semibold">Active</span>
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-white">∞</div>
              <div className="text-sm text-white/50">scans remaining</div>
            </div>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
            {error}
          </div>
        )}

        {scanMessage && (
          <div className="mb-6 p-4 rounded-lg bg-success/10 border border-success/30 text-success text-sm">
            {scanMessage}
          </div>
        )}

        {/* Scan Form */}
        <div className="bg-midnight-light border border-white/10 rounded-2xl p-8 mb-10">
          <h2 className="text-xl font-bold text-white mb-2">Run a New Scan</h2>
          <p className="text-white/50 text-sm mb-6">No additional payment required — included in your subscription.</p>
          <form onSubmit={handleScan} className="flex gap-3">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://yourwebsite.com"
              required
              className="flex-1 rounded-lg bg-midnight border border-white/20 px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all"
            />
            <button
              type="submit"
              disabled={scanning}
              className="rounded-lg bg-accent-blue px-8 py-4 font-semibold text-white hover:bg-accent-glow transition-all shadow-lg shadow-accent-blue/30 hover:shadow-accent-blue/50 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {scanning ? "Scanning..." : "Run Scan"}
            </button>
          </form>
        </div>

        {/* Recent Scans */}
        <div>
          <h2 className="text-xl font-bold text-white mb-6">Recent Scans</h2>
          {recentScans.length === 0 ? (
            <div className="bg-midnight-light border border-white/10 rounded-2xl p-12 text-center">
              <p className="text-white/40">No scans yet. Run your first scan above!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {recentScans.map((scan) => {
                let score: number | null = null;
                if (scan.status === "completed" && scan.result_json) {
                  try {
                    const r = JSON.parse(scan.result_json);
                    score = r.aiAnalysis?.gdprScore ?? null;
                  } catch { /* ignore */ }
                }
                return (
                  <div
                    key={scan.id}
                    className="bg-midnight-light border border-white/10 rounded-xl p-6 flex items-center justify-between"
                  >
                    <div>
                      <p className="text-white font-medium">{scan.url}</p>
                      <p className="text-white/40 text-sm mt-1">
                        {new Date(scan.created_at).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      {scan.status === "completed" ? (
                        <>
                          {score !== null && (
                            <span className="text-success text-sm font-medium">Score: {score}</span>
                          )}
                          <Link
                            href={`/api/report/${scan.id}`}
                            className="text-sm text-accent-blue hover:text-accent-glow transition-colors"
                          >
                            View Report →
                          </Link>
                        </>
                      ) : (
                        <span className={`text-sm font-medium ${
                          scan.status === "processing" ? "text-yellow-400" :
                          scan.status === "failed" ? "text-red-400" : "text-white/50"
                        }`}>
                          {scan.status.charAt(0).toUpperCase() + scan.status.slice(1)}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
