"use client";

import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

interface Skill {
    name: string;
    icon: string; // DevIcons class name
}

interface SkillCategory {
    title: string;
    subtitle: string;
    icon: string;
    gradientFrom: string;
    gradientTo: string;
    skills: Skill[];
}

const categories: SkillCategory[] = [
    {
        title: "Core Programming",
        subtitle: "Languages I build with",
        icon: "devicon-code-plain",
        gradientFrom: "#0ea5e9",
        gradientTo: "#06b6d4",
        skills: [
            { name: "Python", icon: "devicon-python-plain colored" },
            { name: "C++", icon: "devicon-cplusplus-plain colored" },
            { name: "Java", icon: "devicon-java-plain colored" },
        ],
    },
    {
        title: "Professional Tools",
        subtitle: "Workflow & environment",
        icon: "devicon-git-plain",
        gradientFrom: "#8b5cf6",
        gradientTo: "#a78bfa",
        skills: [
            { name: "Git / GitHub", icon: "devicon-github-original" },
            { name: "Linux (Shell)", icon: "devicon-linux-plain" },
            { name: "VS Code", icon: "devicon-vscode-plain colored" },
        ],
    },
    {
        title: "Engineering & Web",
        subtitle: "Hardware to full-stack",
        icon: "devicon-embeddedc-plain",
        gradientFrom: "#f59e0b",
        gradientTo: "#f97316",
        skills: [
            { name: "Embedded C", icon: "devicon-embeddedc-plain colored" },
            { name: "HTML5 / CSS3", icon: "devicon-html5-plain colored" },
            { name: "SQL", icon: "devicon-mysql-plain colored" },
        ],
    },
];

const additionalSkills: Skill[] = [
    { name: "Technical Documentation", icon: "devicon-readthedocs-original" },
    { name: "Data Analysis (Pandas)", icon: "devicon-pandas-plain colored" },
    { name: "MATLAB", icon: "devicon-matlab-plain colored" },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative">
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[var(--color-accent-secondary)]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <SectionHeading
                    title="Technical Skills"
                    subtitle="Building a strong foundation in programming, tools, and engineering"
                />

                {/* Three Category Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                    {categories.map((cat, catIdx) => (
                        <ScrollReveal key={cat.title} delay={catIdx * 0.15}>
                            <motion.div
                                whileHover={{ y: -6 }}
                                className="glass-card overflow-hidden h-full flex flex-col"
                            >
                                {/* Card header gradient bar */}
                                <div
                                    className="h-1"
                                    style={{
                                        background: `linear-gradient(90deg, ${cat.gradientFrom}, ${cat.gradientTo})`,
                                    }}
                                />

                                <div className="p-7 flex flex-col flex-1">
                                    {/* Header */}
                                    <div className="flex items-center gap-3 mb-2">
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-lg"
                                            style={{
                                                background: `linear-gradient(135deg, ${cat.gradientFrom}, ${cat.gradientTo})`,
                                            }}
                                        >
                                            <i className={cat.icon} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white leading-tight">
                                                {cat.title}
                                            </h3>
                                            <p className="text-xs text-[var(--color-muted)]">
                                                {cat.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Skills list */}
                                    <div className="mt-5 space-y-3 flex-1">
                                        {cat.skills.map((skill, i) => (
                                            <motion.div
                                                key={skill.name}
                                                initial={{ opacity: 0, x: -16 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    delay: 0.2 + i * 0.1,
                                                    duration: 0.4,
                                                }}
                                                viewport={{ once: false }}
                                                className="skill-badge"
                                            >
                                                <i
                                                    className={skill.icon}
                                                    style={{ fontSize: "1.5rem" }}
                                                />
                                                <span>{skill.name}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Additional Skills Row */}
                <ScrollReveal delay={0.3}>
                    <div className="glass-card p-7">
                        <h3 className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-5">
                            Also proficient in
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {additionalSkills.map((skill, i) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.85 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        delay: 0.1 + i * 0.08,
                                        duration: 0.35,
                                    }}
                                    viewport={{ once: false }}
                                    className="skill-badge"
                                >
                                    <i
                                        className={skill.icon}
                                        style={{ fontSize: "1.5rem" }}
                                    />
                                    <span>{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
