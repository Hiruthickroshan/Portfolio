"use client";

import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

interface GitHubRepo {
    name: string;
    description: string | null;
    html_url: string;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    topics: string[];
}

interface GitHubUser {
    public_repos: number;
    followers: number;
    following: number;
    avatar_url: string;
    bio: string | null;
}

const GITHUB_USERNAME = "Hiruthickroshan";

const languageColors: Record<string, string> = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    Python: "#3572A5",
    Java: "#b07219",
    C: "#555555",
    "C++": "#f34b7d",
    HTML: "#e34c26",
    CSS: "#563d7c",
    SQL: "#e38c00",
};

export default function OpenSource() {
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [user, setUser] = useState<GitHubUser | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchGitHub() {
            try {
                const [userRes, reposRes] = await Promise.all([
                    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
                    fetch(
                        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6&type=owner`
                    ),
                ]);

                if (userRes.ok) {
                    const userData = await userRes.json();
                    setUser(userData);
                }

                if (reposRes.ok) {
                    const reposData = await reposRes.json();
                    setRepos(reposData);
                }
            } catch {
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchGitHub();
    }, []);

    // Compute language stats from repos
    const languageStats = repos.reduce<Record<string, number>>((acc, repo) => {
        if (repo.language) {
            acc[repo.language] = (acc[repo.language] || 0) + 1;
        }
        return acc;
    }, {});

    const totalLangs = Object.values(languageStats).reduce((a, b) => a + b, 0);

    return (
        <section className="py-24 relative">
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[var(--color-accent)]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <SectionHeading
                    title="Open Source"
                    subtitle="My contributions and activity on GitHub"
                />

                {/* GitHub Profile Card */}
                <ScrollReveal>
                    <div className="glass-card p-8 mb-8 max-w-4xl mx-auto">
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            {/* Avatar */}
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-secondary)] p-0.5 shrink-0">
                                <div className="w-full h-full rounded-full bg-[var(--color-surface)] flex items-center justify-center overflow-hidden">
                                    {user?.avatar_url ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img
                                            src={user.avatar_url}
                                            alt="GitHub Avatar"
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    ) : (
                                        <svg
                                            className="w-10 h-10 text-[var(--color-muted)]"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    )}
                                </div>
                            </div>

                            <div className="flex-1 text-center sm:text-left">
                                <h3 className="text-xl font-bold text-white">
                                    @{GITHUB_USERNAME}
                                </h3>
                                {user?.bio && (
                                    <p className="text-sm text-[var(--color-muted)] mt-1">
                                        {user.bio}
                                    </p>
                                )}
                                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-3">
                                    <span className="text-sm text-[var(--color-foreground)]/70">
                                        <span className="font-semibold text-white">
                                            {user?.public_repos ?? 0}
                                        </span>{" "}
                                        repos
                                    </span>
                                    <span className="text-sm text-[var(--color-foreground)]/70">
                                        <span className="font-semibold text-white">
                                            {user?.followers ?? 0}
                                        </span>{" "}
                                        followers
                                    </span>
                                    <span className="text-sm text-[var(--color-foreground)]/70">
                                        <span className="font-semibold text-white">
                                            {user?.following ?? 0}
                                        </span>{" "}
                                        following
                                    </span>
                                </div>
                            </div>

                            <a
                                href={`https://github.com/${GITHUB_USERNAME}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-2.5 rounded-full bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors"
                            >
                                View Profile →
                            </a>
                        </div>

                        {/* Language bar */}
                        {totalLangs > 0 && (
                            <div className="mt-6">
                                <div className="flex h-2.5 rounded-full overflow-hidden">
                                    {Object.entries(languageStats).map(([lang, count]) => (
                                        <div
                                            key={lang}
                                            className="h-full transition-all duration-500"
                                            style={{
                                                width: `${(count / totalLangs) * 100}%`,
                                                backgroundColor:
                                                    languageColors[lang] || "var(--color-accent)",
                                            }}
                                            title={`${lang}: ${Math.round((count / totalLangs) * 100)}%`}
                                        />
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-4 mt-3">
                                    {Object.entries(languageStats).map(([lang, count]) => (
                                        <div key={lang} className="flex items-center gap-1.5">
                                            <span
                                                className="w-3 h-3 rounded-full"
                                                style={{
                                                    backgroundColor:
                                                        languageColors[lang] || "var(--color-accent)",
                                                }}
                                            />
                                            <span className="text-xs text-[var(--color-muted)]">
                                                {lang} ({Math.round((count / totalLangs) * 100)}%)
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </ScrollReveal>

                {/* Repos Grid */}
                {loading ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="glass-card p-6 animate-pulse"
                            >
                                <div className="h-4 bg-white/10 rounded w-3/4 mb-3" />
                                <div className="h-3 bg-white/5 rounded w-full mb-2" />
                                <div className="h-3 bg-white/5 rounded w-2/3" />
                            </div>
                        ))}
                    </div>
                ) : error ? (
                    <div className="text-center text-[var(--color-muted)]">
                        <p>Unable to fetch GitHub data. Please check back later.</p>
                    </div>
                ) : repos.length === 0 ? (
                    <ScrollReveal>
                        <div className="glass-card p-10 text-center max-w-2xl mx-auto">
                            <div className="text-5xl mb-4">🚀</div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                Projects Coming Soon!
                            </h3>
                            <p className="text-[var(--color-muted)] mb-6">
                                I&apos;m currently working on some exciting projects that will be open-sourced soon.
                                Stay tuned for repositories featuring my engineering and development work!
                            </p>
                            <a
                                href={`https://github.com/${GITHUB_USERNAME}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-secondary)] text-white font-semibold hover:shadow-lg hover:shadow-[var(--color-accent)]/25 transition-all"
                            >
                                Follow on GitHub
                                <svg
                                    className="w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                    </ScrollReveal>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {repos.map((repo, i) => (
                            <ScrollReveal key={repo.name} delay={i * 0.1}>
                                <motion.a
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -4 }}
                                    className="glass-card p-6 block h-full group"
                                >
                                    <div className="flex items-start gap-3">
                                        <svg
                                            className="w-5 h-5 text-[var(--color-muted)] mt-0.5 shrink-0 group-hover:text-[var(--color-accent-light)] transition-colors"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                                            />
                                        </svg>
                                        <h4 className="font-semibold text-white group-hover:text-[var(--color-accent-light)] transition-colors truncate">
                                            {repo.name}
                                        </h4>
                                    </div>

                                    {repo.description && (
                                        <p className="text-sm text-[var(--color-muted)] mt-3 line-clamp-2">
                                            {repo.description}
                                        </p>
                                    )}

                                    <div className="flex items-center gap-4 mt-4">
                                        {repo.language && (
                                            <div className="flex items-center gap-1">
                                                <span
                                                    className="w-3 h-3 rounded-full"
                                                    style={{
                                                        backgroundColor:
                                                            languageColors[repo.language] ||
                                                            "var(--color-accent)",
                                                    }}
                                                />
                                                <span className="text-xs text-[var(--color-muted)]">
                                                    {repo.language}
                                                </span>
                                            </div>
                                        )}
                                        {repo.stargazers_count > 0 && (
                                            <div className="flex items-center gap-1 text-xs text-[var(--color-muted)]">
                                                ⭐ {repo.stargazers_count}
                                            </div>
                                        )}
                                        {repo.forks_count > 0 && (
                                            <div className="flex items-center gap-1 text-xs text-[var(--color-muted)]">
                                                🍴 {repo.forks_count}
                                            </div>
                                        )}
                                    </div>
                                </motion.a>
                            </ScrollReveal>
                        ))}
                    </div>
                )}

                {/* Contribution Graph Placeholder */}
                <ScrollReveal delay={0.3}>
                    <div className="mt-8 glass-card p-6 max-w-4xl mx-auto">
                        <h4 className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-4">
                            Contribution Activity
                        </h4>
                        <div className="flex items-center justify-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={`https://ghchart.rshah.org/6366f1/${GITHUB_USERNAME}`}
                                alt="GitHub Contribution Graph"
                                className="w-full max-w-3xl opacity-80 rounded-lg"
                                style={{ filter: "brightness(1.2)" }}
                            />
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
