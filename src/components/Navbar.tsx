"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    setScrolled(scrollY > 30);

                    const sections = navLinks.map((l) => l.href.slice(1));
                    for (let i = sections.length - 1; i >= 0; i--) {
                        const el = document.getElementById(sections[i]);
                        if (el) {
                            const top = el.offsetTop;
                            if (scrollY >= top - 200) {
                                setActiveSection(sections[i]);
                                break;
                            }
                        }
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
                    scrolled
                        ? "bg-[var(--bg)]/95 backdrop-blur-md border-b border-[var(--border-color)] shadow-sm"
                        : "bg-transparent"
                }`}
            >
                <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#home"
                        className="font-syne text-2xl font-bold tracking-tight text-[var(--fg)] group flex items-center gap-1.5"
                    >
                        <span>Hiruthick</span>
                        <span className="w-2 h-2 rounded-full bg-[var(--first-color)] group-hover:scale-150 transition-transform" />
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-[var(--container-color)]/80 border border-[var(--border-color)] backdrop-blur-sm">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.slice(1);
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                                        isActive
                                            ? "text-[var(--fg)] font-semibold"
                                            : "text-[var(--text-color)] hover:text-[var(--fg)]"
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNavIndicator"
                                            className="absolute inset-0 rounded-full bg-[var(--first-color)]/15 border border-[var(--first-color)]/30"
                                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{link.label}</span>
                                </a>
                            );
                        })}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <ThemeToggle />
                        <a
                            href="#contact"
                            className="btn-primary py-2.5 px-6 text-sm"
                        >
                            <span>Let&apos;s Talk</span>
                            <i className="ri-arrow-right-up-line text-lg" />
                        </a>
                    </div>

                    {/* Mobile Toggle & Theme */}
                    <div className="flex md:hidden items-center gap-3">
                        <ThemeToggle />
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="w-10 h-10 rounded-full bg-[var(--container-color)] border border-[var(--border-color)] flex items-center justify-center text-[var(--fg)] text-xl"
                            aria-label="Toggle menu"
                        >
                            <i className={mobileOpen ? "ri-close-line" : "ri-menu-4-line"} />
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-[var(--bg)]/98 backdrop-blur-xl pt-28 px-6 md:hidden flex flex-col justify-between pb-12"
                    >
                        <div className="flex flex-col gap-3">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.04 }}
                                    onClick={() => setMobileOpen(false)}
                                    className={`px-6 py-3.5 rounded-2xl text-lg font-medium transition-colors ${
                                        activeSection === link.href.slice(1)
                                            ? "text-[var(--fg)] font-bold bg-[var(--first-color)]/15 border border-[var(--first-color)]/30"
                                            : "text-[var(--text-color)] hover:text-[var(--fg)] bg-[var(--container-color)]"
                                    }`}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </div>

                        <div className="pt-6">
                            <a
                                href="#contact"
                                onClick={() => setMobileOpen(false)}
                                className="btn-primary w-full justify-center text-center py-3.5 text-base"
                            >
                                <span>Get in Touch</span>
                                <i className="ri-send-plane-fill" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
