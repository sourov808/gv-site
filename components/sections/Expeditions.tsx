import { motion } from "framer-motion";
import { CometCard } from "@/components/ui/CometCard";

const expeditions = [
  { 
    tag: "Alpine", 
    title: "The Summit of Mt. Rainier", 
    time: "3 days trek", 
    img: "/assets/n1.jpg",
    author: "Alex Rivera",
    difficulty: "Expert"
  },
  { 
    tag: "Aquatic", 
    title: "Diving the Great Blue Hole", 
    time: "1 day dive", 
    img: "/assets/n2.jpg",
    author: "Sarah Chen",
    difficulty: "Advanced"
  },
  { 
    tag: "Jungle", 
    title: "Amazon Rainforest Canopy", 
    time: "5 days expedition", 
    img: "/assets/n3.jpg",
    author: "Marcus Thorne",
    difficulty: "Moderate"
  }
];

export const ExpeditionsSection = () => (
  <motion.section 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1 }}
    className="py-24 px-6 md:px-16 max-w-7xl mx-auto"
  >
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-black uppercase tracking-[0.2em]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Trending Now
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight"
        >
          Trending <span className="text-blue-600">Expeditions</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl"
        >
          Dive into the most recent adventures shared by our global community of explorers. Authentic stories from the front lines of discovery.
        </motion.p>
      </div>
      <motion.button 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="px-8 py-4 rounded-full border border-zinc-200 dark:border-zinc-800 font-bold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors shrink-0"
      >
        View All Expeditions
      </motion.button>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {expeditions.map((item, i) => (
        <CometCard key={i} item={item} index={i} />
      ))}
    </div>
  </motion.section>
);
