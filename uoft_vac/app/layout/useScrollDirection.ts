"use client";

import {
    useState,
    useEffect,
} from "react";

const SCROLL_THRESHOLD = 85;

// -1 = up
// 1 = down
export function useScrollDirection() {
    const [direction, setDirection] = useState<-1 | 0 | 1>(0);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const diff = currentScrollY - lastScrollY;

            // Threshold to disregard infinitesimal oscillations from the web.
            if (Math.abs(diff) < SCROLL_THRESHOLD) return;

            if (diff > 0) {
                setDirection(-1);
            } else if (diff < 0) {
                setDirection(1);
            }
            else {
                setDirection(0);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return { direction };
}
