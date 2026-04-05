"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface LoadingContextType {
  isLoaded: boolean;
  progress: number;
  setLoaded: (loaded: boolean) => void;
  setProgress: (progress: number) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  const setLoaded = (loaded: boolean) => setIsLoaded(loaded);
  const setProgressState = (p: number) => setProgress(p);

  return (
    <LoadingContext.Provider value={{ isLoaded, progress, setLoaded, setProgress: setProgressState }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}
