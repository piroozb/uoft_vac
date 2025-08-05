"use client";

import { useEffect, useRef, useState } from "react";

const BAR_WIDTH = 100;
const BAR_HEIGHT = 1000;
const SCROLL_VEL = .1;

type Stripe = {
    y: number;
    color: "greenblue" | "purplered";
};

export default function SideDecor() {
    const [leftStripes, setLeftStripes] = useState<Stripe[]>([
        { y: 0, color: "greenblue" },
    ]);
    const [rightStripes, setRightStripes] = useState<Stripe[]>([
        { y: 0, color: "purplered" },
    ]);

    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

    const animationRef = useRef<number>(0);

    useEffect(() => {
        const animate = () => {
            setLeftStripes(prev => {
                const updated = prev.map(s => ({ ...s, y: s.y + SCROLL_VEL }));
                const last = updated[updated.length - 1];

                if (last.y >= 0) {
                    const nextColor: Stripe["color"] = last.color === "greenblue" ? "purplered" : "greenblue";
                    updated.push({
                        y: last.y - BAR_HEIGHT,
                        color: nextColor,
                    });
                }

                return updated.filter(s => s.y < BAR_HEIGHT);
            });

            setRightStripes(prev => {
                const updated = prev.map(s => ({ ...s, y: s.y + SCROLL_VEL }));
                const last = updated[updated.length - 1];

                if (last.y >= 0) {
                    const nextColor: Stripe["color"] = last.color === "purplered" ? "greenblue" : "purplered";
                    updated.push({
                        y: last.y - BAR_HEIGHT,
                        color: nextColor,
                    });
                }

                return updated.filter(s => s.y < BAR_HEIGHT);
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationRef.current!);
    }, []);

    return (
        <>
            {/* Left Stripe */}
            <div
                ref={leftRef}
                className="fixed left-0 top-0 z-0"
                style={{ width: BAR_WIDTH, height: "100%", overflow: "hidden" }}
            >
                {leftStripes.map((stripe, index) => (
                    <div
                        key={index}
                        style={{
                            position: "absolute",
                            top: stripe.y,
                            width: BAR_WIDTH,
                            height: BAR_HEIGHT,
                            background: getGradient(stripe.color),
                        }}
                    />
                ))}
            </div>

            {/* Right Stripe */}
            <div
                ref={rightRef}
                className="fixed right-0 top-0 z-0"
                style={{ width: BAR_WIDTH, height: "100%", overflow: "hidden" }}
            >
                {rightStripes.map((stripe, index) => (
                    <div
                        key={index}
                        style={{
                            position: "absolute",
                            top: stripe.y,
                            width: BAR_WIDTH,
                            height: BAR_HEIGHT,
                            background: getGradient(stripe.color),
                        }}
                    />
                ))}
            </div>
        </>
    );
}

// Gradient function (temporary).
function getGradient(color: Stripe["color"]) {
    return color === "greenblue"
        ? "linear-gradient(to bottom, green, blue)"
        : "linear-gradient(to bottom, purple, red)";
}
