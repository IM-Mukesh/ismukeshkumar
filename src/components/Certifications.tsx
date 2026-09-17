"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";
import TiltCard from "@/components/ui/TiltCard";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <div className="flex justify-center">
            <Eyebrow>Verified Credentials</Eyebrow>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Certifications</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <TiltCard className="rounded-2xl border border-border glass p-6 hover:border-accent/50 transition-colors h-full">
                <Award className="text-accent mb-4 drop-shadow-[0_0_6px_rgba(59,130,246,0.6)]" size={22} />
                <p className="font-semibold leading-snug mb-1">{cert.title}</p>
                <p className="text-sm text-muted">{cert.issuer}</p>
                <p className="font-mono-tag text-[10px] tracking-widest text-muted mt-3">{cert.year}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
