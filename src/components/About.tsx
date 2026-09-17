"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";
import TiltCard from "@/components/ui/TiltCard";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-[0.9fr_1.4fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-xs mx-auto md:mx-0"
        >
          <TiltCard className="aspect-square rounded-3xl overflow-hidden border border-white/10 glass">
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 60vw, 320px"
            />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl bg-background/70 backdrop-blur px-3 py-2 font-mono-tag text-[10px] tracking-widest border border-white/10">
              <span className="flex items-center gap-1.5 text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_var(--accent)]" />
                {profile.status.toUpperCase()}
              </span>
              <span className="text-muted">2026</span>
            </div>
          </TiltCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Eyebrow>System Profile</Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-5">
            Hello, I&apos;m <span className="text-gradient">{profile.name}</span>
          </h2>
          <p className="text-muted leading-relaxed max-w-2xl mb-8">{profile.bio}</p>

          <div className="grid grid-cols-3 gap-3 max-w-lg">
            {profile.highlights.map((h) => (
              <TiltCard
                key={h.title}
                tilt={false}
                className="rounded-xl border border-border glass px-4 py-3 hover:border-accent/50 transition-colors"
              >
                <p className="font-semibold text-sm">{h.title}</p>
                <p className="font-mono-tag text-[10px] tracking-widest text-muted uppercase mt-1">
                  {h.subtitle}
                </p>
              </TiltCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
