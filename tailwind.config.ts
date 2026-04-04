import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0f0f1a",
        "midnight-light": "#1a1a2e",
        "accent-blue": "#4f8ef7",
        "accent-glow": "#6ba3ff",
        success: "#22c55e",
        warning: "#f59e0b",
        danger: "#ef4444",
        // Risk severity palette
        "risk-high": "#ef4444",
        "risk-high-bg": "rgba(239,68,68,0.12)",
        "risk-high-border": "rgba(239,68,68,0.3)",
        "risk-medium": "#f59e0b",
        "risk-medium-bg": "rgba(245,158,11,0.12)",
        "risk-medium-border": "rgba(245,158,11,0.3)",
        "risk-low": "#22c55e",
        "risk-low-bg": "rgba(34,197,94,0.12)",
        "risk-low-border": "rgba(34,197,94,0.3)",
      },
      boxShadow: {
        "glow-blue": "0 0 20px rgba(79,142,247,0.4), 0 0 40px rgba(79,142,247,0.2)",
        "glow-red": "0 0 20px rgba(239,68,68,0.4), 0 0 40px rgba(239,68,68,0.15)",
        "glow-amber": "0 0 20px rgba(245,158,11,0.4), 0 0 40px rgba(245,158,11,0.15)",
        "glow-green": "0 0 20px rgba(34,197,94,0.4), 0 0 40px rgba(34,197,94,0.15)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [typography],
};

export default config;
