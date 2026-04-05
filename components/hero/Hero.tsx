"use client";

import { MoveRight } from "lucide-react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import NatureSequence from "./NatureSequence";
import { StatCard } from "@/components/ui/StatCard";
import { useLoading } from "@/lib/LoadingContext";

const stats = [
  { label: "Expeditions", value: "250+", sub: "Worldwide" },
  { label: "Guides", value: "1.2k", sub: "Expert Staff" },
  { label: "Success Rate", value: "99%", sub: "Safe Returns" },
  { label: "Community", value: "50k+", sub: "Active Members" }
];

const loadingInfo = [
  { title: "Preparing Your Journey", desc: "Loading stunning landscapes..." },
  { title: "Scanning Globe", desc: "Discovering hidden gems..." },
  { title: "Mapping Trails", desc: "Charting unexplored paths..." },
  { title: "Loading Earth", desc: "Preparing immersive experience..." },
  { title: "Almost Ready", desc: "Just a few seconds more..." }
];

const natureFacts = [
  { title: "68.2%", subtitle: "Vegetation Coverage", desc: "Global vegetation greenness reached a record high in 2025" },
  { title: "2,000+", subtitle: "Iberian Lynx", desc: "From 94 to over 2,000 - a conservation miracle" },
  { title: "15", subtitle: "New Biodiversity Issues", desc: "2026 conservation horizon scan reveals emerging challenges" },
  { title: "Unknown", subtitle: "Species Discovery", desc: "We're discovering new species faster than ever" }
];

const adventureInfo = [
  { icon: "🗺️", title: "500+", desc: "Curated Expeditions" },
  { icon: "🏔️", title: "150+", desc: "Expert Guides" },
  { icon: "🌍", title: "45+", desc: "Countries Explored" },
  { icon: "⭐", title: "4.9", desc: "Average Rating" }
];

function LoadingOverlay({ progress }: { progress: number }) {
  const currentInfoIndex = Math.min(
    Math.floor((progress / 100) * loadingInfo.length),
    loadingInfo.length - 1
  );
  const currentInfo = loadingInfo[currentInfoIndex];

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: progress >= 100 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-zinc-950"
    >
      <div className="text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            {currentInfo.title}
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 mt-4 font-medium">
            {currentInfo.desc}
          </p>
        </motion.div>
        
        <div className="w-64 md:w-80 h-2 bg-zinc-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-linear-to-r from-blue-500 to-purple-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        
        <p className="text-sm text-zinc-500 font-bold uppercase tracking-widest">
          {progress}% complete
        </p>
      </div>
    </motion.div>
  );
}

