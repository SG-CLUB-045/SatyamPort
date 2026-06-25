"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import { FiMenu, FiX, FiVolume2, FiVolumeX } from "react-icons/fi";
import { AmbientScene } from "@/components/ambient-scene";
import { BootScreen } from "@/components/boot-screen";
import {
  achievements,
  commits,
  contactEntries,
  collegeJourney,
  journeyCheckpoints,
  navItems,
  projects,
  releases,
  runningProcesses,
  skillCategories,
  systemModules
} from "@/constants/portfolio";

export function SatyamOS() {
  const [bootComplete, setBootComplete] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [selectedCommit, setSelectedCommit] = useState(commits[0]);
  const [expandedSkill, setExpandedSkill] = useState(skillCategories[0].name);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [showAmbient, setShowAmbient] = useState(false);
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      lerp: 0.08
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    rafId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const shouldShowAmbient = window.matchMedia("(min-width: 1024px)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setShowAmbient(shouldShowAmbient);
  }, []);

  useEffect(() => {
    const mainElement = mainRef.current;

    if (!mainElement) {
      return;
    }

    const setCursorVars = (clientX: number, clientY: number) => {
      const rect = mainElement.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 100;
      const y = ((clientY - rect.top) / rect.height) * 100;
      mainElement.style.setProperty("--cursor-x", `${x}%`);
      mainElement.style.setProperty("--cursor-y", `${y}%`);
    };

    const handlePointerMove = (event: PointerEvent) => {
      setCursorVars(event.clientX, event.clientY);
    };

    const handlePointerLeave = () => {
      mainElement.style.setProperty("--cursor-x", "35%");
      mainElement.style.setProperty("--cursor-y", "25%");
    };

    mainElement.style.setProperty("--cursor-x", "35%");
    mainElement.style.setProperty("--cursor-y", "25%");
    mainElement.addEventListener("pointermove", handlePointerMove);
    mainElement.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      mainElement.removeEventListener("pointermove", handlePointerMove);
      mainElement.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  const heroStatus = useMemo(
    () => ["Version: v5.0.0", "State: Stable Release", "Experience:", "  - AI Applications", "  - Mobile Development", "  - Distributed Systems", "  - Computer Vision"],
    []
  );

  const playTick = () => {
    if (!soundEnabled || typeof window === "undefined") {
      return;
    }

    const AudioContextClass = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) {
      return;
    }

    const context = new AudioContextClass();
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.type = "sine";
    oscillator.frequency.value = 520;
    gain.gain.value = 0.0001;

    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();

    const now = context.currentTime;
    gain.gain.exponentialRampToValueAtTime(0.04, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);
    oscillator.stop(now + 0.1);
    oscillator.onended = () => context.close();
  };

  const navigateTo = (target: string) => {
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
    playTick();
  };

  if (!bootComplete) {
    return <BootScreen onComplete={() => setBootComplete(true)} />;
  }

  return (
    <main
      ref={mainRef}
      className="relative min-h-screen overflow-x-hidden bg-[var(--background)] text-white"
      style={{
        ["--cursor-x" as string]: "35%",
        ["--cursor-y" as string]: "25%"
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-80 transition-opacity duration-500"
        style={{
          background: "radial-gradient(circle at var(--cursor-x) var(--cursor-y), rgba(59, 130, 246, 0.16), transparent 26%), radial-gradient(circle at calc(100% - var(--cursor-x)) calc(100% - var(--cursor-y)), rgba(6, 182, 212, 0.1), transparent 24%)"
        }}
      />
      <div className="noise-layer pointer-events-none absolute inset-0 opacity-35" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-[1600px] flex-col lg:flex-row">
        <aside className="glass relative z-20 hidden w-72 shrink-0 border-r border-white/10 px-5 py-6 lg:flex lg:flex-col">
          <div className="mb-8 space-y-2 rounded-[28px] border border-white/10 bg-white/[0.03] p-5 shadow-glow">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/35">SatyamOS</p>
            <h1 className="text-2xl font-semibold tracking-tight">Developer Kernel</h1>
            <p className="text-sm text-white/55">Booting the journey of an engineer who builds intelligent systems.</p>
          </div>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => navigateTo(item.href)}
                className="flex w-full items-center gap-3 rounded-2xl border border-transparent px-4 py-3 text-left text-sm text-white/72 transition hover:border-white/10 hover:bg-white/[0.05] hover:text-white"
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
          <div className="mt-auto rounded-[28px] border border-white/10 bg-white/[0.04] p-4 text-xs uppercase tracking-[0.28em] text-white/35">
            <p className="mb-3">System Ready</p>
            <div className="h-2 rounded-full bg-white/10">
              <div className="h-2 w-[88%] rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400" />
            </div>
          </div>
        </aside>

        <div className="relative flex min-h-screen flex-1 flex-col">
          <header className="sticky top-0 z-30 border-b border-white/10 bg-[#09090b]/75 px-4 py-4 backdrop-blur-xl md:px-6 lg:px-10">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
              <button
                onClick={() => setMobileMenuOpen((current) => !current)}
                className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/80 lg:hidden"
              >
                {mobileMenuOpen ? <FiX /> : <FiMenu />}
                <span>{mobileMenuOpen ? "Close" : "Menu"}</span>
              </button>
              <div className="hidden items-center gap-3 lg:flex">
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.9)]" />
                <span className="font-mono text-xs uppercase tracking-[0.35em] text-white/45">SatyamOS v5.0</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setSoundEnabled((current) => !current);
                    playTick();
                  }}
                  className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/75"
                >
                  {soundEnabled ? <FiVolume2 /> : <FiVolumeX />}
                  <span className="hidden sm:inline">Sound</span>
                </button>
                <button
                  onClick={() => navigateTo("#resume")}
                  className="rounded-full border border-sky-400/40 bg-sky-500/15 px-4 py-2 text-sm font-medium text-sky-100 transition hover:bg-sky-500/25"
                >
                  Download Resume
                </button>
              </div>
            </div>
          </header>

          <AnimatePresence>
            {mobileMenuOpen ? (
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                className="glass absolute left-4 right-4 top-[4.5rem] z-40 rounded-[28px] border border-white/10 p-4 shadow-glow lg:hidden"
              >
                <div className="mb-4 text-xs uppercase tracking-[0.35em] text-white/35">SatyamOS</div>
                <div className="grid gap-2 sm:grid-cols-2">
                  {navItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => navigateTo(item.href)}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-left text-sm text-white/80"
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <div className="relative flex-1 px-4 py-6 md:px-6 lg:px-10 lg:py-10">
            <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.25fr_0.75fr]">
              <motion.section
                id="profile"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="glass relative overflow-hidden rounded-[36px] border border-white/10 p-6 shadow-glow md:p-8"
              >
                <div className="absolute inset-0 opacity-70">
                  {showAmbient ? (
                    <AmbientScene />
                  ) : (
                    <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.12),transparent_34%)]" />
                  )}
                </div>
                <div className="relative z-10 max-w-3xl">
                  <div className="mb-8 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/40">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">Boot sequence complete</span>
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-cyan-100">Recruiter mode</span>
                  </div>

                  <div className="space-y-4 font-mono text-sm text-white/78 md:text-base">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-cyan-300">satyam@portfolio:~$</span>
                      <span>whoami</span>
                    </div>
                    <div className="grid gap-1 rounded-[28px] border border-white/10 bg-black/25 p-5 text-white/92 backdrop-blur-md md:p-6">
                      {[
                        "Satyam Jaiswal",
                        "Software Development Engineer",
                        "Flutter Developer",
                        "AI Engineer",
                        "Problem Solver",
                        "System Design Enthusiast"
                      ].map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-2 pt-3">
                      <span className="text-cyan-300">satyam@portfolio:~$</span>
                      <span>status</span>
                    </div>
                    <div className="grid gap-1 rounded-[28px] border border-white/10 bg-black/25 p-5 text-white/80 backdrop-blur-md md:p-6">
                      {heroStatus.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <button
                      onClick={() => navigateTo("#projects")}
                      className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]"
                    >
                      View Projects
                    </button>
                    <a
                      href="/api/resume"
                      className="rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                    >
                      Download Resume
                    </a>
                  </div>
                </div>
              </motion.section>

              <div className="grid gap-6">
                <motion.section
                  className="glass rounded-[32px] border border-white/10 p-6 shadow-glow"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/35">Developer Kernel</p>
                  <h2 className="mt-3 text-2xl font-semibold">About the engineer</h2>
                  <p className="mt-3 text-sm leading-7 text-white/65">
                    A product-minded builder who turns curiosity into systems, mobile apps, and AI-driven tools. The story here is organized like a machine: modules, processes, versions, and releases.
                  </p>
                </motion.section>

                <div className="glass rounded-[32px] border border-white/10 p-6 shadow-glow">
                  <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/35">System Snapshot</p>
                  <div className="mt-4 grid gap-3 text-sm text-white/72">
                    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                      <span>Version</span>
                      <span className="font-mono text-cyan-200">v5.0.0</span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                      <span>State</span>
                      <span className="font-mono text-emerald-200">Stable Release</span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                      <span>Focus</span>
                      <span className="font-mono text-sky-200">AI + Mobile + Systems</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-6 grid max-w-7xl gap-6 lg:grid-cols-2">
              <motion.section id="processes" className="glass rounded-[36px] border border-white/10 p-6 shadow-glow md:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/35">Running Processes</p>
                    <h2 className="mt-2 text-2xl font-semibold">Task Manager</h2>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs uppercase tracking-[0.25em] text-white/40">
                    PID Monitor
                  </div>
                </div>
                <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {runningProcesses.map((process, index) => (
                    <motion.div
                      key={process.pid}
                      initial={{ opacity: 0, y: 18, scale: 0.96 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ delay: index * 0.06 }}
                      className="rounded-[28px] border border-white/10 bg-white/[0.04] p-4"
                    >
                      <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/35">
                        <span>PID {process.pid}</span>
                        <span className={process.status === "Active" ? "text-emerald-300" : "text-cyan-300"}>{process.status}</span>
                      </div>
                      <div className="mt-4 text-lg font-medium text-white">{process.name}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              <motion.section className="glass rounded-[36px] border border-white/10 p-6 shadow-glow md:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/35">Developer Kernel</p>
                <h2 className="mt-2 text-2xl font-semibold">System modules</h2>
                <div className="mt-6 grid gap-3">
                  {systemModules.map((module) => (
                    <div key={module.title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-4 transition hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]">
                      <h3 className="text-lg font-medium text-white">{module.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/60">{module.description}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            </div>

            <section id="skills" className="mx-auto mt-6 max-w-7xl">
              <div className="glass rounded-[36px] border border-white/10 p-6 shadow-glow md:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/35">Installed Packages</p>
                <div className="mt-2 flex items-end justify-between gap-4">
                  <h2 className="text-2xl font-semibold">npm list</h2>
                  <span className="hidden font-mono text-xs uppercase tracking-[0.25em] text-white/35 md:inline">Click a package group</span>
                </div>
                <div className="mt-6 grid gap-3 lg:grid-cols-2">
                  {skillCategories.map((category) => {
                    const expanded = expandedSkill === category.name;

                    return (
                      <button
                        key={category.name}
                        onClick={() => {
                          setExpandedSkill(category.name);
                          playTick();
                        }}
                        className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 text-left transition hover:border-white/20 hover:bg-white/[0.06]"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <div className="font-mono text-xs uppercase tracking-[0.3em] text-white/35">Category</div>
                            <div className="mt-2 text-lg font-medium text-white">{category.name}</div>
                          </div>
                          <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1 font-mono text-xs uppercase tracking-[0.25em] text-white/50">
                            {expanded ? "Open" : "Closed"}
                          </div>
                        </div>
                        <AnimatePresence mode="wait">
                          {expanded ? (
                            <motion.div
                              key={category.name}
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-4 overflow-hidden text-sm text-white/72"
                            >
                              <div className="space-y-2 font-mono">
                                {category.items.map((item) => (
                                  <div key={item} className="flex items-center gap-2">
                                    <span className="text-cyan-300">├──</span>
                                    <span>{item}</span>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>

            <section id="projects" className="mx-auto mt-6 max-w-7xl">
              <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="glass rounded-[36px] border border-white/10 p-6 shadow-glow md:p-8">
                  <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/35">Deployed Services</p>
                  <h2 className="mt-2 text-2xl font-semibold">Production projects</h2>
                  <div className="mt-6 grid gap-4">
                    {projects.map((project) => {
                      const active = selectedProject.name === project.name;

                      return (
                        <div key={project.name} className={`rounded-[30px] border p-5 transition ${active ? "border-sky-400/40 bg-sky-500/10" : "border-white/10 bg-white/[0.04]"}`}>
                          <div className="flex flex-wrap items-start justify-between gap-4">
                            <div>
                              <div className="font-mono text-xs uppercase tracking-[0.3em] text-white/35">{project.status}</div>
                              <h3 className="mt-2 text-xl font-semibold text-white">{project.name}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              <button onClick={() => setSelectedProject(project)} className="rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/70">
                                Open Architecture
                              </button>
                              <button onClick={() => playTick()} className="rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/70">
                                View Demo
                              </button>
                              <button onClick={() => playTick()} className="rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/70">
                                Source Code
                              </button>
                            </div>
                          </div>
                          <div className="mt-4 text-sm text-white/65">
                            <div className="font-mono text-xs uppercase tracking-[0.25em] text-white/35">Stack</div>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {project.stack.map((stackItem) => (
                                <span key={stackItem} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 font-mono text-xs text-white/70">
                                  {stackItem}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="mt-4 grid gap-2 text-sm text-white/72 sm:grid-cols-2">
                            {project.features.map((feature) => (
                              <div key={feature} className="rounded-2xl border border-white/10 bg-black/15 px-3 py-2">{feature}</div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="glass rounded-[36px] border border-white/10 p-6 shadow-glow md:p-8">
                  <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/35">Architecture Viewer</p>
                  <h2 className="mt-2 text-2xl font-semibold">{selectedProject.name}</h2>
                  <p className="mt-2 text-sm text-white/60">System design diagram with animated service nodes.</p>
                  <div className="relative mt-6 min-h-[420px] overflow-hidden rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5">
                    <div className="absolute inset-y-6 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/0 via-cyan-300/60 to-cyan-400/0" />
                    <div className="grid h-full gap-4">
                      {selectedProject.architecture.map((node, index) => (
                        <motion.div
                          key={node.name}
                          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.08 }}
                          className={`w-full rounded-[24px] border border-white/10 bg-black/25 p-4 shadow-[0_0_30px_rgba(59,130,246,0.08)] md:w-[78%] ${index % 2 === 0 ? "ml-0" : "ml-auto"}`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/15 text-sky-200">{index + 1}</span>
                            <div>
                              <div className="font-medium text-white">{node.name}</div>
                              <div className="mt-1 text-sm text-white/62">{node.detail}</div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="achievements" className="mx-auto mt-6 max-w-7xl">
              <div className="glass rounded-[36px] border border-white/10 p-6 shadow-glow md:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/35">System Milestones</p>
                <h2 className="mt-2 text-2xl font-semibold">Achievements</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {achievements.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ delay: index * 0.08 }}
                      className="rounded-[30px] border border-white/10 bg-white/[0.04] p-5"
                    >
                      <div className="text-sm text-amber-200">🏆</div>
                      <p className="mt-4 text-lg text-white">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            <section id="journey-checkpoints" className="mx-auto mt-6 max-w-7xl">
              <div className="glass rounded-[36px] border border-white/10 p-6 shadow-glow md:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/35">Career checkpoints</p>
                <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
                  <h2 className="text-2xl font-semibold">Photo journey</h2>
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/35">placeholder images</span>
                </div>
                <div className="mt-6 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
                  {journeyCheckpoints.map((checkpoint, index) => (
                    <motion.article
                      key={checkpoint.title}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: index * 0.05 }}
                      className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] shadow-glow"
                    >
                      <img src={checkpoint.photo} alt={checkpoint.title} className="h-56 w-full object-cover" loading="lazy" />
                      <div className="p-5">
                        <div className="font-mono text-xs uppercase tracking-[0.3em] text-white/35">{checkpoint.year}</div>
                        <h3 className="mt-2 text-xl font-semibold text-white">{checkpoint.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-white/62">{checkpoint.detail}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {checkpoint.tags.map((tag) => (
                            <span key={tag} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </section>

            <section id="journey" className="mx-auto mt-6 max-w-7xl">
              <div className="glass rounded-[36px] border border-white/10 p-6 shadow-glow md:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/35">Git History</p>
                <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
                  <h2 className="text-2xl font-semibold">git log --journey</h2>
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/35">Interactive timeline</span>
                </div>
                <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
                  <div className="relative pl-6">
                    <div className="absolute left-[10px] top-0 h-full w-px bg-gradient-to-b from-cyan-400/0 via-cyan-300/70 to-cyan-400/0" />
                    <div className="space-y-3">
                      {commits.map((commit) => {
                        const active = selectedCommit.message === commit.message;

                        return (
                          <button
                            key={`${commit.year}-${commit.message}`}
                            onClick={() => {
                              setSelectedCommit(commit);
                              playTick();
                            }}
                            className={`relative w-full rounded-[26px] border p-4 text-left transition ${active ? "border-sky-400/40 bg-sky-500/10" : "border-white/10 bg-white/[0.04]"}`}
                          >
                            <span className="absolute left-[-15px] top-6 h-4 w-4 rounded-full border border-cyan-300/70 bg-[#09090b] shadow-[0_0_18px_rgba(6,182,212,0.65)]" />
                            <div className="font-mono text-xs uppercase tracking-[0.3em] text-white/35">commit {commit.year}</div>
                            <div className="mt-2 text-lg text-white">{commit.message}</div>
                            <div className="mt-2 text-sm text-white/62">{commit.detail}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="rounded-[30px] border border-white/10 bg-black/20 p-5">
                    <div className="font-mono text-xs uppercase tracking-[0.35em] text-white/35">Selected Commit</div>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{selectedCommit.message}</h3>
                    <p className="mt-2 font-mono text-sm text-cyan-200">{selectedCommit.year}</p>
                    <div className="mt-5 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04]">
                      <img
                        src={journeyCheckpoints.find((item) => item.year === selectedCommit.year)?.photo ?? "/placeholders/journey-2026.svg"}
                        alt={selectedCommit.message}
                        className="h-56 w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="mt-5 space-y-4 text-sm leading-7 text-white/68">
                      <p>{selectedCommit.detail}</p>
                      <div>
                        <div className="font-mono text-xs uppercase tracking-[0.25em] text-white/35">Challenge</div>
                        <p className="mt-2">{selectedCommit.challenge}</p>
                      </div>
                      <div>
                        <div className="font-mono text-xs uppercase tracking-[0.25em] text-white/35">Learning</div>
                        <p className="mt-2">{selectedCommit.learning}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="college-life" className="mx-auto mt-6 max-w-7xl">
              <div className="glass rounded-[36px] border border-white/10 p-6 shadow-glow md:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/35">College life</p>
                <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
                  <h2 className="text-2xl font-semibold">Four-year journey</h2>
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/35">semester story</span>
                </div>
                <div className="mt-6 grid gap-4 xl:grid-cols-4">
                  {collegeJourney.map((year, index) => (
                    <motion.article
                      key={year.year}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ delay: index * 0.05 }}
                      className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] shadow-glow"
                    >
                      <img src={year.photo} alt={year.title} className="h-44 w-full object-cover" loading="lazy" />
                      <div className="p-5">
                        <div className="font-mono text-xs uppercase tracking-[0.3em] text-white/35">{year.year}</div>
                        <h3 className="mt-2 text-lg font-semibold text-white">{year.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-white/62">{year.summary}</p>
                        <ul className="mt-4 space-y-2 text-sm text-white/70">
                          {year.highlights.map((item) => (
                            <li key={item} className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </section>

            <section className="mx-auto mt-6 max-w-7xl">
              <div className="glass rounded-[36px] border border-white/10 p-6 shadow-glow md:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/35">Version Releases</p>
                <h2 className="mt-2 text-2xl font-semibold">Software releases</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                  {releases.map((release, index) => (
                    <motion.div
                      key={release.version}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: index * 0.05 }}
                      className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5"
                    >
                      <div className="font-mono text-xs uppercase tracking-[0.3em] text-white/35">GitHub Release</div>
                      <div className="mt-4 text-3xl font-semibold text-white">{release.version}</div>
                      <p className="mt-3 text-sm text-white/65">{release.title}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            <section id="resume" className="mx-auto mt-6 max-w-7xl">
              <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="glass rounded-[36px] border border-white/10 p-6 shadow-glow md:p-8">
                  <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/35">Download Build Artifact</p>
                  <h2 className="mt-2 text-2xl font-semibold">build successful</h2>
                  <div className="mt-6 rounded-[30px] border border-white/10 bg-black/25 p-5 font-mono text-sm text-white/72">
                    <div>Artifact:</div>
                    <div className="mt-2 text-white">resume_v5.0.pdf</div>
                  </div>
                  <a
                    href="/api/resume"
                    className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]"
                  >
                    Download Resume
                  </a>
                </div>

                <div id="contact" className="glass rounded-[36px] border border-white/10 p-6 shadow-glow md:p-8">
                  <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/35">Establish Connection</p>
                  <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
                    <h2 className="text-2xl font-semibold">ping satyam</h2>
                    <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.25em] text-emerald-200">reachable</span>
                  </div>
                  <div className="mt-6 rounded-[30px] border border-white/10 bg-black/25 p-5 font-mono text-sm leading-7 text-white/75">
                    {contactEntries.map((entry) => (
                      <div key={entry.label} className="flex items-center justify-between gap-4">
                        <span>{entry.label.padEnd(12, ".")}</span>
                        <span>{entry.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {contactEntries.slice(0, 3).map((entry) => (
                      <a
                        key={entry.label}
                        href={entry.href}
                        className="rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-sm text-white/75 transition hover:bg-white/[0.08]"
                      >
                        {entry.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <footer className="mx-auto mt-6 max-w-7xl pb-10">
              <div className="glass rounded-[36px] border border-white/10 px-6 py-8 text-center shadow-glow md:px-8">
                <div className="font-mono text-sm text-cyan-300">satyam@portfolio:~$ shutdown</div>
                <p className="mt-3 text-xl font-medium text-white">Thank you for exploring SatyamOS v5.0</p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.3em] text-white/35">Status: Ready for Production.</p>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </main>
  );
}