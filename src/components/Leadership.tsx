"use client";

import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const achievements = [
    {
        icon: "🏆",
        title: "National-Level Champion",
        subtitle: "Rope Skipping",
        description:
            "Achieved championship status at the national level in competitive rope skipping, demonstrating exceptional athletic skill and dedication.",
        color: "from-amber-500 to-yellow-400",
        glow: "amber",
    },
    {
        icon: "🥇",
        title: "SGFI Gold Medalist",
        subtitle: "School Games Federation of India",
        description:
            "Won the prestigious Gold Medal at the SGFI games, competing against top athletes from across the nation.",
        color: "from-yellow-500 to-orange-400",
        glow: "yellow",
    },
    {
        icon: "👨‍✈️",
        title: "Team Captain",
        subtitle: "National Rope Skipping Team",
        description:
            "Led the national rope skipping team as Captain, demonstrating leadership, strategic planning, and the ability to inspire and coordinate team members.",
        color: "from-[var(--color-accent)] to-[var(--color-accent-secondary)]",
        glow: "indigo",
    },
];

export default function Leadership() {
    return (
        <section id="experience" className="py-24 relative">
            {/* Background accents */}
            <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-[var(--color-accent)]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <SectionHeading
                    title="Leadership & Achievements"
                    subtitle="Athletic excellence meets leadership on the national stage"
                />

                <div className="grid md:grid-cols-3 gap-6">
                    {achievements.map((item, i) => (
                        <ScrollReveal key={item.title} delay={i * 0.15}>
                            <motion.div
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="glass-card p-8 h-full flex flex-col items-center text-center group relative overflow-hidden"
                            >
                                {/* Glow effect on hover */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-b ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                />

                                {/* Icon */}
                                <motion.div
                                    whileHover={{ rotate: [0, -10, 10, 0] }}
                                    transition={{ duration: 0.5 }}
                                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-4xl mb-6 shadow-lg`}
                                >
                                    {item.icon}
                                </motion.div>

                                <h3 className="text-xl font-bold text-white mb-1 relative z-10">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-[var(--color-accent-light)] font-medium mb-4 relative z-10">
                                    {item.subtitle}
                                </p>
                                <p className="text-sm text-[var(--color-muted)] leading-relaxed relative z-10">
                                    {item.description}
                                </p>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Athletics highlight banner */}
                <ScrollReveal delay={0.5}>
                    <div className="mt-12 glass-card p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="text-5xl">🏅</div>
                            <div>
                                <h3 className="text-xl font-bold text-white">
                                    National-Level Athlete
                                </h3>
                                <p className="text-[var(--color-muted)]">
                                    Discipline, focus, and perseverance — from the sports field to
                                    engineering
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="text-center">
                                <p className="text-3xl font-bold gradient-text">National</p>
                                <p className="text-xs text-[var(--color-muted)]">Level</p>
                            </div>
                            <div className="w-px h-12 bg-[var(--color-border)]" />
                            <div className="text-center">
                                <p className="text-3xl font-bold gradient-text">Gold</p>
                                <p className="text-xs text-[var(--color-muted)]">SGFI Medal</p>
                            </div>
                            <div className="w-px h-12 bg-[var(--color-border)]" />
                            <div className="text-center">
                                <p className="text-3xl font-bold gradient-text">Captain</p>
                                <p className="text-xs text-[var(--color-muted)]">Team Lead</p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
