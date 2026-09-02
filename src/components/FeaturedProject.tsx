"use client";

import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const techStack = [
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "Flask", icon: "devicon-flask-original" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "Scapy", icon: "ri-shield-check-line" },
    { name: "MySQL", icon: "devicon-mysql-plain colored" },
    { name: "Wireshark", icon: "ri-radar-line" },
];

const keyFeatures = [
    "Zero-Trust Verification — continuous validation of upload, download, and request patterns.",
    "Behavior-Based Risk Scoring — computes dynamic risk scores in real-time from network traffic.",
    "Explainable Real-Time Alerts — immediate diagnostic alarms detailing the exact security breach reason.",
    "Quarantine Control — protects network stability with isolated quarantine routing instead of crude drops.",
];

export default function FeaturedProject() {
    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="section-subtitle">FLAGSHIP WORK</span>
                        <h2 className="section-title">Featured Project</h2>
                        <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[var(--first-color)] to-[var(--first-color-light)] mx-auto" />
                    </div>
                </ScrollReveal>

                {/* Main Card */}
                <ScrollReveal>
                    <div className="bedim-card overflow-hidden p-8 sm:p-12">
                        <div className="grid lg:grid-cols-12 gap-10 items-center">
                            
                            {/* Left: Project Details (7 cols) */}
                            <div className="lg:col-span-7 space-y-6">
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="px-3.5 py-1 rounded-full bg-[var(--first-color)]/15 text-[var(--first-color)] text-xs font-bold uppercase tracking-wider border border-[var(--first-color)]/30">
                                        Cybersecurity &amp; Network Systems
                                    </span>
                                    <span className="text-xs font-medium text-[var(--text-color)]">
                                        Zero-Trust Architecture
                                    </span>
                                </div>

                                <h3 className="font-syne text-2xl sm:text-4xl font-extrabold text-[var(--fg)] leading-tight">
                                    Intelligent Secure Network Access Management System
                                </h3>

                                <p className="text-[var(--text-color)] text-base sm:text-lg leading-relaxed">
                                    In shared networks like college campuses, hostels, and modern enterprises, traditional network security trusts devices right after authentication — allowing insider threats and infected devices to roam undetected. We designed a real-time zero-trust access management platform that continually analyzes packet behavior, scores risk dynamically, and quarantines anomalies.
                                </p>

                                {/* Features list */}
                                <div className="space-y-3 pt-2">
                                    <h4 className="font-syne text-sm font-bold text-[var(--fg)] uppercase tracking-wider">
                                        Key Highlights:
                                    </h4>
                                    <ul className="space-y-2.5">
                                        {keyFeatures.map((feat, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-color)]">
                                                <i className="ri-checkbox-circle-fill text-[var(--first-color)] text-base shrink-0 mt-0.5" />
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Stack Tags */}
                                <div className="pt-4 border-t border-[var(--border-color)]">
                                    <h4 className="font-syne text-xs font-bold text-[var(--text-color)] uppercase tracking-wider mb-3">
                                        Technologies Applied:
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {techStack.map((tech) => (
                                            <span
                                                key={tech.name}
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--container-color-light)] border border-[var(--border-color)] text-xs font-medium text-[var(--fg)]"
                                            >
                                                <i className={tech.icon} />
                                                {tech.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right: Interactive Visual Diagram Frame (5 cols) */}
                            <div className="lg:col-span-5 space-y-4">
                                <div className="p-6 rounded-2xl bg-[var(--container-color)] border border-[var(--border-color)] shadow-inner">
                                    <div className="flex items-center justify-between pb-4 border-b border-[var(--border-color)]">
                                        <span className="font-syne text-xs font-bold text-[var(--fg)] uppercase tracking-wider flex items-center gap-2">
                                            <i className="ri-node-tree text-[var(--first-color)] text-base" />
                                            Architecture Workflow
                                        </span>
                                        <span className="text-[10px] text-[var(--first-color)] font-semibold px-2 py-0.5 rounded-full bg-[var(--first-color)]/10">
                                            Live Monitor
                                        </span>
                                    </div>

                                    <div className="space-y-3 pt-4">
                                        {[
                                            { step: "01", title: "Device Connection", desc: "Untrusted initial handshake", icon: "ri-wifi-line", color: "text-sky-400" },
                                            { step: "02", title: "Zero-Trust Engine", desc: "Identity & posture challenge", icon: "ri-shield-keyhole-line", color: "text-[var(--first-color)]" },
                                            { step: "03", title: "Traffic Inspection", desc: "Scapy packet stream analysis", icon: "ri-radar-line", color: "text-cyan-400" },
                                            { step: "04", title: "Risk Scoring", desc: "Behavior anomaly probability", icon: "ri-pulse-line", color: "text-amber-400" },
                                            { step: "05", title: "Action Enforcement", desc: "Pass or Quarantine container", icon: "ri-lock-2-line", color: "text-emerald-400" },
                                        ].map((node, i) => (
                                            <div
                                                key={i}
                                                className="p-3 rounded-xl bg-[var(--bg)]/70 border border-[var(--border-color)] flex items-center gap-3.5 hover:border-[var(--first-color)]/50 transition-colors"
                                            >
                                                <span className="font-syne font-extrabold text-xs text-[var(--text-color)]">
                                                    {node.step}
                                                </span>
                                                <div className={`w-8 h-8 rounded-lg bg-[var(--container-color-light)] flex items-center justify-center ${node.color} text-lg shrink-0`}>
                                                    <i className={node.icon} />
                                                </div>
                                                <div className="min-w-0">
                                                    <h5 className="text-xs font-bold text-[var(--fg)] font-syne">
                                                        {node.title}
                                                    </h5>
                                                    <p className="text-[11px] text-[var(--text-color)] truncate">
                                                        {node.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
