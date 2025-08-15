import React from "react";

interface ExecEntryListProps {
    right?: boolean; // True for picture on right, false for picture on left (default).
    name?: string;
    position?: string;
    info?: string;
    artwork?: string;
    colour?: string; // RGB value for name (black default).
}

export default function ExecEntryList({
    right = false,
    name,
    position,
    info,
    artwork,
    colour = "rgb(0,0,0)",
}: ExecEntryListProps) {
    return (
        <div
            className={`flex flex-col md:flex-row ${right ? "md:flex-row-reverse" : ""
                } items-start gap-6 md:gap-10 my-10`}
        >
            {/* Artwork */}
            <div className="w-75 h-75 bg-white rounded-md flex items-center justify-center">
                {artwork ? (
                    <img
                        src={artwork}
                        alt={`${name} artwork`}
                        className="w-full h-full object-cover rounded-md"
                    />
                ) : null}
            </div>

            {/* Info */}
            <div className="text-center md:text-left self-start">
                <h3 className="text-4xl font-normal">{position}</h3>
                <h2 className="text-5xl font-bold" style={{ color: colour }}>
                    {name}
                </h2>
                <p className="text-[1.5rem] mt-2">{info}</p>
            </div>
        </div>
    );
}
