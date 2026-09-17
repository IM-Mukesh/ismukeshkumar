"use client";

import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*";
const TOTAL_FRAMES = 16;

export function useTextScramble(text: string): string {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    let frame = 0;
    let raf: number;

    const tick = () => {
      frame++;
      const revealCount = Math.floor((frame / TOTAL_FRAMES) * text.length);
      const scrambled = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < revealCount) return text[i];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplay(scrambled);

      if (frame < TOTAL_FRAMES) {
        raf = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text]);

  return display;
}
