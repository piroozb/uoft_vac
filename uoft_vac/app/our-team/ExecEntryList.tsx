"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
                <AnimatePresence>
                    {expanded && (

                        // Gray background
                        <motion.div
                            className="fixed inset-0 bg-gray-900/60 flex items-center justify-center z-[101] cursor-pointer"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.1 }}
                            onClick={() => setExpanded(false)}
                        >

                            {/* Full artwork */}
                            <motion.img
                                src={`/exec-artworks/${entryKey}.jpg`}
                                alt={`${name}'s artwork enlarged`}
                                className="max-w-[75%] max-h-[75%] object-contain rounded-md shadow-lg"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 0.1,
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                }}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

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

                    {/* Study */}
                    <p className="text-[1.3rem] mt-4">{study}</p>

                    {/* Medium */}
                    <p className="text-[1.3rem] mt-4">Favourite medium: {medium}</p>

                    {/* Fun fact */}
                    <p className="text-[1.5rem] mt-4">{fact}</p>
                </div>
            </div>
        </>
    );
}
