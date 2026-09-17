"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div id="expertise" className="text-center mb-14">
          <div className="flex justify-center">
            <Eyebrow>Technical Stack</Eyebrow>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Technologies I <span className="text-gradient">Work With</span>
          </h2>
          <p className="text-muted mt-3 max-w-xl mx-auto">
            Full-stack expertise across modern web development, artificial intelligence, and cloud
            infrastructure.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex flex-col sm:flex-row sm:items-center gap-3"
            >
              <p className="font-mono-tag text-[11px] tracking-widest text-muted uppercase w-full sm:w-48 shrink-0">
                {group.label}
              </p>
              <div
                className="relative flex-1 overflow-hidden py-1"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                }}
              >
                <div
                  className={`flex w-max gap-2 ${
                    i % 2 === 0 ? "animate-marquee" : "animate-marquee-reverse"
                  } hover:[animation-play-state:paused]`}
                >
                  {[...group.skills, ...group.skills].map((skill, idx) => (
                    <span
                      key={`${skill}-${idx}`}
                      className="shrink-0 rounded-full border border-border glass px-3.5 py-1.5 text-sm hover:border-accent/60 hover:text-accent transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
