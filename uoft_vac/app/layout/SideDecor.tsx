"use client";

import { useEffect, useRef, useState } from "react";
import {
    SIDE_DECOR_MIN,
    SIDE_DECOR_MAX,
    SIDE_DECOR_WIDTH,
} from "../common/Constants";

const SCALE = 1;
const SCROLL_VEL = 0.1;

type Stripe = {
    y: number;
};

export default function SideDecor() {
    const [leftStripes, setLeftStripes] = useState<Stripe[]>([{ y: 0 }]);
    const [rightStripes, setRightStripes] = useState<Stripe[]>([{ y: 0 }]);
    const [barHeight, setBarHeight] = useState<number | null>(null);
    const [offset, setOffset] = useState(0); // how far the decor is shifted offscreen

    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number>(0);

    // Preload one image to calculate scaled height
    useEffect(() => {
        const img = new window.Image();
        img.src = "/side-decor-l.png"; // assume left and right have same size
        img.onload = () => {
            const scaledHeight =
                img.naturalHeight * ((SIDE_DECOR_WIDTH * SCALE) / img.naturalWidth);
            setBarHeight(scaledHeight);
        };
    }, []);

    // Compute offset based on screen width
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width < SIDE_DECOR_MIN) {
                setOffset(1); // fully hidden (100%)
            } else if (width >= SIDE_DECOR_MAX) {
                setOffset(0); // fully visible
            } else {
                // interpolate between sm and md
                const ratio = (SIDE_DECOR_MAX - width) / (SIDE_DECOR_MAX - SIDE_DECOR_MIN); // 1→0
                setOffset(ratio);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Animation loop for scrolling effect
    useEffect(() => {
        if (!barHeight) return;

        const animate = () => {
            setLeftStripes((prev) => {
                const updated = prev.map((s) => ({ ...s, y: s.y + SCROLL_VEL }));
                const last = updated[updated.length - 1];
                if (last.y >= 0) {
                    updated.push({ y: last.y - barHeight });
                }
                return updated.filter((s) => s.y < barHeight);
            });

            setRightStripes((prev) => {
                const updated = prev.map((s) => ({ ...s, y: s.y + SCROLL_VEL }));
                const last = updated[updated.length - 1];
                if (last.y >= 0) {
                    updated.push({ y: last.y - barHeight });
                }
                return updated.filter((s) => s.y < barHeight);
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationRef.current!);
    }, [barHeight]);

    // Compute pixel offset
    const translateX = offset * SIDE_DECOR_WIDTH * SCALE; // how far offscreen it moves

    return (
        <>
            {/* Left Stripe */}
            <div
                ref={leftRef}
                className="fixed left-0 top-0 z-0 transition-transform duration-300 ease-linear"
                style={{
                    transform: `translateX(-${translateX}px)`,
                    width: SIDE_DECOR_WIDTH * SCALE,
                    height: "100%",
                    overflow: "hidden",
                }}
            >
                {leftStripes.map((stripe, index) => (
                    <img
                        key={index}
                        src="./side-decor-l.png"
                        alt="Side Decor Left"
                        style={{
                            position: "absolute",
                            top: stripe.y,
                            width: SIDE_DECOR_WIDTH * SCALE,
                            height: "auto",
                        }}
                    />
                ))}
            </div>

            {/* Right Stripe */}
            <div
                ref={rightRef}
                className="fixed right-0 top-0 z-0 transition-transform duration-300 ease-linear"
                style={{
                    transform: `translateX(${translateX}px)`,
                    width: SIDE_DECOR_WIDTH * SCALE,
                    height: "100%",
                    overflow: "hidden",
                }}
            >
                {rightStripes.map((stripe, index) => (
                    <img
                        key={index}
                        src="./side-decor-r.png"
                        alt="Side Decor Right"
                        style={{
                            position: "absolute",
                            top: stripe.y,
                            width: SIDE_DECOR_WIDTH * SCALE,
                            height: "auto",
                        }}
                    />
                ))}
            </div>
        </>
    );
}
