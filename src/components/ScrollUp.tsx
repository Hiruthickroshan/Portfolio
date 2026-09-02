"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollUp() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 350);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {show && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    onClick={scrollToTop}
                    className="fixed right-6 bottom-6 z-40 w-11 h-11 rounded-full bg-[var(--container-color)] border border-[var(--border-color)] text-[var(--first-color)] flex items-center justify-center text-xl shadow-lg hover:bg-[var(--first-color)] hover:text-black transition-all hover:scale-110 shadow-black/20"
                    aria-label="Scroll to top"
                >
                    <i className="ri-arrow-up-line" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
