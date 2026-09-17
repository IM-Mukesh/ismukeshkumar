"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { roadmap } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";

export default function Roadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <section className="relative py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <div className="flex justify-center">
            <Eyebrow>Engineering Roadmap</Eyebrow>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            How I <span className="text-gradient">Got Here</span>
          </h2>
        </div>

        <div ref={containerRef} className="relative max-w-3xl mx-auto">
          <div className="absolute left-[7px] sm:left-1/2 top-0 bottom-0 w-px bg-border sm:-translate-x-1/2" />
          <motion.div
            style={{ scaleY }}
            className="absolute left-[7px] sm:left-1/2 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-accent to-accent-2 shadow-[0_0_10px_var(--accent)] sm:-translate-x-1/2"
          />
          <div className="flex flex-col gap-10">
            {roadmap.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative pl-8 sm:pl-0 sm:w-1/2 ${
                  i % 2 === 0 ? "sm:pr-10 sm:text-right sm:ml-0" : "sm:pl-10 sm:ml-auto"
                }`}
              >
                <span
                  className={`absolute left-0 top-1 h-3.5 w-3.5 rounded-full border-2 border-accent bg-background shadow-[0_0_12px_var(--accent)] sm:left-auto ${
                    i % 2 === 0 ? "sm:right-0 sm:translate-x-1/2" : "sm:left-0 sm:-translate-x-1/2"
                  }`}
                />
                <p className="font-mono-tag text-xs tracking-widest text-accent mb-1">{item.year}</p>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-muted mt-1">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
