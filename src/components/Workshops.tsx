"use client";

import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

export default function Workshops() {
    return (
        <section className="py-24 relative">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <SectionHeading
                    title="Workshops & Continuous Learning"
                    subtitle="Hands-on experiences that shape engineering excellence"
                />

                <ScrollReveal>
                    <motion.div
                        whileHover={{ y: -4 }}
                        className="glass-card overflow-hidden max-w-4xl mx-auto"
                    >
                        <div className="h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-[var(--color-accent)]" />

                        <div className="p-8 md:p-10">
                            <div className="flex flex-col md:flex-row gap-8">
                                {/* Left - Main Info */}
                                <div className="flex-1 space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-3xl shrink-0">
                                            🚀
                                        </div>
                                        <div>
                                            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                                                Workshop — 2024
                                            </span>
                                            <h3 className="text-2xl font-bold text-white mt-1">
                                                Model Rocketry Workshop
                                            </h3>
                                            <p className="text-[var(--color-muted)] text-sm mt-1">
                                                IIST Trivandrum (Indian Institute of Space Science and Technology)
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-[var(--color-foreground)]/80 leading-relaxed">
                                        Participated in an intensive hands-on workshop at one of India&apos;s
                                        premier space institutions, gaining practical experience in rocket
                                        design, construction, and launch. This immersive experience
                                        strengthened my understanding of core engineering principles.
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            "Aerodynamics",
                                            "Propulsion Systems",
                                            "Teamwork",
                                            "Hands-on Engineering",
                                            "Rocket Design",
                                        ].map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1.5 text-xs font-medium rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Right - Key Takeaways */}
                                <div className="md:w-56 shrink-0">
                                    <h4 className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-4">
                                        Key Takeaways
                                    </h4>
                                    <div className="space-y-3">
                                        {[
                                            { icon: "🔬", label: "Aerodynamics fundamentals" },
                                            { icon: "🔥", label: "Propulsion mechanics" },
                                            { icon: "🤝", label: "Team collaboration" },
                                            { icon: "🛠️", label: "Hands-on fabrication" },
                                        ].map((item, i) => (
                                            <motion.div
                                                key={item.label}
                                                initial={{ opacity: 0, x: 20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 + i * 0.1 }}
                                                viewport={{ once: false }}
                                                className="flex items-center gap-3 p-3 rounded-lg bg-white/5"
                                            >
                                                <span className="text-xl">{item.icon}</span>
                                                <span className="text-sm text-[var(--color-foreground)]/80">
                                                    {item.label}
                                                </span>
                                            </motion.div>
                                        ))}
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
