import { Suspense } from "react";
import DashboardClient from "./DashboardClient";

export default function DashboardPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-midnight flex items-center justify-center">
        <div className="text-white/50">Loading...</div>
      </div>
    }>
      <DashboardClient />
    </Suspense>
  );
}
