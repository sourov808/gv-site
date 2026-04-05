"use client";

import { motion } from "framer-motion";
import { MapPin, Compass, Mountain, Footprints, Plane, TreePine, Camera, Star } from "lucide-react";
import { useLoading } from "@/lib/LoadingContext";
import { useEffect, useState } from "react";

const icons = [
  { Icon: MapPin, label: "Places" },
  { Icon: Compass, label: "Guide" },
  { Icon: Mountain, label: "Peaks" },
  { Icon: Footprints, label: "Trails" },
  { Icon: Plane, label: "Travel" },
  { Icon: TreePine, label: "Nature" },
  { Icon: Camera, label: "Capture" },
  { Icon: Star, label: "Explore" },
];

export default function SiteLoader() {
  const { isLoaded, progress } = useLoading();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => setShow(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoaded ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950 overflow-hidden pointer-events-none"
    >
      <div className="absolute inset-0 bg-zinc-950" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center"
      >
        <div className="grid grid-cols-4 gap-4 md:gap-6 mb-8">
          {icons.map(({ Icon, label }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: [0.3, 1, 0.3],
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center">
                <Icon className="w-5 h-5 md:w-6 md:h-5 text-blue-400" />
              </div>
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider">{label}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-zinc-400 text-sm uppercase tracking-[0.3em] font-medium"
        >
          Preparing Your Adventure
        </motion.p>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "200px" }}
          transition={{ delay: 0.6 }}
          className="mx-auto mt-6"
        >
          <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: "300%" }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center gap-2 mt-4"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [0.8, 1.2, 0.8],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ 
                duration: 1, 
                repeat: Infinity, 
                delay: i * 0.15,
              }}
              className="w-2 h-2 rounded-full bg-blue-500"
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
