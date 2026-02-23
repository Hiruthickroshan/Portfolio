"use client";

import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const programmingSkills = [
    { name: "C Programming", level: 85, icon: "⚡" },
    { name: "SQL", level: 80, icon: "🗄️" },
    { name: "Java", level: 80, icon: "☕" },
    { name: "Python", level: 80, icon: "🐍" },
];

const toolsSkills = [
    { name: "DBMS", icon: "🗃️" },
    { name: "VS Code", icon: "💻" },
    { name: "MATLAB", icon: "📊" },
    { name: "Microsoft Word", icon: "📝" },
    { name: "Microsoft PowerPoint", icon: "📑" },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative">
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[var(--color-accent-secondary)]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <SectionHeading
                    title="Technical Skills"
                    subtitle="Building a strong foundation in programming and engineering tools"
                />

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Programming Languages */}
                    <ScrollReveal direction="left">
                        <div className="glass-card p-8 h-full">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-secondary)] flex items-center justify-center text-lg">
                                    🖥️
                                </div>
                                <h3 className="text-xl font-semibold text-white">
                                    Programming Languages
                                </h3>
                            </div>

                            <div className="space-y-6">
                                {programmingSkills.map((skill, i) => (
                                    <div key={skill.name} className="group">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <span className="text-lg">{skill.icon}</span>
                                                <span className="font-medium text-[var(--color-foreground)]">
                                                    {skill.name}
                                                </span>
                                            </div>
                                            <span className="text-sm text-[var(--color-accent-light)] font-semibold">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{
                                                    delay: 0.2 + i * 0.15,
                                                    duration: 1,
                                                    ease: "easeOut",
                                                }}
                                                viewport={{ once: false }}
                                                className="h-full rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-secondary)]"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Tools & Technologies */}
                    <ScrollReveal direction="right">
                        <div className="glass-card p-8 h-full">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-400 flex items-center justify-center text-lg">
                                    🛠️
                                </div>
                                <h3 className="text-xl font-semibold text-white">
                                    Tools & Technologies
                                </h3>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {toolsSkills.map((skill, i) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05, y: -4 }}
                                        className="flex flex-col items-center gap-3 p-5 rounded-xl bg-white/5 border border-white/5 hover:border-[var(--color-accent)]/30 transition-all cursor-default"
                                    >
                                        <span className="text-3xl">{skill.icon}</span>
                                        <span className="text-sm font-medium text-[var(--color-foreground)] text-center">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
