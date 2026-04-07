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
            syncTouch: true,           // enables smooth inertia scrolling on mobile/touch
            syncTouchLerp: 0.075,      // smooth lerp for touch deceleration
            touchInertiaExponent: 25,   // stronger inertia for natural mobile feel
            touchMultiplier: 1.5,
            wheelMultiplier: 1,
            autoRaf: true,             // Lenis manages its own RAF loop
            anchors: {                 // built-in smooth anchor link handling
                offset: -80,           // offset for fixed navbar
                duration: 1.4,         // smooth navigation duration
            },
        });

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}

