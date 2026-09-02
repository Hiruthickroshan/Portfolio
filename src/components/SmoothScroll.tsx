"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 0.85,
            easing: (t: number) => 1 - Math.pow(1 - t, 3), // Natural snappy cubic-out curve
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            syncTouch: false,          // Native mobile inertial momentum without sluggish resistance
            touchMultiplier: 1.0,
            wheelMultiplier: 1.0,
            autoRaf: true,
        });

        // Intercept hash anchor links for silky smooth scrolling with header offset
        const handleAnchorClick = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest("a");
            if (!target) return;
            const href = target.getAttribute("href");
            if (href && href.startsWith("#") && href.length > 1) {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    e.preventDefault();
                    lenis.scrollTo(targetElement as HTMLElement, {
                        offset: -70,
                        duration: 0.9,
                    });
                }
            }
        };

        document.addEventListener("click", handleAnchorClick);

        return () => {
            document.removeEventListener("click", handleAnchorClick);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}

