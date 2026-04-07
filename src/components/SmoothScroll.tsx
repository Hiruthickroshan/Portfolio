"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            syncTouch: false,          // let native mobile scroll handle touch — avoids overshooting
            touchMultiplier: 1,        // neutral touch sensitivity
            wheelMultiplier: 1,
            autoRaf: true,             // Lenis manages its own RAF loop
        });

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}

