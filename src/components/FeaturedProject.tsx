"use client";

import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const techStack = [
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "Flask", icon: "devicon-flask-original" },
    { name: "Scapy", icon: "devicon-python-plain colored" },
    { name: "MySQL", icon: "devicon-mysql-plain colored" },
    { name: "HTML / CSS", icon: "devicon-html5-plain colored" },
    { name: "Wireshark", icon: "devicon-linux-plain" },
];

const keyFeatures = [
    "Zero-Trust Verification — devices are constantly rechecked with continuous monitoring of upload, download & access patterns",
    "Behavior-Based Risk Scoring — assigns dynamic risk scores based on real-time network behavior",
    "Explainable Real-Time Alerts — security alerts with specific reasons for easy admin understanding",
    "Quarantine Control — restricts suspicious devices with warnings instead of immediate blocking",
    "Behavior Logging — stores complete behavior history for all network activity",
];

export default function FeaturedProject() {
    return (
        <section id="featured-project" className="py-24 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--color-accent)]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section label */}
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: false }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-sm text-[var(--color-accent-light)] font-medium">
                                Final Year Project
                            </span>
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">
                            <span className="gradient-text">Featured Project</span>
                        </h2>
                        <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-secondary)] mx-auto" />
                    </div>
                </ScrollReveal>

                {/* Main card */}
                <ScrollReveal>
                    <motion.div
                        whileHover={{ y: -4 }}
                        className="glass-card overflow-hidden"
                    >
                        {/* Top gradient bar */}
                        <div className="h-1.5 bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-secondary)] to-emerald-500" />

                        <div className="p-8 md:p-10">
                            <div className="flex flex-col lg:flex-row gap-8">
                                {/* Left — Info */}
                                <div className="flex-1 space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-emerald-500 flex items-center justify-center text-3xl shrink-0">
                                            🛡️
                                        </div>
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                                Intelligent Secure Network Access Management System
                                            </h3>
                                            <p className="text-sm text-[var(--color-muted)] mt-2">
                                                Built on{" "}
                                                <span className="text-[var(--color-accent-light)] font-semibold">
                                                    Zero-Trust Architecture
                                                </span>{" "}
                                                with{" "}
                                                <span className="text-[var(--color-accent-light)] font-semibold">
                                                    Behavior Analysis
                                                </span>
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-[var(--color-foreground)]/80 leading-relaxed">
                                        In shared networks like colleges, hostels, and offices, traditional systems
                                        trust devices immediately after connection — leaving unauthorized access
                                        undetected. We designed a secure network access management system built
                                        entirely on the{" "}
                                        <span className="text-[var(--color-accent-light)] font-medium">
                                            Zero-Trust security model
                                        </span>
                                        , where no device is ever trusted by default. The system continuously monitors
                                        network traffic behavior to protect against suspicious activities.
                                    </p>

                                    {/* Key Features */}
                                    <div className="space-y-3">
                                        <h4 className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-wider">
                                            Key Features
                                        </h4>
                                        <ul className="space-y-2">
                                            {keyFeatures.map((item, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.3 + i * 0.1 }}
                                                    viewport={{ once: false }}
                                                    className="flex items-start gap-3 text-sm text-[var(--color-foreground)]/70"
                                                >
                                                    <span className="text-[var(--color-accent-light)] mt-0.5">▹</span>
                                                    {item}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* CTA Buttons */}
                                    <div className="flex flex-wrap gap-4 pt-2">
                                        <a
                                            href="https://github.com/Hiruthickroshan"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            View on GitHub
                                        </a>
                                        <a
                                            href="#"
                                            className="btn-outline"
                                        >
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            Project Documentation
                                        </a>
                                    </div>
                                </div>

                                {/* Right — Tech Stack & Architecture */}
                                <div className="lg:w-72 shrink-0 space-y-6">
                                    {/* Tech Stack */}
                                    <div>
                                        <h4 className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-4">
                                            Tech Stack
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {techStack.map((tech) => (
                                                <span
                                                    key={tech.name}
                                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent-light)] border border-[var(--color-accent)]/15"
                                                >
                                                    <i className={tech.icon} style={{ fontSize: "0.875rem" }} />
                                                    {tech.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Architecture visual */}
                                    <div className="hidden lg:block p-5 rounded-xl bg-white/5 border border-white/5">
                                        <h4 className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-4">
                                            Architecture Flow
                                        </h4>
                                        <div className="space-y-3 text-xs">
                                            {[
                                                { color: "bg-emerald-400", label: "Device connects" },
                                                { color: "bg-[var(--color-accent)]", label: "Zero-Trust verify" },
                                                { color: "bg-cyan-400", label: "Behavior analysis" },
                                                { color: "bg-amber-400", label: "Risk score assigned" },
                                                { color: "bg-red-400", label: "Alert / Quarantine" },
                                            ].map((step, i, arr) => (
                                                <div key={i}>
                                                    <div className="flex items-center gap-2">
                                                        <span className={`w-2 h-2 rounded-full ${step.color}`} />
                                                        <span className="text-[var(--color-foreground)]/70">
                                                            {step.label}
                                                        </span>
                                                    </div>
                                                    {i < arr.length - 1 && (
                                                        <div className="w-px h-4 bg-white/10 ml-1" />
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </ScrollReveal>
            </div>
        </section>
    );
}
