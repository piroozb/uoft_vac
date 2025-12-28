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

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="w-full">
            <div className="relative w-full aspect-square max-w-full md:max-w-sm lg:max-w-md mx-auto overflow-hidden shadow-lg rounded-md">
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

            {/* Navigation Buttons */}
            {hasMultiple && (
                <>
                    <button
                        onClick={handlePrev}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-transparent border-none cursor-pointer z-10"
                    >
                        <img src="/carousel-arrow-l.png" alt="Previous" className="w-8 opacity-70 hover:opacity-100" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-transparent border-none cursor-pointer z-10"
                    >
                        <img src="/carousel-arrow-r.png" alt="Next" className="w-8 opacity-70 hover:opacity-100" />
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-2 left-0 w-full flex justify-center gap-2 z-10">
                        {images.map((_, idx) => (
                            <button
                            key={idx}
                            onClick={() => {
                                setDirection(idx > currentIndex ? 1 : -1);
                                setCurrentIndex(idx);
                            }}
                            className={`w-3 h-3 rounded-full transition-opacity ${
                                idx === currentIndex
                                ? "bg-white opacity-100"
                                : "bg-white opacity-50 hover:opacity-100"
                                }`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
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
        <div className="w-full text-left text-base md:text-lg">
            <motion.div
                ref={captionRef}
                initial={false}
                animate={{ maxHeight: expanded ? fullHeight : collapsedHeight }}
                transition={{ duration: 0.5, ease: [.25, 1, .5, 1] }}
                style={{ overflow: "hidden" }}
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
        <section className="w-full px-8 md:px-16 lg:px-32 my-10">
            <SectionTitle>Featured Post!</SectionTitle>

        {/* Picture & caption */}
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_1fr] max-w-screen-xl mx-auto gap-6 md:gap-12 items-start">
            <PictureCarousel images={images} />
            <Caption captionText={captionText} collapsedHeight={collapsedHeight} />
        </div>


        {/* Instagram link */}
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
