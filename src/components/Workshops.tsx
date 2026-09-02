"use client";

import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const keyTakeaways = [
    { label: "Aerodynamics & Flight Dynamics", icon: "ri-windy-line" },
    { label: "Solid Propulsion & Staging", icon: "ri-fire-line" },
    { label: "Rocket Airframe Construction", icon: "ri-tools-line" },
    { label: "Collaborative Mission Engineering", icon: "ri-team-line" },
];

export default function Workshops() {
    return (
        <section className="py-16 relative">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <SectionHeading
                    subtitle="CONTINUOUS LEARNING"
                    title="Workshops & Space Tech"
                />

                <ScrollReveal>
                    <motion.div
                        whileHover={{ y: -4 }}
                        className="bedim-card p-8 sm:p-12 max-w-5xl mx-auto"
                    >
                        <div className="grid lg:grid-cols-12 gap-8 items-center">
                            {/* Left Column (7 cols) */}
                            <div className="lg:col-span-7 space-y-5">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-[var(--first-color)]/20 border border-cyan-500/30 text-cyan-400 flex items-center justify-center text-3xl">
                                        <i className="ri-rocket-2-line" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                                                Space Engineering Workshop
                                            </span>
                                            <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--container-color-light)] text-[var(--text-color)] font-semibold">
                                                IIST Trivandrum
                                            </span>
                                        </div>
                                        <h3 className="font-syne text-2xl sm:text-3xl font-bold text-[var(--fg)] mt-1">
                                            Model Rocketry Workshop
                                        </h3>
                                    </div>
                                </div>

                                <p className="text-[var(--text-color)] text-base leading-relaxed">
                                    Attended an intensive hands-on technical workshop at the <strong className="text-[var(--fg)]">Indian Institute of Space Science and Technology (IIST)</strong>, Trivandrum. Engaged directly in model rocket aerodynamics calculation, payload balancing, structural fabrication, and live propulsion launch testing.
                                </p>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {["Aerodynamics", "Solid Propulsion", "Airframe Fabrication", "Telemetry", "Team Synergy"].map((item) => (
                                        <span
                                            key={item}
                                            className="px-3 py-1 rounded-full bg-[var(--container-color-light)] border border-[var(--border-color)] text-xs font-medium text-[var(--fg)]"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Right Column: Takeaways Grid (5 cols) */}
                            <div className="lg:col-span-5 space-y-3 bg-[var(--container-color-light)]/50 p-6 rounded-2xl border border-[var(--border-color)]">
                                <h4 className="font-syne text-xs font-bold text-[var(--text-color)] uppercase tracking-wider mb-2">
                                    Key Takeaways &amp; Learnings:
                                </h4>
                                {keyTakeaways.map((takeaway, i) => (
                                    <div
                                        key={i}
                                        className="p-3 rounded-xl bg-[var(--bg)]/80 border border-[var(--border-color)] flex items-center gap-3"
                                    >
                                        <i className={`${takeaway.icon} text-cyan-400 text-lg`} />
                                        <span className="text-xs font-medium text-[var(--fg)]">
                                            {takeaway.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </ScrollReveal>
            </div>
        </section>
    );
}
