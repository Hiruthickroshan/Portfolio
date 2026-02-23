"use client";

import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative">
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[var(--color-accent)]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <SectionHeading
                    title="Featured Projects"
                    subtitle="Combining engineering thinking with practical solutions"
                />

                {/* ===== Project 1: Zero-Trust Network ===== */}
                <ScrollReveal>
                    <motion.div
                        whileHover={{ y: -4 }}
                        className="glass-card overflow-hidden group mb-10"
                    >
                        <div className="h-1.5 bg-gradient-to-r from-emerald-500 via-cyan-500 to-[var(--color-accent)]" />

                        <div className="p-8 md:p-10">
                            <div className="flex flex-col md:flex-row gap-8">
                                {/* Left - Project Info */}
                                <div className="flex-1 space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-3xl shrink-0">
                                            🛡️
                                        </div>
                                        <div>
                                            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                                                Featured Project — Live Demo
                                            </span>
                                            <h3 className="text-2xl font-bold text-white mt-1">
                                                Intelligent Secure Network Access Management System
                                            </h3>
                                            <p className="text-sm text-[var(--color-muted)] mt-1">
                                                Using Zero-Trust &amp; Behavior Analysis
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-[var(--color-foreground)]/80 leading-relaxed">
                                        In shared networks like colleges, hostels, and offices, traditional systems
                                        trust devices immediately after connection — leaving unauthorized access
                                        undetected. We designed a secure network access management system built
                                        entirely on the{" "}
                                        <span className="text-emerald-400 font-medium">Zero-Trust security model</span>,
                                        where no device is ever trusted by default. The system continuously monitors
                                        network traffic behavior to protect against suspicious activities.
                                    </p>

                                    <div className="space-y-3">
                                        <h4 className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-wider">
                                            Key Features
                                        </h4>
                                        <ul className="space-y-2">
                                            {[
                                                "Zero-Trust Verification — devices are constantly rechecked with continuous monitoring of upload, download & access patterns",
                                                "Behavior-Based Risk Scoring — assigns dynamic risk scores based on real-time network behavior",
                                                "Explainable Real-Time Alerts — security alerts with specific reasons for easy admin understanding",
                                                "Quarantine Control — restricts suspicious devices with warnings instead of immediate blocking",
                                                "Behavior Logging — stores complete behavior history for all network activity",
                                            ].map((item, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.3 + i * 0.1 }}
                                                    viewport={{ once: false }}
                                                    className="flex items-start gap-3 text-sm text-[var(--color-foreground)]/70"
                                                >
                                                    <span className="text-emerald-400 mt-1">▹</span>
                                                    {item}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Right - Tech Stack */}
                                <div className="md:w-64 shrink-0 space-y-6">
                                    <div>
                                        <h4 className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-4">
                                            Tech Stack
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {[
                                                "Python",
                                                "JavaScript",
                                                "Flask",
                                                "Scapy",
                                                "PyShark",
                                                "MySQL",
                                                "HTML/CSS",
                                                "Wireshark",
                                            ].map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Architecture visual */}
                                    <div className="hidden md:block p-5 rounded-xl bg-white/5 border border-white/5">
                                        <div className="space-y-3 text-xs">
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                                <span className="text-[var(--color-foreground)]/70">Device connects</span>
                                            </div>
                                            <div className="w-px h-4 bg-white/10 ml-1" />
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                                                <span className="text-[var(--color-foreground)]/70">Zero-Trust verify</span>
                                            </div>
                                            <div className="w-px h-4 bg-white/10 ml-1" />
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                                                <span className="text-[var(--color-foreground)]/70">Behavior analysis</span>
                                            </div>
                                            <div className="w-px h-4 bg-white/10 ml-1" />
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-amber-400" />
                                                <span className="text-[var(--color-foreground)]/70">Risk score assigned</span>
                                            </div>
                                            <div className="w-px h-4 bg-white/10 ml-1" />
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-red-400" />
                                                <span className="text-[var(--color-foreground)]/70">Alert / Quarantine</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </ScrollReveal>

                {/* ===== Project 2: Pet Adoption Matchmaker ===== */}
                <ScrollReveal delay={0.2}>
                    <motion.div
                        whileHover={{ y: -4 }}
                        className="glass-card overflow-hidden group"
                    >
                        <div className="h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500" />

                        <div className="p-8 md:p-10">
                            <div className="flex flex-col md:flex-row gap-8">
                                {/* Left - Project Info */}
                                <div className="flex-1 space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-3xl shrink-0">
                                            🐾
                                        </div>
                                        <div>
                                            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                                                Database Project
                                            </span>
                                            <h3 className="text-2xl font-bold text-white mt-1">
                                                Pet Adoption Matchmaker
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="text-[var(--color-foreground)]/80 leading-relaxed">
                                        Designed and developed a robust database system that pairs
                                        pets with adopters using intelligent matching criteria. Built
                                        a comprehensive SQL-based solution with advanced data
                                        querying and filtering logic to streamline the adoption
                                        process.
                                    </p>

                                    <div className="space-y-3">
                                        <h4 className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-wider">
                                            Key Highlights
                                        </h4>
                                        <ul className="space-y-2">
                                            {[
                                                "Designed a robust relational database schema for pet and adopter data",
                                                "Utilized SQL for complex data querying and filtering logic",
                                                "Implemented intelligent matching algorithm to pair pets with ideal adopters",
                                                "Built end-to-end data pipeline for adoption workflow",
                                            ].map((item, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.3 + i * 0.1 }}
                                                    viewport={{ once: false }}
                                                    className="flex items-start gap-3 text-sm text-[var(--color-foreground)]/70"
                                                >
                                                    <span className="text-amber-400 mt-1">▹</span>
                                                    {item}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Right - Tech Stack */}
                                <div className="md:w-64 shrink-0 space-y-6">
                                    <div>
                                        <h4 className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-4">
                                            Tech Stack
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {["SQL", "DBMS", "Database Design", "Data Filtering", "Query Optimization"].map(
                                                (tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20"
                                                    >
                                                        {tech}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    {/* SQL visual */}
                                    <div className="hidden md:block p-6 rounded-xl bg-white/5 border border-white/5">
                                        <div className="space-y-2 font-mono text-xs text-[var(--color-muted)]">
                                            <p><span className="text-amber-400">SELECT</span> pet.name, adopter.name</p>
                                            <p><span className="text-amber-400">FROM</span> pets pet</p>
                                            <p><span className="text-amber-400">JOIN</span> adopters adopter</p>
                                            <p>  <span className="text-amber-400">ON</span> pet.type = adopter.pref</p>
                                            <p><span className="text-amber-400">WHERE</span> match_score &gt; 0.8</p>
                                            <p><span className="text-amber-400">ORDER BY</span> score <span className="text-amber-400">DESC</span>;</p>
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
