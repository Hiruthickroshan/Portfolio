"use client";

import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const achievements = [
    {
        title: "National-Level Champion",
        subtitle: "Rope Skipping",
        description:
            "Achieved championship glory on the national stage in competitive rope skipping, demonstrating precision, physical agility, and mental tenacity.",
        icon: "ri-trophy-fill",
        color: "text-amber-400",
        badgeBg: "bg-amber-400/10 border-amber-400/20",
    },
    {
        title: "SGFI Gold Medalist",
        subtitle: "School Games Federation of India",
        description:
            "Earned the Gold Medal at the prestigious SGFI national games, competing against top-tier state athletes across India.",
        icon: "ri-medal-fill",
        color: "text-yellow-400",
        badgeBg: "bg-yellow-400/10 border-yellow-400/20",
    },
    {
        title: "Team Captain",
        subtitle: "National Rope Skipping Squad",
        description:
            "Captained the national squad, steering teammates through demanding practice regimens, coordination drills, and high-stakes competitions.",
        icon: "ri-vip-crown-fill",
        color: "text-[var(--first-color)]",
        badgeBg: "bg-[var(--first-color)]/10 border-[var(--first-color)]/20",
    },
];

export default function Leadership() {
    return (
        <section id="experience" className="py-24 relative">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <SectionHeading
                    subtitle="HONORS & LEADERSHIP"
                    title="Athletic & Leadership Milestones"
                />

                <div className="grid md:grid-cols-3 gap-8">
                    {achievements.map((item, idx) => (
                        <ScrollReveal key={item.title} delay={idx * 0.15}>
                            <motion.div
                                whileHover={{ y: -8 }}
                                className="bedim-card p-8 h-full flex flex-col items-center text-center justify-between group"
                            >
                                <div className="space-y-4 flex flex-col items-center">
                                    {/* Icon */}
                                    <div
                                        className={`w-20 h-20 rounded-3xl ${item.badgeBg} border flex items-center justify-center text-4xl ${item.color} group-hover:scale-110 transition-transform shadow-lg`}
                                    >
                                        <i className={item.icon} />
                                    </div>

                                    {/* Text */}
                                    <h3 className="font-syne text-xl font-bold text-[var(--fg)]">
                                        {item.title}
                                    </h3>
                                    <span className="text-xs font-semibold text-[var(--first-color)] uppercase tracking-wider block">
                                        {item.subtitle}
                                    </span>
                                    <p className="text-[var(--text-color)] text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="pt-6 w-full border-t border-[var(--border-color)] mt-6">
                                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-color)]">
                                        <i className="ri-award-line text-[var(--first-color)] text-base" />
                                        National Excellence
                                    </span>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Banner */}
                <ScrollReveal delay={0.4}>
                    <div className="mt-12 bedim-card p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-5 text-center md:text-left">
                            <div className="w-16 h-16 rounded-2xl bg-[var(--first-color)]/20 border border-[var(--first-color)]/40 text-[var(--first-color)] flex items-center justify-center text-3xl shrink-0">
                                <i className="ri-fire-fill" />
                            </div>
                            <div>
                                <h4 className="font-syne text-xl sm:text-2xl font-bold text-[var(--fg)]">
                                    Discipline Transferred into Engineering
                                </h4>
                                <p className="text-sm text-[var(--text-color)] mt-1">
                                    The relentless work ethic, focus, and leadership forged on the sports field directly empower my engineering and software problem-solving.
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
