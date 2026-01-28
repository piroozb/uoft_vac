"use client";

import { ReactNode, useState } from "react";

interface HoverShrinkProps {
    children: ReactNode;
    scale?: number;
    duration?: number;
    className?: string;
    style?: React.CSSProperties;
}

export default function HoverShrink({
    children,
    scale = .95,
    duration = 300,
}: HoverShrinkProps) {
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
