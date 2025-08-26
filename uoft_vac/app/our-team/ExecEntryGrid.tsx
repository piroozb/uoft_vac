"use client";

import { execData, ExecDataTypes } from "./ExecData";
import ExecArtwork from "./ExecArtwork";

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
        <div className="flex flex-col items-center text-center w-full max-w-sm mx-auto">

            {/* Name with outline */}
            <h2
                className="text-6xl font-bold mb-5"
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
            <ExecArtwork name={entryKey} size={250} />

            {/* Position, study, medium, fact */}
            <h3 className="text-2xl font-normal mt-4">{position}</h3>
            <p className="text-[1.3rem] mt-4">{study}</p>
            <p className="text-[1.3rem] mt-4">Favourite medium: {medium}</p>
            <p className="text-[1.5rem] mt-4">{fact}</p>
        </div>
    );
}