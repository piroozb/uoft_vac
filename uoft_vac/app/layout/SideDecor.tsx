"use client";

import { useEffect, useRef, useState } from "react";
import { SIDE_DECOR_WIDTH } from "../common/Constants";

const SCALE = 1;
const SCROLL_VEL = 0.1;

type Stripe = { y: number };

export default function SideDecor({ offset }: { offset: number }) {
    const [leftStripes, setLeftStripes] = useState<Stripe[]>([{ y: 0 }]);
    const [rightStripes, setRightStripes] = useState<Stripe[]>([{ y: 0 }]);
    const [barHeight, setBarHeight] = useState<number | null>(null);

    const animationRef = useRef<number>(0);

    // Load image to compute scroll repetition height.
    useEffect(() => {
        const img = new window.Image();
        img.src = "/side-decor-l.png";
        img.onload = () => {
            const scaledHeight =
                img.naturalHeight * ((SIDE_DECOR_WIDTH * SCALE) / img.naturalWidth);
            setBarHeight(scaledHeight);
        };
    }, []);

    // Scroll animation
    useEffect(() => {
        if (!barHeight) return;

        const animate = () => {
            setLeftStripes((prev) => {
                const updated = prev.map((s) => ({ ...s, y: s.y + SCROLL_VEL }));
                const last = updated[updated.length - 1];
                if (last.y >= 0) updated.push({ y: last.y - barHeight });
                return updated.filter((s) => s.y < barHeight);
            });

            setRightStripes((prev) => {
                const updated = prev.map((s) => ({ ...s, y: s.y + SCROLL_VEL }));
                const last = updated[updated.length - 1];
                if (last.y >= 0) updated.push({ y: last.y - barHeight });
                return updated.filter((s) => s.y < barHeight);
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationRef.current!);
    }, [barHeight]);

    const translateX = offset * SIDE_DECOR_WIDTH * SCALE;

    return (
        <>
            {/* Left panel */}
            <div
                className="fixed left-0 top-0 z-0 transition-transform duration-300 ease-linear"
                style={{
                    transform: `translateX(-${translateX}px)`,
                    width: SIDE_DECOR_WIDTH * SCALE,
                    height: "100%",
                    overflow: "hidden",
                }}
            >
                {leftStripes.map((stripe, i) => (
                    <img
                        key={i}
                        src="/side-decor-l.png"
                        style={{
                            position: "absolute",
                            top: stripe.y,
                            width: SIDE_DECOR_WIDTH * SCALE,
                            height: "auto",
                        }}
                        alt=""
                    />
                ))}
            </div>

            {/* Right panel */}
            <div
                className="fixed right-0 top-0 z-0 transition-transform duration-300 ease-linear"
                style={{
                    transform: `translateX(${translateX}px)`,
                    width: SIDE_DECOR_WIDTH * SCALE,
                    height: "100%",
                    overflow: "hidden",
                }}
            >
                {rightStripes.map((stripe, i) => (
                    <img
                        key={i}
                        src="/side-decor-r.png"
                        style={{
                            position: "absolute",
                            top: stripe.y,
                            width: SIDE_DECOR_WIDTH * SCALE,
                            height: "auto",
                        }}
                        alt=""
                    />
                ))}
            </div>
        </>
    );
}