function MainHeroContent({ opacity }: { 
  opacity: MotionValue<number>; 
}) {
  return (
    <motion.div 
      style={{ opacity }}
      className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-16"
    >
      <div className="space-y-12 max-w-4xl text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 mt-24"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Unveil the Unknown
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 leading-[0.9]"
        >
          THE ART OF <br />
          <span className="text-blue-600 inline-block">EXPLORATION</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed font-medium"
        >
          A visual odyssey through the Earth&apos;s most breathtaking landscapes. 
          Scroll to begin your journey into the wild.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-6 pt-4">
          <button className="relative inline-flex h-16 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-zinc-50 hover:scale-105 active:scale-95 transition-transform group">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#a855f7_50%,#3b82f6_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-zinc-950 px-10 py-4 font-bold text-zinc-900 dark:text-white backdrop-blur-3xl gap-3 text-lg transition-colors group-hover:bg-zinc-50 dark:group-hover:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              Begin Journey
              <MoveRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button className="h-16 px-10 border-2 border-zinc-200 dark:border-zinc-800 rounded-full font-bold hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors bg-transparent text-lg">
            View Gallery
          </button>
        </div>

        <div className="flex flex-col items-center gap-4 pt-8">
          <div className="flex -space-x-4">
            {[
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
              "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces",
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
              "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces",
            ].map((img, i) => (
              <motion.img
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                key={i}
                src={img}
                alt={`User avatar ${i + 1}`}
                className="w-14 h-14 rounded-full border-4 border-white dark:border-zinc-950 object-cover shadow-xl"
              />
            ))}
          </div>
          <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">
            Joined by <span className="text-zinc-900 dark:text-zinc-100">10,000+</span> explorers
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 w-full max-w-5xl">
          {stats.map((item, i) => (
            <StatCard 
              key={i}
              label={item.value}
              value={item.label}
              variant="light"
              delay={0.15 + i * 0.05}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function NatureInfoOverlay({ opacity }: { 
  opacity: MotionValue<number>; 
}) {
  return (
    <motion.div 
      style={{ opacity }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <div className="max-w-6xl mx-auto text-center space-y-8 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-black uppercase tracking-[0.2em]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Nature&apos;s Marvels
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-7xl font-black tracking-tighter text-white leading-tight"
        >
          OUR PLANET IS <br />
          <span className="text-green-500">FULL OF SURPRISES</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto font-medium"
        >
          Did you know? Conservation efforts are bringing species back from the brink.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 w-full max-w-5xl">
          {natureFacts.map((fact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 text-center backdrop-blur-md"
            >
              <p className="text-3xl md:text-4xl font-black text-green-400">{fact.title}</p>
              <p className="text-sm font-bold text-zinc-300 mt-2 uppercase tracking-wider">{fact.subtitle}</p>
              <p className="text-xs text-zinc-500 mt-2">{fact.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-lg text-zinc-400 mt-8"
        >
          Keep scrolling to explore more...
        </motion.p>
      </div>
    </motion.div>
  );
}

function AdventureInfoOverlay({ opacity }: { 
  opacity: MotionValue<number>; 
}) {
  return (
    <motion.div 
      style={{ opacity }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <div className="max-w-6xl mx-auto text-center space-y-8 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-black uppercase tracking-[0.2em]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          Start Your Adventure
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-7xl font-black tracking-tighter text-white leading-tight"
        >
          READY TO <br />
          <span className="text-orange-500">EXPLORE THE WORLD</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto font-medium"
        >
          Join thousands of adventurers discovering Earth&apos;s most breathtaking destinations.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 w-full max-w-5xl">
          {adventureInfo.map((info, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 text-center backdrop-blur-md"
            >
              <p className="text-4xl mb-2">{info.icon}</p>
              <p className="text-3xl md:text-4xl font-black text-orange-400">{info.title}</p>
              <p className="text-sm font-bold text-zinc-300 mt-2 uppercase tracking-wider">{info.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mt-8"
        >
          <button className="relative inline-flex h-16 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-zinc-950 hover:scale-105 active:scale-95 transition-transform group">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f97316_0%,#eab308_50%,#f97316_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-zinc-900 px-10 py-4 font-bold text-white backdrop-blur-3xl gap-3 text-lg transition-colors group-hover:bg-zinc-800 border border-zinc-700">
              Begin Journey
              <MoveRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-lg text-zinc-400"
        >
          Scroll down to discover more...
        </motion.p>
      </div>
    </motion.div>
  );
}

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const { isLoaded, progress } = useLoading();

  const mainContentOpacity = useTransform(scrollYProgress, [0, 0.12, 0.2, 0.3, 1], [1, 1, 0.5, 0, 0]);
  const mainContentScale = useTransform(scrollYProgress, [0, 0.12, 0.2, 0.3, 1], [1, 1, 0.95, 0.9, 0.9]);
  const mainContentY = useTransform(scrollYProgress, [0, 0.12, 0.2, 0.3, 1], [0, 0, -30, -60, -60]);

  const natureInfoOpacity = useTransform(scrollYProgress, [0.18, 0.25, 0.45, 0.55, 1], [0, 1, 1, 0, 0]);
  const natureInfoScale = useTransform(scrollYProgress, [0.18, 0.25, 0.45, 0.55, 1], [0.9, 1, 1, 0.9, 0.9]);

  const adventureInfoOpacity = useTransform(scrollYProgress, [0.45, 0.55, 0.85, 0.95, 1], [0, 1, 1, 0, 0]);
  const adventureInfoY = useTransform(scrollYProgress, [0.45, 0.55, 0.85, 0.95, 1], [30, 0, 0, -30, -30]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[400vh] w-full"
      style={{ position: "relative" }}
    >
      <div className="absolute inset-0 z-0">
        <NatureSequence containerRef={containerRef} className="h-full w-full" />
      </div>

      {!isLoaded && progress < 100 && (
        <LoadingOverlay progress={progress} />
      )}

      <div className="sticky top-0 h-screen overflow-hidden z-0">
        <MainHeroContent 
          key={isLoaded ? "hero-loaded" : "hero-loading"}
          opacity={mainContentOpacity} 
        />
        
        <NatureInfoOverlay 
          key={isLoaded ? "nature-loaded" : "nature-loading"}
          opacity={natureInfoOpacity} 
        />
        
        <AdventureInfoOverlay 
          key={isLoaded ? "adventure-loaded" : "adventure-loading"}
          opacity={adventureInfoOpacity} 
        />
      </div>
    </section>
  );
};

export default Hero;
