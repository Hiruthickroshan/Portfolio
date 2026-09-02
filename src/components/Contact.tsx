"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const contactCards = [
    {
        title: "Email",
        value: "hiruthick1947@gmail.com",
        actionText: "Send an email",
        href: "mailto:hiruthick1947@gmail.com",
        icon: "ri-mail-send-line",
    },
    {
        title: "Phone / WhatsApp",
        value: "+91 91592 57419",
        actionText: "Call directly",
        href: "tel:+919159257419",
        icon: "ri-phone-line",
    },
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "sent">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoLink = `mailto:hiruthick1947@gmail.com?subject=${encodeURIComponent(
            formData.subject || "Software Developer Opportunity / Inquiry"
        )}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoLink;
        setStatus("sent");
        setTimeout(() => setStatus("idle"), 5000);
    };

    return (
        <section id="contact" className="py-24 relative">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <SectionHeading
                    subtitle="GET IN TOUCH"
                    title="Contact Me"
                />

                <div className="grid lg:grid-cols-12 gap-10 items-start">
                    
                    {/* Left Column: Contact Cards (5 cols) */}
                    <div className="lg:col-span-5 space-y-4">
                        <ScrollReveal direction="left">
                            <h3 className="font-syne text-xl font-bold text-[var(--fg)] mb-6 text-center lg:text-left">
                                Direct Channels
                            </h3>
                            <div className="space-y-4">
                                {contactCards.map((card, i) => (
                                    <div
                                        key={i}
                                        className="bedim-card p-6 flex flex-col items-center text-center group"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-[var(--container-color-light)] border border-[var(--border-color)] text-[var(--first-color)] flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform">
                                            <i className={card.icon} />
                                        </div>
                                        <h4 className="font-syne text-base font-bold text-[var(--fg)]">
                                            {card.title}
                                        </h4>
                                        <p className="text-xs text-[var(--text-color)] mt-1 font-medium">
                                            {card.value}
                                        </p>
                                        <a
                                            href={card.href}
                                            target={card.href.startsWith("http") ? "_blank" : undefined}
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--first-color)] mt-3 group-hover:underline"
                                        >
                                            <span>{card.actionText}</span>
                                            <i className="ri-arrow-right-line" />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Column: Interactive Contact Form (7 cols) */}
                    <div className="lg:col-span-7">
                        <ScrollReveal direction="right">
                            <div className="bedim-card p-8 sm:p-10">
                                <h3 className="font-syne text-xl sm:text-2xl font-bold text-[var(--fg)] mb-2">
                                    Send me a message
                                </h3>
                                <p className="text-sm text-[var(--text-color)] mb-8">
                                    Have a software role, project proposition, or question? Feel free to reach out below.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Name input */}
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-[var(--text-color)]">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Insert your name"
                                            className="w-full px-5 py-3.5 rounded-2xl bg-[var(--container-color)] border border-[var(--border-color)] text-[var(--fg)] placeholder:text-[var(--text-color)]/50 focus:outline-none focus:border-[var(--first-color)] transition-colors text-sm"
                                        />
                                    </div>

                                    {/* Email input */}
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-[var(--text-color)]">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="Insert your email"
                                            className="w-full px-5 py-3.5 rounded-2xl bg-[var(--container-color)] border border-[var(--border-color)] text-[var(--fg)] placeholder:text-[var(--text-color)]/50 focus:outline-none focus:border-[var(--first-color)] transition-colors text-sm"
                                        />
                                    </div>

                                    {/* Subject input */}
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-[var(--text-color)]">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            placeholder="Software Developer Opportunity"
                                            className="w-full px-5 py-3.5 rounded-2xl bg-[var(--container-color)] border border-[var(--border-color)] text-[var(--fg)] placeholder:text-[var(--text-color)]/50 focus:outline-none focus:border-[var(--first-color)] transition-colors text-sm"
                                        />
                                    </div>

                                    {/* Message input */}
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-[var(--text-color)]">
                                            Message
                                        </label>
                                        <textarea
                                            required
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="Write your message or project requirements..."
                                            className="w-full px-5 py-3.5 rounded-2xl bg-[var(--container-color)] border border-[var(--border-color)] text-[var(--fg)] placeholder:text-[var(--text-color)]/50 focus:outline-none focus:border-[var(--first-color)] transition-colors text-sm resize-none"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div>
                                        <button
                                            type="submit"
                                            className="btn-primary w-full sm:w-auto justify-center"
                                        >
                                            <span>Send Message</span>
                                            <i className="ri-send-plane-fill text-lg" />
                                        </button>
                                    </div>

                                    {status === "sent" && (
                                        <p className="text-xs text-[var(--first-color)] font-semibold mt-2">
                                            ✓ Opening your email client to send the message!
                                        </p>
                                    )}
                                </form>
                            </div>
                        </ScrollReveal>
                    </div>

                </div>
            </div>
        </section>
    );
}
