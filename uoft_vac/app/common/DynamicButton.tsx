"use client";

import {
    ReactNode,
    useState,
} from "react";

export default function DynamicButton({
    children,
    hoverScale = .95,
    hoverDuration = 300,
    clickScale = .9,
    clickDuration = 300,
} : {
    children: ReactNode;
    hoverScale?: number;
    hoverDuration?: number;
    clickScale?: number;
    clickDuration?: number;
    style?: React.CSSProperties;
}) {
    const [hovered, setHovered] = useState(false);
    const [pressed, setPressed] = useState(false);

    const scale = pressed ? clickScale : hovered ? hoverScale : 1;

    const duration = pressed ? clickDuration : hoverDuration;

    return (
        <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => { setHovered(false); setPressed(false); }}
            onMouseDown={() => setPressed(true)}
            onMouseUp={() => setPressed(false)}
        >
            <div
                style={{
                    transition: `transform ${duration}ms ease`,
                    transform: `scale(${scale})`,
                }}
            >
                {children}
            </div>
        </button>
    );
}
