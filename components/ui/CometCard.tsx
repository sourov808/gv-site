"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface CometCardProps {
  item: {
    tag: string;
    title: string;
    time: string;
    img: string;
    author: string;
    difficulty: string;
  };
  index: number;
  className?: string;
}

export const CometCard = ({ item, index, className }: CometCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    setHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative h-[500px] w-full rounded-[2.5rem] bg-zinc-900 dark:bg-zinc-950 overflow-hidden shadow-2xl transition-all duration-500 cursor-pointer border border-zinc-200/20 dark:border-zinc-800/50",
        className
      )}
      style={{
        perspective: "1000px",
      }}
    >
      {/* Comet Border Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            opacity: hovered ? 1 : 0,
          }}
          className="absolute -inset-[100%] transition-opacity duration-500"
        >
          <div className="h-full w-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_200deg,#3b82f6_300deg,transparent_360deg)] opacity-40 blur-2xl" />
        </motion.div>
      </div>

      {/* 3D Content Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative h-full w-full z-10 p-8 flex flex-col justify-end"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 transition-transform duration-700 ease-out group-hover:scale-110"
          style={{
            transform: "translateZ(-50px)",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent z-10 opacity-80" />
          <img
            src={item.img}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Floating Content */}
        <div 
          className="relative z-20 space-y-4"
          style={{
            transform: "translateZ(50px)",
          }}
        >
          <div className="flex items-center gap-3">
            <span className="bg-blue-600 text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-tighter text-white">
              {item.difficulty}
            </span>
            <span className="text-white/70 text-[10px] font-bold uppercase tracking-widest">{item.time}</span>
          </div>

          <h3 className="text-3xl md:text-4xl font-black leading-[0.9] text-white tracking-tighter group-hover:text-blue-400 transition-colors">
            {item.title}
          </h3>

          <p className="text-white/60 text-sm line-clamp-2 font-medium max-w-[90%]">
            Experience the raw beauty of {item.tag.toLowerCase()} landscapes through the eyes of {item.author}.
          </p>

          <div className="pt-4 flex items-center justify-between border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-tr from-blue-500 to-purple-500 p-0.5">
                <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center overflow-hidden">
                   <img 
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.author}`} 
                    alt={item.author}
                    className="w-full h-full object-cover"
                   />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white leading-none">{item.author}</span>
                <span className="text-[10px] text-white/50 font-medium uppercase tracking-wider">Explorer</span>
              </div>
            </div>

            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-500">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Gloss Effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-30 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(circle at ${50 + (x as number) * 100}% ${50 + (y as number) * 100}%, rgba(255,255,255,0.4) 0%, transparent 60%)`
          ),
        }}
      />
    </motion.div>
  );
};
