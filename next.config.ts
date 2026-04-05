import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ['@react-pdf/renderer', '@react-pdf/pdfkit', 'fontkit'],
};

export default nextConfig;
