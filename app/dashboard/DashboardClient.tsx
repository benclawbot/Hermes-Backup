"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface DashboardClientProps {
  sessionToken: string;
}

export default function DashboardClient({ sessionToken }: DashboardClientProps) {
  const [email, setEmail] = useState<string | null>(null);
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

    fetch("/api/auth/me")
      .then((res) => {
        if (res.status === 401) {
          setError("Session expired. Please log in again.");
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (data?.authenticated) {
          setEmail(data.email);
          setAuthenticated(true);
          loadScans();
        }
      })
      .catch(() => setError("Failed to load dashboard."));
  }, [sessionToken]);

  const loadScans = () => {
    fetch("/api/scan/user", {
      headers: { Authorization: `Bearer ${sessionToken}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.scans) setRecentScans(data.scans);
      })
      .catch(() => {});
  };

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || !sessionToken) return;

    setScanning(true);
    setScanMessage("");
    setError("");

    try {
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
    } catch {
      setError("Failed to start scan. Please try again.");
    } finally {
      setScanning(false);
    }
  };

  const handleLogout = () => {
    document.cookie = "session=; Max-Age=0; path=/";
    window.location.href = "/login";
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-midnight flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Access Required</h1>
          <p className="text-white/60 mb-6">{error || "Please log in to access your dashboard."}</p>
          <Link href="/login" className="inline-block px-6 py-3 bg-accent-blue text-white rounded-lg font-medium hover:bg-accent-glow transition-all">
            Sign In
          </Link>
        </div>
      </div>
    );
  }

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
            <button onClick={handleLogout} className="text-sm text-white/50 hover:text-white transition-colors">
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-2">Your Dashboard</h1>
        <p className="text-white/60 mb-8">Run GDPR compliance scans on any website.</p>

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
              className="rounded-lg bg-accent-blue px-6 py-3 font-semibold text-white hover:bg-accent-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
                  <p className="text-white font-medium">{scan.url}</p>
                  <p className="text-white/40 text-sm mt-1">
                    {new Date(scan.created_at).toLocaleDateString("en-GB")}
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
