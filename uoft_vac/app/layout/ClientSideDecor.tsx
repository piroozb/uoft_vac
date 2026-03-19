"use client";

import { useEffect } from "react";

import {
    SIDE_DECOR_MIN,
    SIDE_DECOR_MAX,
} from "../common/Constants";
import { useIsMobile } from "./UseIsMobile";
import SideDecor from "./SideDecor";
import { useWindowOffset } from "./WindowOffsetContext";

export default function ClientSideDecor() {
    const isMobile = useIsMobile();

    const { offset, setOffset } = useWindowOffset();

    useEffect(() => {
        if (isMobile) {
            setOffset(1);
            return;
        }

        const handleResize = () => {
            const width = window.innerWidth;

            if (width >= SIDE_DECOR_MAX) {
                setOffset(0);
            }
            
            else {
                const ratio =
                    (SIDE_DECOR_MAX - width) /
                    (SIDE_DECOR_MAX - SIDE_DECOR_MIN);

                setOffset(ratio);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isMobile, setOffset]);

    return <SideDecor offset={offset}/>;
}
