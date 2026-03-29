"use client";

import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { PawPrint, Github } from "lucide-react";

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative">
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[var(--color-accent)]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <SectionHeading
                    title="Other Projects"
                    subtitle="More engineering projects and practical applications"
                />

                {/* ===== Project: Pet Adoption Matchmaker ===== */}
                <ScrollReveal>
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
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shrink-0">
                                            <PawPrint className="w-7 h-7 text-[var(--color-foreground)]" />
                                        </div>
                                        <div>
                                            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                                                Database Project
                                            </span>
                                            <h3 className="text-2xl font-bold text-[var(--color-foreground)] mt-1">
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

                                    {/* Project Links */}
                                    <div className="pt-2">
                                        <a
                                            href="https://github.com/Hiruthickroshan/Pet-Adoption-Matchmaker"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-surface-light)] border border-[var(--color-border)] text-sm font-medium text-[var(--color-foreground)] hover:bg-[var(--color-surface-light)]/80 hover:border-amber-500/30 transition-all duration-300 hover:scale-[1.02]"
                                        >
                                            <Github className="w-4 h-4" />
                                            View Source
                                        </a>
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
                                                { name: "SQL", icon: "devicon-mysql-plain colored" },
                                                { name: "DBMS", icon: "devicon-postgresql-plain colored" },
                                                { name: "Database Design", icon: "devicon-sqldeveloper-plain" },
                                                { name: "Query Optimization", icon: "devicon-azuresqldatabase-plain" },
                                            ].map((tech) => (
                                                <span
                                                    key={tech.name}
                                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20"
                                                >
                                                    <i className={tech.icon} style={{ fontSize: "0.75rem" }} />
                                                    {tech.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* SQL visual */}
                                    <div className="hidden md:block p-6 rounded-xl bg-[var(--color-surface-light)] border border-[var(--color-border)]">
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
