import { Navbar } from "@/app/components/Navbar";
import { Hero } from "@/app/components/Hero";
import { HowItWorks } from "@/app/components/HowItWorks";
import { WhatWeCheck } from "@/app/components/WhatWeCheck";
import { Pricing } from "@/app/components/Pricing";
import { FAQ } from "@/app/components/FAQ";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-midnight">
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhatWeCheck />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
