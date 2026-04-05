import { motion } from "framer-motion";

interface StatCardProps {
  label: string;
  value: string;
  delay?: number;
  variant?: "light" | "dark";
}

export const StatCard = ({ label, value, delay = 0, variant = "dark" }: StatCardProps) => {
  const isDark = variant === "dark";
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay }}
      className={`p-6 rounded-2xl border backdrop-blur-sm ${
        isDark 
          ? "bg-white/5 border-white/10" 
          : "bg-white/10 dark:bg-zinc-900/10 border-zinc-200/20 dark:border-zinc-800/20"
      }`}
    >
      <div className={`text-3xl font-black text-blue-500 ${!isDark && "dark:text-blue-400"} mb-1`}>{label}</div>
      <div className={`text-sm font-bold uppercase tracking-widest ${isDark ? "text-zinc-500" : "text-zinc-900 dark:text-zinc-50"} `}>{value}</div>
    </motion.div>
  );
};
