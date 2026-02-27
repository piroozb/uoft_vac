"use client";

import { useRef, useState, useLayoutEffect, useEffect } from "react";

export function ExpandableText<T extends HTMLElement>(
    isExpanded: boolean,
    collapsedHeight: number = 0,
    deps: any[] = []
) {
    const ref = useRef<T | null>(null);
    const [fullHeight, setFullHeight] = useState(0);
    const [needsExpand, setNeedsExpand] = useState(false);

    const measure = () => {
        if (!ref.current) return;
        const scrollH = ref.current.scrollHeight;
        setFullHeight(scrollH);
        setNeedsExpand(scrollH > collapsedHeight);
    };

    // Measure when content or dependencies change.
    useLayoutEffect(() => {
        measure();
    }, deps);

    // Measure when expanded.
    useLayoutEffect(() => {
        if (isExpanded) {
            measure();
        }
    }, [isExpanded]);

    // Measure on window resize while expanded.
    useEffect(() => {
        if (!isExpanded) return;

        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, [isExpanded]);

    return {
        ref,
        fullHeight,
        needsExpand,
    };
}
