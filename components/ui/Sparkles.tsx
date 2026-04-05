"use client";
import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

interface SparklesProps {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}

export const SparklesCore = (props: SparklesProps) => {
  const {
    id,
    background = "transparent",
    minSize = 0.6,
    maxSize = 1.4,
    particleDensity = 100,
    className,
    particleColor = "#FFFFFF",
  } = props;

  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    setMounted(true);
    const generated = Array.from({ length: particleDensity }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (maxSize - minSize) + minSize,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 20,
    }));
    setParticles(generated);
  }, [particleDensity, maxSize, minSize]);

  if (!mounted) {
    return (
      <div
        id={id}
        className={className}
        style={{
          background: background,
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      />
    );
  }

  return (
    <div
      id={id}
      className={className}
      style={{
        background: background,
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -100],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particleColor,
            borderRadius: "50%",
            boxShadow: `0 0 ${particle.size * 2}px ${particleColor}`,
          }}
        />
      ))}
    </div>
  );
};
