import { motion, useScroll, useTransform } from "framer-motion";
import { StatCard } from "@/components/ui/StatCard";
import { SparklesCore } from "@/components/ui/Sparkles";
import { useRef } from "react";

const stats = [
  { label: "100%", val: "Eco-Certified Routes" },
  { label: "1.2M", val: "Trees Planted Annually" },
  { label: "Zero", val: "Single-Use Plastic Policy" },
  { label: "50+", val: "Conservation Partners" }
];

export const PreservationSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 0.4], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);

  return (
    <motion.section 
      ref={containerRef}
      style={{ opacity, scale, y }}
      className="relative py-32 px-6 md:px-16 bg-zinc-900 text-white overflow-hidden"
    >
    {/* Sparkles Background */}
    <div className="absolute inset-0 z-0">
      <SparklesCore
        id="preservation-sparkles"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full"
        particleColor="#3b82f6"
      />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <motion.div 
          className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-black uppercase tracking-[0.2em]"
        >
          Environmental Stewardship
        </motion.div>
        <motion.h2 
          className="text-4xl md:text-6xl font-black tracking-tighter leading-none"
        >
          PRESERVING THE <br />
          <span className="text-blue-500">LAST FRONTIERS</span>
        </motion.h2>
        <motion.p 
          className="text-zinc-400 text-lg md:text-xl leading-relaxed font-medium"
        >
          Exploration isn't just about discovery; it's about protection. Every journey we facilitate follows strict "Leave No Trace" principles, ensuring these breathtaking landscapes remain untouched for generations of explorers to come.
        </motion.p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
          {stats.map((stat, i) => (
            <StatCard 
              key={i}
              label={stat.label}
              value={stat.val}
              delay={0.1 + (i * 0.05)}
              variant="dark"
            />
          ))}
        </div>
      </div>
      
      <div className="relative">
        <div className="aspect-square rounded-[3rem] bg-blue-600/20 border border-blue-500/30 relative overflow-hidden">
           <img 
             src="/assets/n1.jpg" 
             className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" 
             alt="Conservation effort" 
           />
           <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent" />
           <div className="absolute bottom-10 left-10 right-10">
              <p className="text-xl font-bold italic">"We do not inherit the Earth from our ancestors; we borrow it from our children."</p>
              <p className="text-sm mt-4 text-blue-400 font-black uppercase tracking-widest">— Native American Proverb</p>
           </div>
        </div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/30 rounded-full blur-[80px]" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-[80px]" />
      </div>
    </div>
  </motion.section>
);
}
