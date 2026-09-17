"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { profile } from "@/lib/data";
import { useTextScramble } from "@/hooks/useTextScramble";
import Magnetic from "@/components/ui/Magnetic";

const STAGES = profile.taglines.length;

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState(0);
  const scrambled = useTextScramble(profile.taglines[stage]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(STAGES - 1, Math.floor(latest * STAGES));
    setStage(index);
  });

  return (
    <section id="home" ref={sectionRef} style={{ height: `${STAGES * 100}vh` }} className="relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="mx-auto max-w-7xl h-full px-6 grid grid-cols-1 md:grid-cols-[1fr_1.1fr_1fr] items-center gap-6 pt-16">
          <div className="order-2 md:order-1 flex flex-col gap-4">
            <p className="font-mono-tag text-xs tracking-widest text-muted uppercase">
              Hi, I&apos;m{" "}
              <span className="underline decoration-accent underline-offset-4 text-foreground">
                {profile.firstName}
              </span>
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight uppercase min-h-[2.2em] sm:min-h-[1.9em]">
              <span className="text-gradient">{scrambled}</span>
            </h1>

            <div className="flex gap-3 pt-4">
              <Magnetic>
                <a
                  href="#projects"
                  className="inline-flex items-center rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-shadow"
                >
                  View My Work
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full border border-accent/40 px-5 py-2.5 text-sm font-medium hover:border-accent hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-all"
                >
                  Contact Me
                </a>
              </Magnetic>
            </div>
          </div>

          <div className="order-1 md:order-2 relative mx-auto w-full max-w-sm aspect-[3/4] max-h-[70vh]">
            <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 glass shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 30vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/10 pointer-events-none" />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-accent/20 pointer-events-none" />
            </div>
          </div>

          <motion.div
            key={`kicker-${stage}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="order-3 hidden md:flex flex-col gap-2 text-right"
          >
            <p className="font-mono-tag text-[11px] tracking-widest text-accent uppercase">
              {`// ${profile.kicker[stage]}`}
            </p>
            <p className="text-sm text-muted max-w-[220px] ml-auto">{profile.heroSubtitle}</p>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-6 font-mono-tag text-[11px] tracking-widest text-muted flex items-center gap-3">
          <span className="relative flex h-4 w-[1px] bg-border overflow-hidden">
            <motion.span
              className="absolute inset-x-0 top-0 h-2 bg-gradient-to-b from-accent to-transparent"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
          SCROLL TO SCRUB TIMELINE
        </div>

        <div className="hidden lg:flex absolute bottom-8 right-6 items-center gap-1.5">
          {Array.from({ length: STAGES }).map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === stage ? "w-6 bg-gradient-to-r from-accent to-accent-2" : "w-1.5 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
