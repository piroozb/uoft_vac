"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { INSTAGRAM_LINK } from "../common/Constants";
import SectionTitle from "../common/SectionTitle";
import TextLink from "../common/TextLink";

function PictureCarousel({ images }: { images: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const hasMultiple = images.length > 1;

    const slideTransition = {
        duration: 0.4,
        ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
    };

    return (
        <div className="relative w-100 h-100 flex items-center justify-center overflow-visible row-span-1">
            {/* Picture */}
            <div className="relative w-90 h-90 overflow-hidden shadow-lg rounded-md">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        className={`absolute top-0 left-0 w-full h-full ${images[currentIndex]}`}
                        custom={direction}
                        variants={{
                            enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%" }),
                            center: { x: "0%" },
                            exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%" }),
                        }}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={slideTransition}
                    />
                </AnimatePresence>
            </div>

            {hasMultiple && (
                <>
                    {/* Left Button */}
                    <button
                        onClick={() => {
                            setDirection(-1);
                            setCurrentIndex((prev) =>
                                prev === 0 ? images.length - 1 : prev - 1
                            );
                        }}
                        className="absolute left-[-2rem] top-1/2 transform -translate-y-1/2 p-2"
                        style={{
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        <img
                            src="/carousel-arrow-l.png"
                            alt="Previous image"
                            className="opacity-70 hover:opacity-100 transition-opacity duration-200"
                            style={{ width: "2rem", height: "auto" }}
                        />
                    </button>

                    {/* Right Button */}
                    <button
                        onClick={() => {
                            setDirection(1);
                            setCurrentIndex((prev) =>
                                prev === images.length - 1 ? 0 : prev + 1
                            );
                        }}
                        className="absolute right-[-2rem] top-1/2 transform -translate-y-1/2 p-2"
                        style={{
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        <img
                            src="/carousel-arrow-r.png"
                            alt="Next image"
                            className="opacity-70 hover:opacity-100 transition-opacity duration-200"
                            style={{ width: "2rem", height: "auto" }}
                        />
                    </button>

                    {/* Dots */}
                    <div className="absolute -bottom-3 flex gap-2 justify-center w-full">
                        {images.map((_, idx) => (
                            <img
                                key={idx}
                                src="/carousel-dot.png"
                                alt={`Go to image ${idx + 1}`}
                                className={`transition-opacity duration-200 ${currentIndex === idx
                                        ? "opacity-100"
                                        : "opacity-50 hover:opacity-100"
                                    }`}
                                style={{
                                    width: "0.75rem",
                                    height: "auto",
                                    cursor: "pointer",
                                }}
                                onClick={() => {
                                    setDirection(idx > currentIndex ? 1 : -1);
                                    setCurrentIndex(idx);
                                }}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

function Caption({ captionText, collapsedHeight }: { captionText: string, collapsedHeight: number }) {
    const [expanded, setExpanded] = useState(false);
    const [fullHeight, setFullHeight] = useState(0);
    const [needsExpand, setNeedsExpand] = useState(false);
    const captionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (captionRef.current) {
            const scrollH = captionRef.current.scrollHeight;
            setFullHeight(scrollH);
            setNeedsExpand(scrollH > collapsedHeight);
        }
    }, [captionText, collapsedHeight]);

    return (
        // Text
        <div className="text-left text-lg relative col-start-2 row-span-2">
            {/* Expand/collapse transition */}
            <motion.div
                ref={captionRef}
                initial={false}
                animate={{
                    maxHeight: expanded ? fullHeight : collapsedHeight,
                }}
                transition={{
                    duration: 0.5,
                    ease: [.25, 1, .5, 1]
                }}
                style={{
                    overflow: "hidden"
                }}
            >
                {captionText}
            </motion.div>

            {/* Expand/collapse prompt */}
            {needsExpand && (
                <button
                    onClick={() => setExpanded(prev => !prev)}
                    className="mt-2 text-blue-600 underline hover:opacity-80"
                >
                    {expanded ? "Show less" : "... more"}
                </button>
            )}

            {/* Time */}
            <p className="text-sm text-gray-500 mt-2">1 day ago</p>
        </div>
    );
}

export default function FeaturedPost() {
    const images = ["bg-red-500", "bg-blue-500", "bg-yellow-500"];
    const captionText = "clean my bellay ".repeat(100).trim();
    const collapsedHeight = 400;

    return (
        <section className="w-full px-8 my-10">
            {/* Title */}
            <SectionTitle>Featured Post!</SectionTitle>

            {/* Picture & caption */}
            <div className="grid grid-cols-[auto_1fr] max-w-screen-lg mx-auto gap-20 items-start">
                <PictureCarousel images={images} />
                <Caption captionText={captionText} collapsedHeight={collapsedHeight} />
            </div>

            {/* Wanna see more? */}
            <div className="mt-10 text-center text-xl">
                <p>
                    Wanna see more? Visit our{" "}
                    <TextLink
                        text="Instagram"
                        href={INSTAGRAM_LINK}
                        style={{ color: "blue" }}
                        hoverStyle={{ color: "blue" }}
                    />
                    {" "}page!
                </p>
            </div>
        </section>
    );
}
