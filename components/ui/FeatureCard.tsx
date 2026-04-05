import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  desc: string;
  delay?: number;
}

export const FeatureCard = ({ title, desc, delay = 0 }: FeatureCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="p-8 rounded-3xl bg-white/60 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-md shadow-xl shadow-zinc-200/20 dark:shadow-none hover:-translate-y-2 transition-transform duration-300"
  >
    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
      <div className="w-6 h-6 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" />
    </div>
    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">{title}</h3>
    <p className="text-zinc-600 dark:text-zinc-400">{desc}</p>
  </motion.div>
);
