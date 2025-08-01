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

// Sussy version:

// "use client";

// import { useEffect, useRef, useState } from "react";

// const BAR_WIDTH = 100;
// const BAR_HEIGHT = 1000;
// const GAP = 20;
// const SPEED = 40; // pixels per second

// type Stripe = {
//     id: number;
//     y: number;
//     side: "left" | "right";
//     color: string;
// };

// export default function SideDecor() {
//     const [stripes, setStripes] = useState<Stripe[]>([]);
//     const lastIdRef = useRef(0);
//     const containerRef = useRef<HTMLDivElement>(null);
//     const animationRef = useRef<number>(0);

//     useEffect(() => {
//         // Initialize a few stripes
//         const initial: Stripe[] = [];
//         for (let i = 0; i < 5; i++) {
//             initial.push({
//                 id: lastIdRef.current++,
//                 y: i * -(BAR_HEIGHT + GAP),
//                 side: i % 2 === 0 ? "left" : "right",
//                 color: i % 2 === 0 ? "linear-gradient(to bottom, green, blue)" : "linear-gradient(to bottom, purple, red)",
//             });
//         }
//         setStripes(initial);
//     }, []);

//     useEffect(() => {
//         let lastTime = performance.now();

//         function animate(time: number) {
//             const delta = (time - lastTime) / 1000;
//             lastTime = time;

//             setStripes((prev) => {
//                 const moved = prev.map((s) => ({ ...s, y: s.y + SPEED * delta }));
//                 const filtered = moved.filter((s) => s.y < window.innerHeight);

//                 // Check if we need to add a new stripe
//                 const lowest = Math.max(...filtered.map((s) => s.y + BAR_HEIGHT), 0);
//                 if (lowest < window.innerHeight) {
//                     const nextSide = filtered.length % 2 === 0 ? "left" : "right";
//                     filtered.push({
//                         id: lastIdRef.current++,
//                         y: lowest - BAR_HEIGHT - GAP,
//                         side: nextSide,
//                         color:
//                             nextSide === "left"
//                                 ? "linear-gradient(to bottom, green, blue)"
//                                 : "linear-gradient(to bottom, purple, red)",
//                     });
//                 }

//                 return filtered;
//             });

//             animationRef.current = requestAnimationFrame(animate);
//         }

//         animationRef.current = requestAnimationFrame(animate);
//         return () => cancelAnimationFrame(animationRef.current!);
//     }, []);

//     return (
//         <div
//             ref={containerRef}
//             style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 height: "100%",
//                 pointerEvents: "none",
//                 zIndex: -1,
//             }}
//         >
//             {stripes.map((stripe) => (
//                 <div
//                     key={stripe.id}
//                     style={{
//                         position: "absolute",
//                         top: stripe.y,
//                         left: stripe.side === "left" ? 0 : undefined,
//                         right: stripe.side === "right" ? 0 : undefined,
//                         width: BAR_WIDTH,
//                         height: BAR_HEIGHT,
//                         background: stripe.color,
//                         borderRadius: 10,
//                         opacity: 0.7,
//                     }}
//                 />
//             ))}
//         </div>
//     );
// }