"use client";

import { execData, ExecDataTypes } from "./ExecData";
import ExecArtwork from "./ExecArtwork";

const artWidth = 15;

interface ExecEntryGridProps {
    entryKey: string;
}

export default function ExecEntryGrid({ entryKey }: ExecEntryGridProps) {
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
        <div className="flex flex-col items-center text-center">

            {/* Name */}
            <h2
                className="mb-[1cqw] text-[3cqw] font-bold"
                style={{
                    color: colour,
                    textShadow: `-1px -1px 0 #000,
                     1px -1px 0 #000,
                    -1px  1px 0 #000,
                     1px  1px 0 #000`,
                }}
            >
                {name}
            </h2>

            {/* Artwork */}
            <ExecArtwork name={entryKey} size={artWidth} />

            {/* Info container */}
            <div
                style={{ width: `${artWidth + 5}cqw` }}
                className=""
            >
                <h3 className="mt-[1cqw] text-[1.5cqw] font-bold">{position}</h3>
                <p className="mt-[.25cqw] text-[1.1cqw]">{study}</p>
                <p className="mt-[.5cqw] text-[1.1cqw]">
                    Favourite medium:<br />{medium}
                </p>
                <p className="mt-[.25cqw] text-[1.5cqw] font-bold">{fact}</p>
            </div>
        </div>
    );
}
