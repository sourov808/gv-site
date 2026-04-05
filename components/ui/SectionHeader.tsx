import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader = ({ 
  title, 
  description, 
  align = "center", 
  className = "" 
}: SectionHeaderProps) => {
  const isCenter = align === "center";
  
  return (
    <div className={`${isCenter ? "text-center max-w-3xl mx-auto" : "max-w-2xl"} mb-16 ${className}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 tracking-tight"
      >
        {title}
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.1 }} 
        className="text-zinc-600 dark:text-zinc-400 text-lg"
      >
        {description}
      </motion.p>
    </div>
  );
};
