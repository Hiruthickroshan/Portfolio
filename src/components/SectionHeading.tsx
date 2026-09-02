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
            {subtitle && (
                <span className="section-subtitle">
                    {subtitle}
                </span>
            )}
            <h2 className="section-title">
                {title}
            </h2>
            <div
                className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[var(--first-color)] to-[var(--first-color-light)] ${
                    align === "center" ? "mx-auto" : ""
                }`}
            />
        </ScrollReveal>
    );
}
