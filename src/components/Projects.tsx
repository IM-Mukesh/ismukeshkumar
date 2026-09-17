"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";
import TiltCard from "@/components/ui/TiltCard";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <div className="flex justify-center">
            <Eyebrow>Portfolio Work</Eyebrow>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Featured <span className="text-gradient">Engineering Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
            >
              <TiltCard className="flex flex-col h-full rounded-2xl border border-border glass p-6 hover:border-accent/50 transition-colors overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-accent-2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono-tag text-[11px] tracking-widest text-muted">
                    {`// PROJECT ${project.id}`}
                  </span>
                  <span className="rounded-full border border-border px-3 py-1 font-mono-tag text-[10px] tracking-widest uppercase text-muted">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-2 transition-colors group-hover:text-gradient">
                  {project.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-6 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-background/60 border border-border px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 font-mono-tag text-xs tracking-widest uppercase">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
                  >
                    Live <ArrowUpRight size={14} />
                  </a>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
