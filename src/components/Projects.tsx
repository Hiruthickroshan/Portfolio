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

                {/* Featured Project Card */}
                <ScrollReveal>
                    <motion.div
                        whileHover={{ y: -4 }}
                        className="glass-card overflow-hidden group"
                    >
                        {/* Gradient top bar */}
                        <div className="h-1.5 bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-secondary)] to-pink-500" />

                        <div className="p-8 md:p-10">
                            <div className="flex flex-col md:flex-row gap-8">
                                {/* Left - Project Info */}
                                <div className="flex-1 space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-3xl shrink-0">
                                            🐾
                                        </div>
                                        <div>
                                            <span className="text-xs font-semibold text-[var(--color-accent-light)] uppercase tracking-wider">
                                                Featured Project
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
                                                    viewport={{ once: true }}
                                                    className="flex items-start gap-3 text-sm text-[var(--color-foreground)]/70"
                                                >
                                                    <span className="text-[var(--color-accent)] mt-1">▹</span>
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
                                                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent-light)] border border-[var(--color-accent)]/20"
                                                    >
                                                        {tech}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    {/* Decorative visual */}
                                    <div className="hidden md:block p-6 rounded-xl bg-white/5 border border-white/5">
                                        <div className="space-y-2 font-mono text-xs text-[var(--color-muted)]">
                                            <p><span className="text-[var(--color-accent)]">SELECT</span> pet.name, adopter.name</p>
                                            <p><span className="text-[var(--color-accent)]">FROM</span> pets pet</p>
                                            <p><span className="text-[var(--color-accent)]">JOIN</span> adopters adopter</p>
                                            <p>  <span className="text-[var(--color-accent)]">ON</span> pet.type = adopter.pref</p>
                                            <p><span className="text-[var(--color-accent)]">WHERE</span> match_score &gt; 0.8</p>
                                            <p><span className="text-[var(--color-accent)]">ORDER BY</span> score <span className="text-[var(--color-accent)]">DESC</span>;</p>
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
