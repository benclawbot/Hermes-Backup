"use client";

import { useState } from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export function Hero() {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch('/api/scan/free', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, email: email || undefined }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.code === 'LIMIT_REACHED') {
          setError(`You've used your 3 free scans this month. Upgrade to Pro for unlimited scans.`);
        } else {
          setError(data.error || 'Something went wrong. Please try again.');
        }
        return;
      }

      // Redirect to free results page
      window.location.href = `/scan-results/${encodeURIComponent(data.scanId)}`;
    } catch (err) {
      console.error('Free scan error:', err);
      setError('Failed to start scan. Is the server running?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 py-24 text-center"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight to-midnight-light pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-blue/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Headline */}
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Is Your Website{" "}
          <span className="text-accent-blue">GDPR Compliant</span>?
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
          Free GDPR compliance scan. No credit card. Get your full PDF report from €9.
        </p>

        {/* URL Input Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 max-w-xl mx-auto mb-4"
        >
          <input
            type="url"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://yourwebsite.com"
            required
            className="rounded-lg bg-midnight-light border border-white/20 px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com (required for your report)"
            required
            className="rounded-lg bg-midnight-light border border-white/20 px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all"
          />
          {error && (
            <p className="text-red-400 text-sm text-left">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-accent-blue px-8 py-4 font-semibold text-white hover:bg-accent-glow transition-all shadow-lg shadow-accent-blue/30 hover:shadow-accent-blue/50 whitespace-nowrap glow-accent disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Running scan...' : 'Scan Free →'}
          </button>
        </form>

        <p className="text-white/30 text-xs mb-6">3 free scans per month · No credit card required</p>

        {/* Subscriber login link */}
        <div className="mb-6">
          <Link
            href="/login"
            className="text-sm text-white/40 hover:text-white/70 transition-colors"
          >
            Subscriber Dashboard →
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-success" />
            <span>Trusted by 2,847 website owners</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
            <span>No credit card</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Results in 2 minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
