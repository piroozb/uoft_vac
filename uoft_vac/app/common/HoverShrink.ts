"use client";

import { useState } from "react";

export function hoverShrink(
    scale = 0.95,
    duration = 300,
) {
    const [hovered, setHovered] = useState(false);

    return {
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false),
        transformStyle: {
            transform: hovered ? `scale(${scale})` : "scale(1)",
            transition: `transform ${duration}ms ease`,
        },
    };
}
