"use client";

import {
    useState,
    useEffect,
} from "react";

export function useScrollDirection() {

    const [scrollY, setScrollY] = useState(0);
    const [direction, setDirection] = useState<"up" | "down">("up");

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setScrollY(currentScrollY);

            if (currentScrollY > lastScrollY) {
                setDirection("down");
            } else if (currentScrollY < lastScrollY) {
                setDirection("up");
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return { scrollY, direction };
}
