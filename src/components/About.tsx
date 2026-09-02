"use client";

import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const personalInfo = [
    { label: "Degree", value: "B.E. ECE (Graduate)" },
    { label: "Institution", value: "GCE, Erode" },
    { label: "Role", value: "Software Developer" },
    { label: "Languages", value: "English, Tamil" },
    { label: "Email", value: "hiruthick1947@gmail.com" },
    { label: "Sports", value: "National Gold Medalist" },
];

const softSkills = [
    {
        name: "Adaptability & Rapid Learning",
        desc: "Quick to master new frameworks, protocols, and technical environments.",
        icon: "ri-refresh-line",
    },
    {
        name: "Self-Driven & Goal Oriented",
        desc: "Persistent approach to problem-solving and software execution.",
        icon: "ri-flashlight-line",
    },
    {
        name: "Time & Priority Management",
        desc: "Disciplined task organization to deliver quality code on schedule.",
        icon: "ri-time-line",
    },
    {
        name: "Assertiveness & Team Leadership",
        desc: "Clear communication and leadership honed as a national team captain.",
        icon: "ri-focus-3-line",
    },
];

export default function About() {
    return (
        <section id="about" className="py-24 relative">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <SectionHeading
                    subtitle="MY BIOGRAPHY"
                    title="About Me"
                />

                <div className="grid lg:grid-cols-12 gap-10 items-start">
                    
                    {/* Left Column: Bio & Info Card (6 cols) */}
                    <div className="lg:col-span-6 space-y-6">
                        <ScrollReveal direction="left">
                            <div className="bedim-card p-8 sm:p-10 space-y-6">
                                <div className="space-y-4">
                                    <h3 className="font-syne text-2xl sm:text-3xl font-bold text-[var(--fg)]">
                                        Engineering Mind with an Athlete&apos;s Grit
                                    </h3>
                                    <p className="text-[var(--text-color)] text-base leading-relaxed">
                                        I am an <strong className="text-[var(--fg)]">Electronics and Communication Engineering graduate</strong> from <strong className="text-[var(--first-color)]">Government College of Engineering, Erode</strong>. I build reliable software systems, Zero-Trust network security architectures, and scalable data solutions.
                                    </p>
                                    <p className="text-[var(--text-color)] text-base leading-relaxed">
                                        Beyond writing clean code, I am a <strong className="text-[var(--fg)]">National-Level Rope Skipping Champion and SGFI Gold Medalist</strong>. Captaining national squads instilled in me intense discipline, resilience under pressure, and teamwork.
                                    </p>
                                </div>

                                {/* Personal Information Grid */}
                                <div className="pt-4 border-t border-[var(--border-color)] grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {personalInfo.map((info, idx) => (
                                        <div key={idx} className="flex flex-col">
                                            <span className="text-xs uppercase tracking-wider text-[var(--text-color)] font-semibold">
                                                {info.label}:
                                            </span>
                                            <span className="text-sm font-medium text-[var(--fg)] mt-0.5">
                                                {info.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Column: Key Strengths & Traits (6 cols) */}
                    <div className="lg:col-span-6 space-y-6">
                        <ScrollReveal direction="right">
                            <div className="bedim-card p-8 sm:p-10 space-y-6">
                                <div>
                                    <span className="section-subtitle">WORK ETHIC &amp; TRAITS</span>
                                    <h3 className="font-syne text-xl sm:text-2xl font-bold text-[var(--fg)]">
                                        Core Strengths
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    {softSkills.map((skill, index) => (
                                        <div
                                            key={index}
                                            className="p-4 rounded-xl bg-[var(--container-color-light)] border border-[var(--border-color)] flex items-start gap-4 hover:border-[var(--first-color)]/40 transition-colors"
                                        >
                                            <div className="w-10 h-10 rounded-lg bg-[var(--first-color)]/10 text-[var(--first-color)] flex items-center justify-center text-xl shrink-0 mt-0.5">
                                                <i className={skill.icon} />
                                            </div>
                                            <div className="min-w-0">
                                                <h4 className="font-syne text-sm font-bold text-[var(--fg)]">
                                                    {skill.name}
                                                </h4>
                                                <p className="text-xs text-[var(--text-color)] mt-1 leading-relaxed">
                                                    {skill.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Call to action within card */}
                                <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                                    <span className="text-xs text-[var(--text-color)] font-medium">
                                        Open for full-time developer roles
                                    </span>
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--first-color)] hover:underline uppercase tracking-wider"
                                    >
                                        <span>Get in touch</span>
                                        <i className="ri-arrow-right-line" />
                                    </a>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                </div>
            </div>
        </section>
    );
}
