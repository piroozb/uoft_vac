"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import Title from "../Title";
import TextLink from "../TextLink";

const images = ["bg-red-500", "bg-blue-500", "bg-yellow-500"];

export default function FeaturedPost() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [expanded, setExpanded] = useState(false);
    const [fullHeight, setFullHeight] = useState(0);
    const [needsExpand, setNeedsExpand] = useState(false);

    const captionRef = useRef<HTMLDivElement>(null);

    const captionText = "clean my bellay ".repeat(100).trim();
    const collapsedHeight = 288;

    const toggleExpanded = () => setExpanded(prev => !prev);

    const hasMultiple = images.length > 1;

    const slideTransition = {
        duration: 0.4,
        ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
    };

    // Measure full caption height and check overflow.
    useLayoutEffect(() => {
        if (captionRef.current) {
            const scrollH = captionRef.current.scrollHeight;
            setFullHeight(scrollH);
            setNeedsExpand(scrollH > collapsedHeight);
        }
    }, [captionText]);

    return (
        <section className="w-full px-8 py-16">
            {/* Title */}
            <Title>Featured Post!</Title>

            <div className="grid grid-cols-[auto_1fr] max-w-screen-lg mx-auto gap-16 items-start">
                {/* Image Carousel */}
                <div className="relative w-80 h-80 flex items-center justify-center overflow-visible row-span-1">
                    <div className="relative w-72 h-72 overflow-hidden shadow-lg rounded-md">
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
                            <button
                                onClick={() => {
                                    setDirection(-1);
                                    setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
                                }}
                                className="absolute left-[-2rem] top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white shadow"
                            >
                                <FaChevronLeft size={16} />
                            </button>

                            <button
                                onClick={() => {
                                    setDirection(1);
                                    setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
                                }}
                                className="absolute right-[-2rem] top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white shadow"
                            >
                                <FaChevronRight size={16} />
                            </button>

                            <div className="absolute -bottom-3 flex gap-2 justify-center w-full">
                                {images.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${currentIndex === idx ? "bg-gray-700" : "bg-gray-300"}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Caption with expand/collapse. */}
                <div className="text-left text-lg relative col-start-2 row-span-2">
                    <motion.div
                        ref={captionRef}
                        initial={false}
                        animate={{
                            maxHeight: expanded ? fullHeight : collapsedHeight,
                        }}
                        transition={{
                            duration: 0.5,
                            ease: [.25, 1, .5, 1] // Fast to slow transition.
                        }}
                        style={{
                            overflow: "hidden"
                        }}
                    >
                        {captionText}
                    </motion.div>

                    {needsExpand && (
                        <button
                            onClick={toggleExpanded}
                            className="mt-2 text-blue-600 underline hover:opacity-80"
                        >
                            {expanded ? "Show less" : "... more"}
                        </button>
                    )}

                    <p className="text-sm text-gray-500 mt-2">1 day ago</p>
                </div>
            </div>

            {/* Instagram Link */}
            <div className="mt-16 text-center text-xl">
                <p>
                    Wanna see more? Visit our{" "}
                    <TextLink
                        text="Instagram"
                        href="https://www.instagram.com/uoft_vac"
                        className="text-blue-600"
                    />
                    {" "}page!
                </p>
            </div>
        </section>
    );
}
