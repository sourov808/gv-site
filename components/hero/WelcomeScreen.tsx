"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { useLoading } from "@/lib/LoadingContext";

export default function WelcomeScreen() {
  const { isLoaded, progress } = useLoading();
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<{ id: number, x: number, y: number, opacity: number, duration: number, yOffset: number }[]>([]);

  useEffect(() => {
    setParticles(Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: typeof window !== "undefined" ? Math.random() * window.innerWidth : Math.random() * 1000,
      y: typeof window !== "undefined" ? Math.random() * window.innerHeight : Math.random() * 1000,
      opacity: Math.random(),
      duration: Math.random() * 5 + 5,
      yOffset: Math.random() * -500,
    })));
    const hasVisited = sessionStorage.getItem("hasVisitedWelcome");
    if (hasVisited) {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        setIsAnimationFinished(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  const handleEnter = useCallback(() => {
    if (!isAnimationFinished) return;
    sessionStorage.setItem("hasVisitedWelcome", "true");
    setIsVisible(false);
  }, [isAnimationFinished]);

  const handleEnterForce = useCallback(() => {
    sessionStorage.setItem("hasVisitedWelcome", "true");
    setIsVisible(false);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 20) {
        handleEnter();
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartY - e.touches[0].clientY > 30) {
        handleEnter();
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isVisible, handleEnter]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%", filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-white dark:bg-zinc-950 overflow-hidden text-zinc-900 dark:text-white"
        >
          <motion.div
            className="pointer-events-none absolute w-[500px] h-[500px] rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-20 dark:opacity-40"
            style={{
              background: "radial-gradient(circle, rgba(59,130,246,0.8), rgba(147,51,234,0.3), transparent 70%)",
            }}
            animate={{
              x: mousePosition.x - 250,
              y: mousePosition.y - 250,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20, mass: 0.5 }}
          />

          <motion.div
            className="pointer-events-none absolute w-[200px] h-[200px] rounded-full blur-[60px] mix-blend-multiply dark:mix-blend-screen opacity-30 dark:opacity-60"
            style={{
              background: "radial-gradient(circle, rgba(236,72,153,1), transparent 60%)",
            }}
            animate={{
              x: mousePosition.x - 100,
              y: mousePosition.y - 100,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
          />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                className="absolute w-1 h-1 bg-zinc-900 dark:bg-white rounded-full bg-blend-multiply dark:bg-blend-screen"
                initial={{
                  x: p.x,
                  y: p.y,
                  opacity: p.opacity,
                }}
                animate={{
                  y: [null, p.y + p.yOffset],
                  opacity: [null, 0],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                }}
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center gap-8 text-center px-4 perspective-1000">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-zinc-900 dark:text-white drop-shadow-2xl">
                Welcome to the world of <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-pink-500">
                  GV
                </span>
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-2xl max-w-2xl mx-auto font-medium">
                The greatest adventures start here. Prepare to explore the unknown.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 flex flex-col items-center gap-6"
            >
              {isAnimationFinished ? (
                <>
                  <button 
                    onClick={handleEnterForce}
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-colors"
                  >
                    Enter Website
                  </button>
                  <span className="text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.2em] text-xs font-semibold">or scroll to explore</span>
                  <motion.div 
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 border-2 border-zinc-300 dark:border-zinc-600 rounded-full flex justify-center py-1 opacity-80"
                  >
                    <div className="w-1 h-2 bg-zinc-400 dark:bg-zinc-400 rounded-full" />
                  </motion.div>
                </>
              ) : (
                <div className="flex flex-col items-center gap-4">
                  <div className="w-48 h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-blue-600"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.2em] text-[10px] font-bold">
                    Preloading Experience {progress}%
                  </span>
                </div>
              )}
            </motion.div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
