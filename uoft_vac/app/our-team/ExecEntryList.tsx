"use client";

import { execData, ExecDataTypes } from "./ExecData";

interface ExecEntryListProps {
    personKey: string;
    right?: boolean;
}

export default function ExecEntryList({ personKey, right = false }: ExecEntryListProps) {
    const data: ExecDataTypes = execData[personKey];

    const {
        name = personKey,
        position,
        colour = "#000000",
        study,
        medium,
        fact,
    } = data || {};

    return (
        <div
            className={`flex flex-col md:flex-row ${right ? "md:flex-row-reverse" : ""} items-start gap-6 md:gap-10 my-10 w-full`}
        >
            {/* Artwork */}
            <div className="flex-1 max-w-sm aspect-square bg-white rounded-md flex items-center justify-center">
                <img
                    src={`/exec-artworks/${personKey}.jpg`}
                    alt={`${name}'s artwork`}
                    className="w-full h-full object-cover rounded-md"
                    onError={(e) => {
                        // fallback: white square if no image
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                />
            </div>

            {/* Info */}
            <div className={`flex-[2] ${right ? "text-right" : "text-left"} self-start`}>
                <h3 className="text-5xl font-normal">{position}</h3>
                <h2 className="text-6xl font-bold" style={{ color: colour }}>
                    {name}
                </h2>
                <p className="text-[1.3rem] mt-4">{study}</p>
                <p className="text-[1.3rem] mt-4">Favourite medium: {medium}</p>
                <p className="text-[1.5rem] mt-4">{fact}</p>
            </div>
        </div>
    );
}
