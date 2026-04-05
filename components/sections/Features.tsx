import { motion } from "framer-motion";
import { FeatureCard } from "@/components/ui/FeatureCard";

const features = [
  { title: "Curated Routes", desc: "Hand-picked trails and destinations verified by expert explorers worldwide." },
  { title: "Local Secrets", desc: "Gain access to off-the-beaten-path locations only the locals know about." },
  { title: "Safety First", desc: "Real-time weather, satellite tracking, and safety advisories for every path." }
];

export const FeaturesSection = () => (
  <motion.section 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1 }}
    className="py-24 px-6 md:px-16 max-w-7xl mx-auto"
  >
    <div className="text-center max-w-3xl mx-auto mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-6"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        Why Orbit
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight mb-6"
      >
        Why Explore With <span className="text-blue-600">Orbit</span>?
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-zinc-600 dark:text-zinc-400 text-lg"
      >
        We provide the most comprehensive guides, hidden gems, and trusted routes to make your next adventure unforgettable.
      </motion.p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, idx) => (
        <FeatureCard 
          key={idx}
          title={feature.title}
          desc={feature.desc}
          delay={0.4 + idx * 0.1}
        />
      ))}
    </div>
  </motion.section>
);
