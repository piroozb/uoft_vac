"use client";

import { execData, ExecDataTypes } from "./ExecData";
import ExecArtwork from "./ExecArtwork";

interface ExecEntryListProps {
    entryKey: string;
    right?: boolean;
}

export default function ExecEntryList({ entryKey, right = false }: ExecEntryListProps) {
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
                    } items-start md:gap-10 my-10 w-full`}
            >

                {/* Artwork */}
                <ExecArtwork name={entryKey} size={300} />

                {/* Info container */}
                <div className={`flex-[2] ${right ? "text-right" : "text-left"} self-start`}>

                    {/* Position */}
                    <h3 className="text-5xl font-normal">{position}</h3>

                    {/* Name with outline */}
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

                    {/* Study, medium, fun fact */}
                    <p className="text-[1.3rem] mt-4">{study}</p>
                    <p className="text-[1.3rem] mt-4">Favourite medium: {medium}</p>
                    <p className="text-[1.5rem] mt-4">{fact}</p>
                </div>
            </div>
        </>
    );
}
