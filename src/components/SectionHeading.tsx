"use client";

import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    align?: "left" | "center";
}

export default function SectionHeading({
    title,
    subtitle,
    align = "center",
}: SectionHeadingProps) {
    return (
        <ScrollReveal
            className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">{title}</span>
            </h2>
            {subtitle && (
                <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
            <div
                className={`mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-secondary)] ${align === "center" ? "mx-auto" : ""
                    }`}
            />
        </ScrollReveal>
    );
}
