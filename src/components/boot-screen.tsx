"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";

const bootLines = [
  "Booting SatyamOS v5.0...",
  "Loading curiosity.dll ............ OK",
  "Loading cplusplus.dll ............ OK",
  "Loading flutter-engine.dll ....... OK",
  "Loading ai-engine.dll ............ OK",
  "Loading system-design.dll ........ OK",
  "Loading problem-solving.dll ...... OK",
  "Initializing Developer Kernel...",
  "Launching Portfolio Environment...",
  "Welcome Recruiter."
];

type BootScreenProps = {
  onComplete: () => void;
};

export function BootScreen({ onComplete }: BootScreenProps) {
  const [visibleCount, setVisibleCount] = useState(1);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const panel = panelRef.current;

    if (cursor) {
      gsap.to(cursor, { opacity: 0.15, duration: 0.6, repeat: -1, yoyo: true, ease: "power2.inOut" });
    }

    if (panel) {
      gsap.fromTo(panel, { opacity: 0, y: 18, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power3.out" });
    }
  }, []);

  useEffect(() => {
    if (visibleCount >= bootLines.length) {
      const timeout = window.setTimeout(onComplete, 700);
      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(() => {
      setVisibleCount((current) => current + 1);
    }, 360);

    return () => window.clearTimeout(timeout);
  }, [visibleCount, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        ref={panelRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, filter: "blur(8px)" }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#09090b] px-4"
      >
        <div className="relative w-full max-w-3xl overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-2xl md:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.12),transparent_30%)]" />
          <div className="relative flex items-center gap-2 pb-6 text-xs uppercase tracking-[0.36em] text-white/40">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>SatyamOS boot sequence</span>
          </div>
          <div className="relative space-y-3 font-mono text-sm leading-7 text-white/85 md:text-base md:leading-8">
            {bootLines.slice(0, visibleCount).map((line) => (
              <div key={line} className="flex items-center gap-3">
                <span className="text-cyan-300">&gt;</span>
                <span>{line}</span>
              </div>
            ))}
            <div className="flex items-center gap-3 text-white/70">
              <span className="text-cyan-300">&gt;</span>
              <span className="inline-flex items-center gap-1">
                <span>system</span>
                <span ref={cursorRef} className="inline-block h-5 w-2 rounded-full bg-white/80" />
              </span>
            </div>
          </div>
          <div className="relative mt-8 flex items-center justify-between border-t border-white/10 pt-4 text-xs uppercase tracking-[0.3em] text-white/35">
            <span>Initializing developer kernel</span>
            <span>Stable release ready</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}