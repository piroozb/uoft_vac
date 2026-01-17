"use client";

import { execData, ExecDataTypes } from "./ExecData";
import ExecArtwork from "./ExecArtwork";

const SCALE = 1;
const ART_WIDTH = 225;

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
        <div
            className="flex flex-col items-center text-center"
            style={{ ["--SCALE" as any]: SCALE }}
        >
            {/* Name */}
            <h2
                className="
                    mb-[calc(5px*var(--SCALE))]
                    text-[calc(50px*var(--SCALE))]
                    font-bold
                "
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
            <ExecArtwork name={entryKey} size={ART_WIDTH * SCALE} />

            {/* Info container */}
            <div>
                {position && (
                    <h3 className="mt-[calc(5px*var(--SCALE))] text-[calc(25px*var(--SCALE))] font-bold">
                        {position}
                    </h3>
                )}

                <p className={`mt-[calc(${position ? "" : "10"}px*var(--SCALE))] text-[calc(20px*var(--SCALE))]`}>
                    {study}
                </p>

                <p className="mt-[calc(5px*var(--SCALE))] text-[calc(20px*var(--SCALE))]">
                    Favourite medium:<br />
                    {medium}
                </p>

                <p className="text-[calc(25px*var(--SCALE))] font-bold">
                    {fact}
                </p>
            </div>
        </div>
    );
}
