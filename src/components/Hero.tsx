"use client";

import { motion } from "framer-motion";

const basePath = process.env.NODE_ENV === "production" ? "/Portfolio" : "";

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/Hiruthickroshan",
        icon: "ri-github-fill",
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/hiruthick-roshan-85968a124?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        icon: "ri-linkedin-box-fill",
    },
    {
        name: "Email",
        href: "mailto:hiruthick1947@gmail.com",
        icon: "ri-mail-line",
    },
    {
        name: "Phone",
        href: "tel:+919159257419",
        icon: "ri-phone-line",
    },
];

const keyTech = [
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "C++", icon: "devicon-cplusplus-plain colored" },
    { name: "Java", icon: "devicon-java-plain colored" },
    { name: "Embedded C", icon: "devicon-embeddedc-plain colored" },
    { name: "SQL", icon: "devicon-mysql-plain colored" },
    { name: "Linux", icon: "devicon-linux-plain" },
];

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden"
        >
            {/* Subtle Grid Background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage:
                        "linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />

            <div className="max-w-4xl mx-auto px-6 relative z-10 w-full text-center">
                {/* Status Chip */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[var(--container-color)] border border-[var(--border-color)] text-xs font-semibold text-[var(--first-color)] shadow-sm mb-6"
                >
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--first-color)] animate-ping" />
                    <span>AVAILABLE FOR OPPORTUNITIES</span>
                </motion.div>

                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="space-y-3"
                >
                    <h2 className="text-xl sm:text-2xl font-medium text-[var(--text-color)]">
                        Hello, I&apos;m
                    </h2>
                    <h1 className="font-syne text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-[var(--fg)] leading-[1.08]">
                        Hiruthick<span className="gradient-text">roshan</span>
                    </h1>
                </motion.div>

                {/* Role & Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-6 space-y-3 max-w-2xl mx-auto"
                >
                    <p className="font-syne text-xl sm:text-2xl font-bold text-[var(--first-color)]">
                        Software Developer
                    </p>
                    <p className="text-base sm:text-lg text-[var(--text-color)] leading-relaxed">
                        Electronics &amp; Communication Engineering graduate from{" "}
                        <strong className="text-[var(--fg)] font-semibold">
                            Government College of Engineering, Erode
                        </strong>
                        . Dedicated to developing robust software architectures, Zero-Trust network security solutions, and high-performance databases.
                    </p>
                </motion.div>

                {/* Tech Chips Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="flex flex-wrap items-center justify-center gap-2.5 my-8"
                >
                    {keyTech.map((tech) => (
                        <span
                            key={tech.name}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--container-color)] border border-[var(--border-color)] text-xs font-semibold text-[var(--fg)] shadow-sm"
                        >
                            <i className={`${tech.icon} text-sm`} />
                            <span>{tech.name}</span>
                        </span>
                    ))}
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <a
                        href={`${basePath}/Hiruthickroshan_Resume.pdf`}
                        download
                        className="btn-primary group"
                    >
                        <span>Download CV</span>
                        <i className="ri-download-2-line text-lg group-hover:translate-y-0.5 transition-transform" />
                    </a>

                    <a
                        href="#projects"
                        className="btn-secondary group"
                    >
                        <span>View Projects</span>
                        <i className="ri-code-s-slash-line text-lg text-[var(--first-color)]" />
                    </a>

                    <a
                        href="#contact"
                        className="btn-secondary group"
                    >
                        <span>Contact Me</span>
                        <i className="ri-send-plane-line text-lg text-[var(--first-color)]" />
                    </a>
                </motion.div>

                {/* Social Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="flex items-center justify-center gap-3 mt-10"
                >
                    <span className="text-xs uppercase tracking-widest text-[var(--text-color)] mr-2 font-semibold">
                        Connect:
                    </span>
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target={social.href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="social-badge"
                            aria-label={social.name}
                        >
                            <i className={social.icon} />
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
