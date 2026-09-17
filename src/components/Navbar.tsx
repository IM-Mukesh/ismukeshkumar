"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/data";
import Magnetic from "@/components/ui/Magnetic";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-[0_1px_0_0_rgba(59,130,246,0.15)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#home" className="text-lg font-bold tracking-tight" data-cursor-hover>
          {profile.firstName}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono-tag text-xs tracking-widest uppercase text-muted">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <li key={link.href} className="relative py-1">
                <a
                  href={link.href}
                  className={`relative z-10 transition-colors ${
                    isActive ? "text-foreground" : "hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="nav-active-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-accent to-accent-2 shadow-[0_0_8px_var(--accent)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-tag text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors"
          >
            Resume
          </a>
          <Magnetic>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-accent/40 px-4 py-2 font-mono-tag text-xs tracking-widest uppercase text-foreground hover:border-accent hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-all"
            >
              Hire Me
            </a>
          </Magnetic>
        </div>

        <button
          className="md:hidden relative z-[110] h-9 w-9 flex items-center justify-center text-foreground"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="md:hidden fixed inset-0 z-[90] bg-background/70 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="md:hidden fixed top-16 inset-x-4 z-[100] glass rounded-2xl border border-border p-6 flex flex-col gap-1 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] origin-top"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.25 }}
                  className="font-mono-tag text-sm tracking-widest uppercase text-muted hover:text-accent py-2.5 border-b border-border/60 last:border-b-0"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + navLinks.length * 0.04, duration: 0.25 }}
                className="mt-4 inline-flex w-fit items-center rounded-full border border-accent/40 px-4 py-2 font-mono-tag text-xs tracking-widest uppercase hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-all"
              >
                Hire Me
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
