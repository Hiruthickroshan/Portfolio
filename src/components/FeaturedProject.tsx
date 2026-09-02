"use client";

import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

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
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-emerald-500 flex items-center justify-center shrink-0">
                                            <Shield className="w-7 h-7 text-[var(--color-foreground)]" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-foreground)] leading-tight">
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
                                                    initial={{ opacity: 0, x: -15 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.15 + i * 0.08, duration: 0.35 }}
                                                    viewport={{ once: true }}
                                                    className="flex items-start gap-3 text-sm text-[var(--color-foreground)]/70"
                                                >
                                                    <span className="text-[var(--color-accent-light)] mt-0.5">▹</span>
                                                    {item}
                                                </motion.li>
                                            ))}
                                        </ul>
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
                                    <div className="hidden lg:block p-5 rounded-xl bg-[var(--color-surface-light)] border border-[var(--color-border)]">
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
                                                        <div className="w-px h-4 bg-[var(--color-surface-light)]/80 ml-1" />
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
