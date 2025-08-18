"use client";

import { useState } from "react";
import { execData, ExecDataTypes } from "./ExecData";

interface ExecEntryListProps {
    entryKey: string;
    right?: boolean;
}

export default function ExecEntryList({ entryKey, right = false }: ExecEntryListProps) {
    const [expanded, setExpanded] = useState(false);
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
        <>
            <div
                className={`relative flex flex-col md:flex-row ${right ? "md:flex-row-reverse" : ""
                    } items-start gap-6 md:gap-10 my-10 w-full`}
            >
                {/* Artwork */}
                <div className="flex-1 max-w-sm aspect-square bg-white rounded-md flex items-center justify-center relative">
                    <img
                        src={`/exec-artworks/${entryKey}.jpg`}
                        alt={`${name}'s artwork`}
                        className="w-full h-full object-cover rounded-md cursor-pointer"
                        onClick={() => setExpanded(true)}
                        onError={(e) => {
                            (e.currentTarget as HTMLImageElement).style.display = "none";
                        }}
                    />
                </div>

                {/* Expanded artwork */}
                {expanded && (
                    <div
                        // Gray background.
                        className="fixed inset-0 bg-gray-900/60 flex items-center justify-center z-101 cursor-pointer"
                        onClick={() => setExpanded(false)}
                    >
                        {/* Expanded image has its original dimensions. */}
                        <img
                            src={`/exec-artworks/${entryKey}.jpg`}
                            alt={`${name}'s artwork enlarged`}
                            className="max-w-[75%] max-h-[75%] object-contain rounded-md shadow-lg"
                        />
                    </div>
                )}

                {/* Info */}
                <div className={`flex-[2] ${right ? "text-right" : "text-left"} self-start`}>
                    <h3 className="text-5xl font-normal">{position}</h3>
                    <h2
                        className="text-6xl font-bold"
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
                    <p className="text-[1.3rem] mt-4">{study}</p>
                    <p className="text-[1.3rem] mt-4">Favourite medium: {medium}</p>
                    <p className="text-[1.5rem] mt-4">{fact}</p>
                </div>
            </div>
        </>
    );
}
