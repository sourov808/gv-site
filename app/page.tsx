"use client";

import Hero from "@/components/hero/Hero";
import Navbar from "@/components/layout/Navbar";
import { FeaturesSection } from "@/components/sections/Features";
import { PreservationSection } from "@/components/sections/Preservation";
import { ExplorersLensSection } from "@/components/sections/ExplorersLens";
import { ExpeditionsSection } from "@/components/sections/Expeditions";
import { ExpeditionMapSection } from "@/components/sections/ExpeditionMap";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950 font-sans selection:bg-blue-200 selection:text-blue-900 dark:selection:bg-blue-900/40 dark:selection:text-blue-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PreservationSection />
        <ExplorersLensSection />
        <FeaturesSection />
        <ExpeditionsSection />
        <ExpeditionMapSection />
      </main>

      <footer className="py-12 px-6 md:px-16 border-t border-zinc-100 dark:border-zinc-900 text-center">
        <p className="text-zinc-500 dark:text-zinc-400">© 2026 GV. All stories belong to their respective authors.</p>
      </footer>
    </div>
  );
}
