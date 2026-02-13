"use client";

import { execData, ExecDataTypes } from "./ExecData";
import ExpandableImageCarousel from "../common/ExpandableImageCarousel";

interface ExecEntryGridProps {
    entryKey: string;
}

export default function ExecEntryGrid({
    entryKey,
}: ExecEntryGridProps) {
    const data: ExecDataTypes = execData[entryKey];

    const {
        name = entryKey,
        position,
        colour = "#000000",
        study,
        medium,
        fact,
    } = data;

    return (
        <div
            className="flex flex-col items-center text-center"
        >

            {/* Name */}
            <h2
                className="mb-5 text-[3rem] font-bold"
                style={{
                    color: colour,
                    textShadow:
                        `-1px -1px 0 #000,
                        1px -1px 0 #000,
                        -1px  1px 0 #000,
                        1px  1px 0 #000`,
                }}
            >
                {name}
            </h2>

            {/* Artwork */}
            <ExpandableImageCarousel
                images={[`/exec-artworks/${entryKey}.jpg`]}
                alt={`${entryKey}'s Artwork`}
                normalSize="w-75"
            />

            {/* Info container */}
            <div>
                {position && (
                    <h3 className="mt-2.5 text-[1.5rem] font-bold">
                        {position}
                    </h3>
                )}

                <p className={`${position ? "" : "mt-5"} text-[1.25rem]`}>
                    {study}
                </p>

                <p className="mt-1 text-[1.25rem]">
                    Favourite medium:<br />
                    {medium}
                </p>

                <p className="mt-2.5 text-[1.5rem] font-bold">
                    {fact}
                </p>
            </div>
        </div>
    );
}
