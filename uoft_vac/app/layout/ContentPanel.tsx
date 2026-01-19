"use client";

import { SIDE_DECOR_WIDTH } from "../common/Constants";
import { useWindowOffset } from "./WindowOffsetContext";

export default function ContentPanel({ children }: { children: React.ReactNode }) {
    const { offset } = useWindowOffset();

    const padding = SIDE_DECOR_WIDTH * (1 - offset);

    return (
        <div
            className="w-full"
            style={{
                paddingLeft: padding,
                paddingRight: padding,
            }}
        >
            {children}
        </div>
    );
}
