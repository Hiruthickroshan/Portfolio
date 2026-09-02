"use client";

const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

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

export default function Footer() {
    return (
        <footer className="pt-16 pb-12 border-t border-[var(--border-color)] relative bg-[var(--container-color)]">
            <div className="max-w-6xl mx-auto px-6 text-center space-y-8">
                {/* Brand Logo */}
                <div>
                    <a
                        href="#home"
                        className="font-syne text-3xl font-extrabold tracking-tight text-[var(--fg)] inline-flex items-center gap-1.5"
                    >
                        <span>Hiruthick</span>
                        <span className="w-2.5 h-2.5 rounded-full bg-[var(--first-color)]" />
                    </a>
                    <p className="text-xs text-[var(--text-color)] mt-2 font-medium">
                        Software Developer • B.E. ECE Graduate • GCE Erode
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap items-center justify-center gap-6">
                    {footerLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-[var(--text-color)] hover:text-[var(--first-color)] transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Social Badges */}
                <div className="flex items-center justify-center gap-3">
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
                </div>

                {/* Divider & Copyright */}
                <div className="pt-6 border-t border-[var(--border-color)]">
                    <p className="text-xs text-[var(--text-color)] font-medium">
                        © {new Date().getFullYear()}{" "}
                        <span className="text-[var(--fg)] font-semibold">
                            Hiruthickroshan E
                        </span>
                        . All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
