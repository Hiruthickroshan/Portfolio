"use client";

import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const softSkills = [
    { name: "Adaptability", icon: "🔄", color: "from-blue-500 to-cyan-400" },
    { name: "Self-Confidence", icon: "💪", color: "from-amber-500 to-orange-400" },
    { name: "Time Management", icon: "⏱️", color: "from-emerald-500 to-green-400" },
    { name: "Assertiveness", icon: "🎯", color: "from-purple-500 to-pink-400" },
];

export default function About() {
    return (
        <section id="about" className="py-24 relative">
            {/* Background accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--color-accent)]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <SectionHeading
                    title="About Me"
                    subtitle="Driven by curiosity and a passion for engineering excellence"
                />

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Text content */}
                    <ScrollReveal direction="left">
                        <div className="glass-card p-8 space-y-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-secondary)] flex items-center justify-center text-2xl">
                                    👨‍💻
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">
                                        Hiruthickroshan E
                                    </h3>
                                    <p className="text-sm text-[var(--color-muted)]">
                                        ECE Undergraduate
                                    </p>
                                </div>
                            </div>

                            <p className="text-[var(--color-foreground)]/80 leading-relaxed">
                                I am an Electronics and Communication Engineering undergraduate at{" "}
                                <span className="text-[var(--color-accent-light)] font-medium">
                                    Government College of Engineering, Erode
                                </span>
                                . I am driven by the ambition to use my calibre to the fullest to contribute
                                meaningfully to company development and technological innovation.
                            </p>

                            <p className="text-[var(--color-foreground)]/80 leading-relaxed">
                                Beyond academics, I bring a unique blend of technical aptitude and
                                athletic discipline. As a national-level athlete, I&apos;ve learned that
                                excellence requires both precision and perseverance — values I carry
                                into every project and endeavor.
                            </p>

                            {/* Quick stats */}
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="text-center p-4 rounded-xl bg-white/5">
                                    <p className="text-2xl font-bold gradient-text">GCE</p>
                                    <p className="text-xs text-[var(--color-muted)] mt-1">Erode</p>
                                </div>
                                <div className="text-center p-4 rounded-xl bg-white/5">
                                    <p className="text-2xl font-bold gradient-text">ECE</p>
                                    <p className="text-xs text-[var(--color-muted)] mt-1">Branch</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Soft skills */}
                    <ScrollReveal direction="right">
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white mb-6">
                                Interpersonal Skills
                            </h3>
                            {softSkills.map((skill, i) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.15, duration: 0.5 }}
                                    viewport={{ once: false }}
                                    whileHover={{ x: 8 }}
                                    className="glass-card p-5 flex items-center gap-4 cursor-default group"
                                >
                                    <div
                                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform`}
                                    >
                                        {skill.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">{skill.name}</h4>
                                        <div className="mt-2 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "100%" }}
                                                transition={{ delay: 0.3 + i * 0.15, duration: 1 }}
                                                viewport={{ once: false }}
                                                className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
