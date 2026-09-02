"use client";

import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const otherProjects = [
    {
        title: "Pet Adoption Matchmaker",
        subtitle: "Database & DBMS Application",
        description:
            "Designed and built a full relational database schema that pairs rescued pets with suitable adopters using an intelligent weighted preference algorithm. Implemented complex SQL joins, indexing, and data constraints.",
        tags: ["SQL", "DBMS", "Database Design", "Relational Schema", "Optimization"],
        github: "https://github.com/Hiruthickroshan/Pet-Adoption-Matchmaker",
        icon: "ri-heart-3-line",
        iconColor: "text-amber-400",
        codeSnippet: `SELECT pets.name, adopters.name,
       MATCH_SCORE(pets.type, adopters.pref) AS score
FROM pets
JOIN adopters ON pets.species = adopters.species_pref
WHERE health_cleared = 1
ORDER BY score DESC;`,
    },
];

export default function Projects() {
    return (
        <section className="py-12 relative">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <SectionHeading
                    subtitle="ADDITIONAL WORK"
                    title="Engineering Projects"
                />

                <div className="grid md:grid-cols-1 gap-8">
                    {otherProjects.map((project, idx) => (
                        <ScrollReveal key={project.title} delay={idx * 0.1}>
                            <motion.div
                                whileHover={{ y: -4 }}
                                className="bedim-card p-8 sm:p-10"
                            >
                                <div className="grid lg:grid-cols-12 gap-8 items-center">
                                    {/* Left: Info */}
                                    <div className="lg:col-span-7 space-y-5">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-12 h-12 rounded-2xl bg-[var(--container-color-light)] border border-[var(--border-color)] flex items-center justify-center text-2xl ${project.iconColor}`}>
                                                <i className={project.icon} />
                                            </div>
                                            <div>
                                                <span className="text-xs font-bold text-[var(--first-color)] uppercase tracking-wider">
                                                    {project.subtitle}
                                                </span>
                                                <h3 className="font-syne text-2xl font-bold text-[var(--fg)]">
                                                    {project.title}
                                                </h3>
                                            </div>
                                        </div>

                                        <p className="text-[var(--text-color)] text-base leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 rounded-full bg-[var(--container-color-light)] border border-[var(--border-color)] text-xs font-medium text-[var(--fg)]"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action Link */}
                                        <div className="pt-2">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-secondary group inline-flex items-center gap-2 text-sm"
                                            >
                                                <i className="ri-github-fill text-lg" />
                                                <span>View on GitHub</span>
                                                <i className="ri-arrow-right-up-line group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Right: Code Visual Block */}
                                    <div className="lg:col-span-5">
                                        <div className="rounded-2xl bg-[var(--bg)] border border-[var(--border-color)] overflow-hidden shadow-md">
                                            <div className="px-4 py-3 bg-[var(--container-color-light)] border-b border-[var(--border-color)] flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                                                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                                                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                                                </div>
                                                <span className="text-[11px] font-mono text-[var(--text-color)]">
                                                    query.sql
                                                </span>
                                            </div>
                                            <pre className="p-4 text-xs font-mono text-[var(--text-color)] overflow-x-auto leading-relaxed">
                                                <code>{project.codeSnippet}</code>
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
