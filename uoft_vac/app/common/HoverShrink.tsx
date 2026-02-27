"use client";

import { ReactNode, useState } from "react";

export default function HoverShrink({
    children,
    scale = .95,
    duration = 300,
} : {
    children: ReactNode;
    scale?: number;
    duration?: number;
    className?: string;
    style?: React.CSSProperties;
}) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            style={{
                transition: `transform ${duration}ms ease`,
                transform: hovered ? `scale(${scale})` : "scale(1)",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {children}
        </div>
    );
}
