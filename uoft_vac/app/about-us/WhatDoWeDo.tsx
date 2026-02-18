"use client";

import { useIsMobile } from "../layout/IsMobile";
import SectionTitle from "../common/SectionTitle";
import Events from "./Events";
import OfficeHours from "./OfficeHours";

export const SUBSECTIONS_CONTAINER_CLASSNAME = "rounded-xl shadow-lg"
export const SUBSECTIONS_TITLE_HEIGHT = "max(7.5cqw,3rem)";
export const SUBSECTIONS_TEXT_CLASSNAME = "mx-2 text-[max(3.25cqw,1.25rem)] text-center";

export default function WhatDoWeDo() {
    const isMobile = useIsMobile();

    return (
        <section className="mt-5">
            {/* Section title */}
            <SectionTitle>What do we do?</SectionTitle>

            {/* Subsections */}
            <div className={`mt-5 ${isMobile ? "mx-[5cqw] gap-[5cqw] flex flex-col" : "mx-[1cqw] gap-[1cqw] grid grid-cols-2"}`}>
                <Events />
                <OfficeHours />
            </div>
        </section>
    );
}
