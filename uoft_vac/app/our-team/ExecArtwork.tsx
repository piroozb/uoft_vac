"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ExecArtworkProps {
    name: string;
    size: number;
}

export default function ExecArtwork({ name, size }: ExecArtworkProps) {
    const [expanded, setExpanded] = useState(false);

    const SRC = `/exec-artworks/${name}.jpg`;
    const ALT = `${name}'s artwork`;

    return (
        <>
            {/* Collapsed artwork */}
            <div
                className="rounded-md overflow-hidden cursor-pointer"
                style={{ width: `${size}px`, height: `${size}px` }}
                onClick={() => setExpanded(true)}
            >
                <img
                    src={SRC}
                    alt={ALT}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                />
            </div>

            {/* Expanded artwork */}
            <AnimatePresence>
                {expanded && (
                    <motion.div

                        // Translucent gray background
                        className="fixed inset-0 bg-gray-900/60 flex items-center justify-center z-[101] cursor-pointer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1 }}
                        onClick={() => setExpanded(false)}
                    >

                        {/* Full artwork with animation */}
                        <motion.img
                            src={SRC}
                            alt={ALT}
                            className="max-w-[75%] max-h-[75%] rounded-md shadow-lg"
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
        </>
    );
}
