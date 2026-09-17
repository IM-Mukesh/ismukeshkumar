"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/lib/data";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 14) + 6;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 400);
          return 100;
        }
        return next;
      });
    }, 140);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid opacity-60" />
          <div className="absolute inset-0 bg-scanline opacity-40" />
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent/20 blur-[100px] animate-float-a" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent-2/20 blur-[100px] animate-float-b" />

          <div className="absolute top-6 left-6 font-mono-tag text-[11px] tracking-widest text-muted">
            INITIALIZING SYSTEM
          </div>
          <div className="absolute top-6 right-6 font-mono-tag text-[11px] tracking-widest text-muted">
            PORTFOLIO 2026
          </div>

          <div className="relative flex flex-col items-center gap-4">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl font-bold tracking-tight text-center"
            >
              {profile.name.split(" ")[0]}{" "}
              <span className="text-gradient">{profile.name.split(" ").slice(1).join(" ")}</span>
            </motion.h1>
            <p className="font-mono-tag text-xs tracking-[0.3em] text-muted uppercase">
              {profile.role}
            </p>
            <motion.div
              key={progress}
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 1 }}
              className="text-4xl sm:text-6xl font-bold text-gradient"
            >
              {progress}%
            </motion.div>
          </div>

          <div className="absolute bottom-10 w-64 sm:w-96 flex flex-col gap-2">
            <div className="h-[2px] w-full bg-border overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-accent to-accent-2 shadow-[0_0_10px_var(--accent)]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.15 }}
              />
            </div>
            <div className="flex justify-between font-mono-tag text-[10px] tracking-widest text-muted">
              <span>LOADING MODULES...</span>
              <span>SECURE CONNECTION</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
