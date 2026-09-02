"use client";

import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

interface SkillItem {
    name: string;
    icon: string;
}

interface SkillCategory {
    title: string;
    description: string;
    iconClass: string;
    skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
    {
        title: "Programming Languages",
        description:
            "Core languages for software logic, algorithm formulation, and object-oriented development.",
        iconClass: "ri-code-box-line",
        skills: [
            { name: "Python", icon: "devicon-python-plain colored" },
            { name: "C++", icon: "devicon-cplusplus-plain colored" },
            { name: "Java", icon: "devicon-java-plain colored" },
        ],
    },
    {
        title: "Engineering & Web",
        description:
            "Embedded micro-controllers, relational database architectures, and web technologies.",
        iconClass: "ri-cpu-line",
        skills: [
            { name: "Embedded C", icon: "devicon-embeddedc-plain colored" },
            { name: "SQL / DBMS", icon: "devicon-mysql-plain colored" },
            { name: "HTML5 & CSS3", icon: "devicon-html5-plain colored" },
            { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        ],
    },
    {
        title: "Tools & Environment",
        description:
            "Version control workflows, UNIX shell environments, and development ecosystems.",
        iconClass: "ri-terminal-box-line",
        skills: [
            { name: "Git & GitHub", icon: "devicon-github-original" },
            { name: "Linux / Bash", icon: "devicon-linux-plain" },
            { name: "VS Code", icon: "devicon-vscode-plain colored" },
            { name: "Wireshark", icon: "ri-radar-line" },
        ],
    },
    {
        title: "Data & Analysis",
        description:
            "Technical computing, dataset transformation, and comprehensive engineering documentation.",
        iconClass: "ri-bar-chart-2-line",
        skills: [
            { name: "Pandas", icon: "devicon-pandas-plain colored" },
            { name: "MATLAB", icon: "devicon-matlab-plain colored" },
            { name: "Tech Writing", icon: "ri-file-text-line" },
            { name: "Scapy", icon: "ri-shield-keyhole-line" },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <SectionHeading
                    subtitle="MY ABILITIES"
                    title="Skills & Expertise"
                />

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((cat, idx) => (
                        <ScrollReveal key={cat.title} delay={idx * 0.1}>
                            <motion.div
                                whileHover={{ y: -6 }}
                                className="bedim-card p-8 h-full flex flex-col justify-between group"
                            >
                                <div>
                                    {/* Card Header with Icon */}
                                    <div className="flex items-center gap-4 mb-5">
                                        <div className="w-14 h-14 rounded-2xl bg-[var(--container-color-light)] border border-[var(--border-color)] group-hover:border-[var(--first-color)] text-[var(--first-color)] flex items-center justify-center text-2xl transition-all group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[var(--first-color-glow)]">
                                            <i className={cat.iconClass} />
                                        </div>
                                        <div>
                                            <h3 className="font-syne text-xl font-bold text-[var(--fg)]">
                                                {cat.title}
                                            </h3>
                                            <span className="text-xs text-[var(--first-color)] font-semibold uppercase tracking-wider">
                                                Domain #{idx + 1}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-[var(--text-color)] text-sm leading-relaxed mb-6">
                                        {cat.description}
                                    </p>
                                </div>

                                {/* Skills Chips */}
                                <div className="flex flex-wrap gap-2.5 pt-4 border-t border-[var(--border-color)]">
                                    {cat.skills.map((skill, sIdx) => (
                                        <div
                                            key={sIdx}
                                            className="skill-chip"
                                        >
                                            <i className={`${skill.icon} text-base`} />
                                            <span>{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
