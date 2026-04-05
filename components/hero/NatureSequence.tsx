"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { useLoading } from "@/lib/LoadingContext";
import { useScroll, useTransform } from "framer-motion";

const TOTAL_FRAMES = 224;
const FRAME_PREFIX = "ezgif-frame-";
const FRAME_EXT = ".jpg";
const FRAME_DIR = "/assets/nature-sequence/";

const NatureSequence = ({ 
  containerRef, 
  className = "h-[300vh] w-full" 
}: { 
  containerRef?: React.RefObject<HTMLDivElement | null>,
  className?: string
}) => {
  const internalRef = useRef<HTMLDivElement>(null);
  const targetRef = containerRef || internalRef;
  const { setLoaded, setProgress } = useLoading();
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [localLoaded, setLocalLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const currentIndexRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, TOTAL_FRAMES - 1]
  );

  // Preload images using promise-based loading with batching
  useEffect(() => {
    const preloadImages = async () => {
      const loadedImages: HTMLImageElement[] = new Array(TOTAL_FRAMES);
      let loadedCount = 0;

      const loadImage = (i: number): Promise<void> => {
        return new Promise((resolve) => {
          const img = new Image();
          const frameNum = String(i).padStart(3, '0');
          img.src = `${FRAME_DIR}${FRAME_PREFIX}${frameNum}${FRAME_EXT}`;
          img.onload = () => {
            loadedImages[i - 1] = img;
            loadedCount++;
            setProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
            resolve();
          };
          img.onerror = () => {
            loadedCount++;
            resolve();
          };
        });
      };

      // Load in batches of 20 for better performance
      const batchSize = 20;
      for (let i = 1; i <= TOTAL_FRAMES; i += batchSize) {
        const end = Math.min(i + batchSize, TOTAL_FRAMES + 1);
        const promises = [];
        for (let j = i; j < end; j++) {
          promises.push(loadImage(j));
        }
        await Promise.all(promises);
      }

      setImages(loadedImages);
      setLocalLoaded(true);
      setLoaded(true);
    };

    preloadImages();
  }, []);

  const drawImage = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !images[index]) return;
    
    const context = canvas.getContext("2d", { alpha: false });
    if (!context) return;

    const img = images[index];
    
    // Use faster drawing - just fill and draw
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "medium";
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
  }, [images]);

  // Optimized frame update with requestAnimationFrame
  useEffect(() => {
    const unsubscribe = frameIndex.on("change", (v) => {
      const index = Math.floor(v);
      
      if (index !== currentIndexRef.current && images[index]) {
        currentIndexRef.current = index;
        
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        
        animationFrameRef.current = requestAnimationFrame(() => {
          drawImage(index);
        });
      }
    });

    return () => {
      unsubscribe();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [images, frameIndex, drawImage]);

  // Initial draw
  useEffect(() => {
    if (localLoaded && images[0]) {
      drawImage(0);
    }
  }, [localLoaded, images, drawImage]);

  return (
    <div ref={targetRef} className={`relative ${className}`} style={{ position: "relative" }}>
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <canvas
          ref={canvasRef}
          width={1280}
          height={720}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default NatureSequence;
