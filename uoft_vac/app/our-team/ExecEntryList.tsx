"use client";

import { execData, ExecDataTypes } from "./ExecData";
import ExpandableImageCarousel from "../common/ExpandableImageCarousel";

interface ExecEntryListProps {
    entryKey: string;
    isLeft?: boolean;
}

export default function ExecEntryList({ entryKey, isLeft = true }: ExecEntryListProps) {
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
                className={`mx-10 gap-5 flex ${isLeft ? "" : "flex-row-reverse"}`}
            >

                {/* Artwork */}
                <ExpandableImageCarousel
                    images={[`/exec-artworks/${entryKey}.jpg`]}
                    alt={`${entryKey}'s Artwork`}
                    normalSize="w-75"
                />

                {/* Info container */}
                <div className={`flex flex-col ${isLeft ? "text-left" : "text-right"}`}>

                    {/* Position */}
                    <p className="text-[2rem] font-bold">{position}</p>

                    {/* Name */}
                    <h2
                        className="text-[3rem] font-bold"
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

                    {/* Small infos */}
                    <p className={`mt-2.5 text-[1.25rem]`}>
                        {study}
                    </p>

                    <p className="mt-2.5 text-[1.25rem]">
                        Favourite medium: {medium}
                    </p>

                    <p className="mt-2.5 text-[1.5rem] font-bold">
                        {fact}
                    </p>
                </div>
            </div>
        </>
    );
}
