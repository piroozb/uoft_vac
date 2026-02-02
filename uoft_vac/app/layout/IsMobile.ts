"use client";

import { useEffect, useState } from "react";

import { SIDE_DECOR_MIN } from "../common/Constants";

export function isMobile(breakpoint = SIDE_DECOR_MIN) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < breakpoint);

        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, [breakpoint]);

    return isMobile;
}
