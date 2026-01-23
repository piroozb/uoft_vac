"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { INSTAGRAM_LINK } from "../common/Constants";
import SectionTitle from "../common/SectionTitle";
import TextLink from "../common/TextLink";
import { useExpandableHeight } from "../common/ExpandableText";

const NAV_BUTTONS_CLASSNAME = "top-1/2 absolute cursor-pointer";
const NAV_BUTTONS_IMG_CLASSNAME = "w-7.5 opacity-70 hover:opacity-100";

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
        <div className="flex justify-center relative">

            {/* Picture */}
            <div className="w-100 h-100 overflow-hidden rounded-md shadow-lg relative">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        className={`absolute w-full h-full ${images[currentIndex]}`}
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

            {/* Navigation buttons */}
            {hasMultiple && (
                <>

                    {/* Left */}
                    <button
                        onClick={handlePrev}
                        className={`left-[-40] ${NAV_BUTTONS_CLASSNAME}`}
                    >
                        <img
                            src="/carousel-arrow-l.png"
                            alt="Previous"
                            className={NAV_BUTTONS_IMG_CLASSNAME}
                        />
                    </button>

                    {/* Right */}
                    <button
                        onClick={handleNext}
                        className={`right-[-40] ${NAV_BUTTONS_CLASSNAME}`}
                    >
                        <img
                            src="/carousel-arrow-r.png"
                            alt="Next"
                            className={NAV_BUTTONS_IMG_CLASSNAME}
                            />
                    </button>

                    {/* Dots */}
                    <div className="-bottom-7.5 gap-2.5 flex justify-center absolute cursor-pointer">
                        {images.map((_, idx) => (
                            <img
                                key={idx}
                                src="/carousel-dot.png"
                                alt={`Go to image ${idx + 1}`}
                                className={`w-2.5 transition-opacity duration-200 ${currentIndex === idx
                                        ? "opacity-100"
                                        : "opacity-50 hover:opacity-100"
                                    }`}
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

function Caption({
    captionText,
    collapsedHeight,
}: {
    captionText: string;
    collapsedHeight: number;
}) {
    const [expanded, setExpanded] = useState(false);

    const { ref, fullHeight, needsExpand } =
        useExpandableHeight<HTMLDivElement>(
            expanded,
            collapsedHeight,
            [captionText, collapsedHeight]
        );

    return (
        <div className="text-left text-[1.25rem]">
            <motion.div
                ref={ref}
                initial={false}
                animate={{
                    maxHeight: expanded ? fullHeight : collapsedHeight,
                }}
                transition={{ duration: 0.5, ease: [.25, 1, .5, 1] }}
                style={{ overflow: "hidden" }}
            >
                {captionText}
            </motion.div>

            {/* Expand/collapse prompt */}
            {needsExpand && (
                <button
                    onClick={() => setExpanded(prev => !prev)}
                    className="mt-2.5 text-blue-600 underline hover:opacity-80"
                >
                    {expanded ? "Show less" : "... more"}
                </button>
            )}

            {/* Time */}
            <p className="text-[1rem] text-gray-500 mt-2.5">1 day ago</p>
        </div>
    );
}

export default function FeaturedPost() {
    const images = ["bg-red-500", "bg-blue-500", "bg-yellow-500"];
    const captionText = "clean my bellay ".repeat(100).trim();
    const collapsedHeight = 400;

    return (
        <section
            className="mt-10"
            style={{ containerType: "inline-size" }}
        >
            {/* Title */}
            <SectionTitle>Featured Post!</SectionTitle>

        {/* Picture & caption */}
        <div className="mt-5 mx-[5cqw] gap-20 grid md:grid-cols-[auto_1fr] items-start">
            <PictureCarousel images={images} />
            <Caption captionText={captionText} collapsedHeight={collapsedHeight} />
        </div>

            {/* Wanna see more? */}
            <div className="mt-10 text-[1.5rem] text-center">
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
