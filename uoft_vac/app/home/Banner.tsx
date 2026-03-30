"use client";

import Image from "next/image";

import { SIDE_DECOR_WIDTH } from "../common/constants";
import { useWindowOffset } from "../layout/WindowOffsetContext";

export default function Banner() {
    const { offset } = useWindowOffset();

    return (
        <section className="w-screen flex justify-center relative z-10">
            <Image
                src="/banner-final-resized.png"
                alt="Banner"
                className="w-full object-contain shadow-lg"
                style={{ transform: `translateX(-${SIDE_DECOR_WIDTH * (1 - offset)}px)` }}
                width={1000} height={0}
            />
        </section>
    );
}
