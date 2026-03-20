"use client";

import { useIsMobile } from "../layout/UseIsMobile";
import SectionTitle from "../common/SectionTitle";
import Events from "./Events";
import OfficeHours from "./OfficeHours";

export const SUBSECTIONS_CONTAINER_CLASSNAME = "rounded-b-xl shadow-lg relative"
export const SUBSECTIONS_TITLE_HEIGHT = "max(7.5cqw,3rem)";
export const SUBSECTIONS_TEXT_CLASSNAME = "mx-2 text-[max(3.25cqw,1.25rem)] text-center";

// Subsection gradient style component
export function subsectionGradientStyleComponent(
    colourCentre: string,
    colourEdges: string,
    percV: number = 10, // Should be ∈[0, 100].
    percH: number = 10,
): string {
    return `
        linear-gradient(to right,
        ${colourEdges} 0%,
        transparent ${percH}%,
        transparent ${100 - percH}%,
        ${colourEdges} 100%),

        linear-gradient(to bottom,
        ${colourEdges} 0%,
        transparent ${percV}%,
        transparent ${100 - percV}%,
        ${colourEdges} 100%),
        
        ${colourCentre}`;
}

// Subsection ears component
const EAR_CLASSNAME = `aspect-square rounded-full absolute z-[-1]`;
export function SubsectionEars({
    colour,
    size = 15,
} : {
    colour: string;
    size?: number;
}) {
    const earStyle = {
        backgroundColor: colour,
        width: `${size}cqw`,
        top: `-${size / 2}cqw`,
    };

    return (
        <>
            <div
                className={EAR_CLASSNAME}
                style={{
                    ...earStyle,
                    left: 0,
                 }}
            />

            <div
                className={EAR_CLASSNAME}
                style={{
                    ...earStyle,
                    right: 0,
                }}
            />
        </>
    )
}

export default function WhatDoWeDo() {
    const isMobile = useIsMobile();
    const isSmaller = useIsMobile(true);

    return (
        <section className="mt-5">
            
            {/* Section title */}
            <SectionTitle>What do we do?</SectionTitle>

            {/* Subsections */}
            <div className={`mt-10 ${!isMobile
                ? "mx-[1cqw] gap-[1cqw] grid grid-cols-2"
                : `${!isSmaller && "mx-[5cqw]"} gap-[10cqw] flex flex-col`}`}
            >
                <Events/>
                <OfficeHours/>
            </div>
        </section>
    );
}
