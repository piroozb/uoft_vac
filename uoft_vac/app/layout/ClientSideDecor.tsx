"use client";

import { useEffect } from "react";

import {
    SIDE_DECOR_MIN,
    SIDE_DECOR_MAX,
} from "../common/Constants";
import SideDecor from "./SideDecor";
import { useWindowOffset } from "./WindowOffsetContext";

export default function ClientSideDecor() {
    const { offset, setOffset } = useWindowOffset();

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width < SIDE_DECOR_MIN) {
                setOffset(1);
            } else if (width >= SIDE_DECOR_MAX) {
                setOffset(0);
            } else {
                const ratio =
                    (SIDE_DECOR_MAX - width) /
                    (SIDE_DECOR_MAX - SIDE_DECOR_MIN);
                setOffset(ratio);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [setOffset]);

    return <SideDecor offset={offset} />;
}
