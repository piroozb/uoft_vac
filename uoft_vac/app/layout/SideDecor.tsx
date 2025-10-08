"use client";

import { useEffect, useRef, useState } from "react";
import { sideDecorWidth } from "../common/Constants";

const SCALE = 1;
const SCROLL_VEL = .1;

type Stripe = {
    y: number;
};

export default function SideDecor() {
    const [leftStripes, setLeftStripes] = useState<Stripe[]>([{ y: 0 }]);
    const [rightStripes, setRightStripes] = useState<Stripe[]>([{ y: 0 }]);
    const [barHeight, setBarHeight] = useState<number | null>(null);

    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number>(0);

    // Preload one image to calculate scaled height
    useEffect(() => {
        const img = new window.Image();
        img.src = "/side-decor-l.png"; // assume left and right have same size
        img.onload = () => {
            const scaledHeight =
                img.naturalHeight * ((sideDecorWidth * SCALE) / img.naturalWidth);
            setBarHeight(scaledHeight);
        };
    }, []);

    // Animation loop
    useEffect(() => {
        if (!barHeight) return;

        const animate = () => {
            setLeftStripes((prev) => {
                const updated = prev.map((s) => ({ ...s, y: s.y + SCROLL_VEL }));
                const last = updated[updated.length - 1];

                if (last.y >= 0) {
                    updated.push({
                        y: last.y - barHeight,
                    });
                }

                return updated.filter((s) => s.y < barHeight);
            });

            setRightStripes((prev) => {
                const updated = prev.map((s) => ({ ...s, y: s.y + SCROLL_VEL }));
                const last = updated[updated.length - 1];

                if (last.y >= 0) {
                    updated.push({
                        y: last.y - barHeight,
                    });
                }

                return updated.filter((s) => s.y < barHeight);
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationRef.current!);
    }, [barHeight]);

    return (
        <>
            {/* Left Stripe */}
            <div
                ref={leftRef}
                className="fixed left-0 top-0 z-0"
                style={{
                    width: sideDecorWidth * SCALE,
                    height: "100%",
                    overflow: "hidden",
                }}
            >
                {leftStripes.map((stripe, index) => (
                    <img
                        key={index}
                        src="/side-decor-l.png"
                        alt="Side Decor Left"
                        style={{
                            position: "absolute",
                            top: stripe.y,
                            width: sideDecorWidth * SCALE,
                            height: "auto",
                        }}
                    />
                ))}
            </div>

            {/* Right Stripe */}
            <div
                ref={rightRef}
                className="fixed right-0 top-0 z-0"
                style={{
                    width: sideDecorWidth * SCALE,
                    height: "100%",
                    overflow: "hidden",
                }}
            >
                {rightStripes.map((stripe, index) => (
                    <img
                        key={index}
                        src="/side-decor-r.png"
                        alt="Side Decor Right"
                        style={{
                            position: "absolute",
                            top: stripe.y,
                            width: sideDecorWidth * SCALE,
                            height: "auto",
                        }}
                    />
                ))}
            </div>
        </>
    );
}
