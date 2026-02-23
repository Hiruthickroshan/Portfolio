"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient orbs */}
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl animate-pulse-glow" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[var(--color-accent-secondary)]/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent)]/5 rounded-full blur-3xl" />

                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-[var(--color-accent)]/30 rounded-full animate-float"
                        style={{
                            top: `${20 + i * 15}%`,
                            left: `${10 + i * 16}%`,
                            animationDelay: `${i * 0.8}s`,
                            animationDuration: `${5 + i}s`,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
                {/* Status badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-sm text-[var(--color-accent-light)] font-medium">
                        Open to opportunities
                    </span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
                >
                    <span className="text-white">Hi, I&apos;m </span>
                    <span className="gradient-text">Hiruthick</span>
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-xl sm:text-2xl md:text-3xl text-[var(--color-muted)] font-light mb-4 max-w-3xl mx-auto"
                >
                    Creative and Curious Thinker
                </motion.p>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-base sm:text-lg text-[var(--color-muted)]/80 mb-10 max-w-2xl mx-auto"
                >
                    Electronics &amp; Communication Engineering undergraduate at{" "}
                    <span className="text-[var(--color-accent-light)]">
                        Government College of Engineering, Erode
                    </span>
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <a
                        href="mailto:hiruthick1947@gmail.com"
                        className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-secondary)] text-white font-semibold text-base hover:shadow-xl hover:shadow-[var(--color-accent)]/25 transition-all duration-300 hover:scale-105"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Get in Touch
                    </a>

                    <a
                        href="https://www.linkedin.com/in/hiruthick-roshan-85968a124?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 px-7 py-3.5 rounded-full border border-[var(--color-border)] text-[var(--color-foreground)] font-semibold text-base hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-accent)]/5 transition-all duration-300 hover:scale-[1.02]"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/Hiruthickroshan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 px-7 py-3.5 rounded-full border border-[var(--color-border)] text-[var(--color-foreground)] font-semibold text-base hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-accent)]/5 transition-all duration-300 hover:scale-105"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                    </a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <a href="#about" className="flex flex-col items-center gap-2 text-[var(--color-muted)] hover:text-[var(--color-accent-light)] transition-colors">
                        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </motion.div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
