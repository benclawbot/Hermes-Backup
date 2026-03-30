"use client";

import Link from "next/link";
import { cn } from "@/app/lib/utils";

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Login", href: "/login" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 glass">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-heading text-xl font-bold text-white hover:text-accent-glow transition-colors"
          >
            ComplyScan
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="#hero"
            className={cn(
              "rounded-lg bg-accent-blue px-4 py-2 text-sm font-semibold text-white",
              "hover:bg-accent-glow transition-all",
              "shadow-lg shadow-accent-blue/25 hover:shadow-accent-blue/40"
            )}
          >
            Scan Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
