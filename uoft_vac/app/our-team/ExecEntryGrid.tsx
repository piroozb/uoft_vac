"use client";

import { execData, ExecDataTypes } from "./ExecData";
import ExecArtwork from "./ExecArtwork";

const artWidth = 250;

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
        <div className="flex flex-col items-center text-center w-full mb-10">

            {/* Name with outline */}
            <h2
                className="text-6xl font-bold mb-5 whitespace-nowrap text-ellipsis leading-[1.1] pb-2"
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
                style={{ width: `${artWidth + 50}px` }}
                className="w-full"
            >
                <h3 className="text-2xl font-normal mt-4">{position}</h3>
                <p className="text-[1.3rem] mt-1">{study}</p>
                <p className="text-[1.3rem] mt-1">
                    Favourite medium:<br />{medium}
                </p>
                <p className="text-[1.5rem] mt-1 font-bold">{fact}</p>
            </div>
        </div>
    );
}
