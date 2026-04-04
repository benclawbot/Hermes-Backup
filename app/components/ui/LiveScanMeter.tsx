"use client";

import { useState, useEffect } from "react";
import { AlertTriangle, CheckCircle, Loader, Globe, Shield } from "lucide-react";

interface ScanCheck {
  label: string;
  status: "pending" | "ok" | "issue" | "warning";
  delay: number;
}

const SCAN_CHECKS: ScanCheck[] = [
  { label: "Cookie banner", status: "pending", delay: 0 },
  { label: "Privacy policy", status: "pending", delay: 400 },
  { label: "SSL/HTTPS", status: "pending", delay: 800 },
  { label: "Tracking scripts", status: "pending", delay: 1200 },
  { label: "Form labels", status: "pending", delay: 1600 },
];

function CheckIcon({ status }: { status: ScanCheck["status"] }) {
  if (status === "pending") {
    return <Loader className="w-3.5 h-3.5 text-white/30 animate-spin" />;
  }
  if (status === "ok") {
    return <CheckCircle className="w-3.5 h-3.5 text-risk-low" />;
  }
  if (status === "issue") {
    return <AlertTriangle className="w-3.5 h-3.5 text-risk-high" />;
  }
  return <AlertTriangle className="w-3.5 h-3.5 text-risk-medium" />;
}

interface LiveScanMeterProps {
  url?: string;
  autoStart?: boolean;
}

export function LiveScanMeter({ url = "example.com", autoStart = true }: LiveScanMeterProps) {
  const [phase, setPhase] = useState<"idle" | "scanning" | "done">("idle");
  const [checks, setChecks] = useState<ScanCheck[]>(SCAN_CHECKS);
  const [progress, setProgress] = useState(0);

  const startScan = () => {
    setPhase("scanning");
    setChecks(SCAN_CHECKS);
    setProgress(0);

    // Stagger the check reveals
    SCAN_CHECKS.forEach((check) => {
      setTimeout(() => {
        setChecks((prev) =>
          prev.map((c, i) =>
            c.label === check.label
              ? { ...c, status: i === 2 ? "ok" : i === 0 || i === 1 ? "issue" : "warning" }
              : c
          )
        );
      }, check.delay + 600);
    });

    // Progress bar animation
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const p = Math.min((elapsed / 2500) * 100, 100);
      setProgress(p);
      if (p < 100) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    // Done state
    setTimeout(() => setPhase("done"), 2800);
  };

  useEffect(() => {
    if (autoStart && phase === "idle") {
      const t = setTimeout(startScan, 800);
      return () => clearTimeout(t);
    }
  }, [autoStart]);

  const issueCount = checks.filter((c) => c.status === "issue").length;
  const warnCount = checks.filter((c) => c.status === "warning").length;

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Phase: Idle — pulsing shield */}
      {phase === "idle" && (
        <div className="flex flex-col items-center gap-3 py-4">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-accent-blue/20 animate-ping" style={{ animationDuration: "2s" }} />
            <div className="w-16 h-16 rounded-2xl bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center">
              <Shield className="w-8 h-8 text-accent-blue" style={{ animation: "float 3s ease-in-out infinite" }} />
            </div>
          </div>
          <p className="text-sm text-white/40">Ready to scan {url}</p>
          <button
            onClick={startScan}
            className="text-xs text-accent-blue hover:text-accent-glow transition-colors underline underline-offset-2"
          >
            Start demo scan
          </button>
        </div>
      )}

      {/* Phase: Scanning */}
      {phase === "scanning" && (
        <div className="space-y-4 py-2">
          {/* URL + progress */}
          <div className="flex items-center gap-2.5 text-sm">
            <Globe className="w-4 h-4 text-accent-blue animate-pulse" />
            <span className="text-white/70 font-mono text-xs truncate">{url}</span>
            <span className="ml-auto text-xs text-white/30 font-mono">{Math.round(progress)}%</span>
          </div>

          {/* Progress bar */}
          <div className="scan-bar-track">
            <div className="scan-bar-fill" style={{ width: `${progress}%` }} />
          </div>

          {/* Checks */}
          <div className="space-y-1.5">
            {checks.map((check, i) => (
              <div
                key={check.label}
                className="sus-chip flex items-center gap-2.5 text-sm"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <CheckIcon status={check.status} />
                <span className={check.status === "pending" ? "text-white/30" : "text-white/70"}>
                  {check.label}
                </span>
                {check.status !== "pending" && (
                  <span className={`ml-auto text-xs font-medium ${
                    check.status === "issue" ? "text-risk-high" :
                    check.status === "warning" ? "text-risk-medium" :
                    "text-risk-low"
                  }`}>
                    {check.status === "issue" ? "Issue found" :
                     check.status === "warning" ? "Needs review" : "OK"}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Phase: Done */}
      {phase === "done" && (
        <div className="space-y-4 py-2 animate-slide-up">
          {/* Summary */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-risk-medium-bg border border-risk-medium-border flex items-center justify-center flex-shrink-0">
              <span className="text-lg font-bold text-risk-medium">68</span>
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-risk-medium-bg border border-risk-medium-border px-2.5 py-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-risk-medium" />
                <span className="text-xs font-bold text-risk-medium uppercase tracking-wider">Medium Risk</span>
              </div>
              <p className="text-xs text-white/40 mt-0.5">{url} — scan complete</p>
            </div>
          </div>

          {/* Issue summary pills */}
          <div className="flex flex-wrap gap-2">
            {issueCount > 0 && (
              <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold bg-risk-high-bg border border-risk-high-border text-risk-high">
                <span className="w-1.5 h-1.5 rounded-full bg-risk-high" />
                {issueCount} High
              </span>
            )}
            {warnCount > 0 && (
              <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold bg-risk-medium-bg border border-risk-medium-border text-risk-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-risk-medium" />
                {warnCount} Medium
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold bg-risk-low-bg border border-risk-low-border text-risk-low">
              <span className="w-1.5 h-1.5 rounded-full bg-risk-low" />
              1 Low
            </span>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <button
              onClick={startScan}
              className="flex-1 rounded-lg border border-white/20 text-white/60 text-xs py-2 hover:bg-white/5 transition-colors"
            >
              Replay
            </button>
            <button
              onClick={() => setPhase("idle")}
              className="flex-[2] rounded-lg bg-accent-blue text-white text-xs font-semibold py-2 hover:bg-accent-glow transition-colors"
            >
              Scan your site free →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
