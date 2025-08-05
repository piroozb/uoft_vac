"use client";

import { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const images = ["bg-red-500", "bg-blue-500", "bg-yellow-500"];

export default function FeaturedPost() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [expanded, setExpanded] = useState(false);
    const [captionHeight, setCaptionHeight] = useState(0);

    const hiddenRef = useRef<HTMLDivElement>(null);

    const visibleLines = 3;

    useEffect(() => {
        if (hiddenRef.current) {
            setCaptionHeight(hiddenRef.current.scrollHeight);
        }
    }, [hiddenRef.current]);

    const toggleExpanded = () => {
        setExpanded((prev) => !prev);
    };

    const hasMultiple = images.length > 1;

    const captionText = "example caption ".repeat(50).trim();

    return (
        <section className="w-full px-8 py-16">
            <h2 className="text-8xl font-bold mb-12 text-center">Featured Post!</h2>

            <div className="flex flex-col md:flex-row items-start justify-center gap-16">
                {/* Image Carousel */}
                <div className="relative w-80 h-80 flex items-center justify-center rounded-md overflow-visible">
                    <div className="relative w-72 h-72 overflow-hidden rounded-md shadow-lg">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                className={`absolute w-full h-full ${images[currentIndex]} rounded-md`}
                                custom={direction}
                                initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            />
                        </AnimatePresence>
                    </div>

                    {hasMultiple && (
                        <>
                            <button
                                onClick={() => {
                                    setDirection(-1);
                                    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
                                }}
                                className="absolute left-[-2rem] top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white shadow"
                            >
                                <FaChevronLeft size={16} />
                            </button>

                            <button
                                onClick={() => {
                                    setDirection(1);
                                    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
                                }}
                                className="absolute right-[-2rem] top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white shadow"
                            >
                                <FaChevronRight size={16} />
                            </button>

                            <div className="absolute -bottom-3 flex gap-2 justify-center w-full">
                                {images.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${currentIndex === idx ? "bg-gray-700" : "bg-gray-300"
                                            }`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Caption */}
                <div className="max-w-xl text-left text-lg space-y-4 relative">
                    {/* Always-visible portion (same height whether expanded or not) */}
                    <div
                        className="overflow-hidden"
                        style={{
                            display: "-webkit-box",
                            WebkitLineClamp: visibleLines,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                        }}
                    >
                        {captionText}
                    </div>

                    {/* Expandable portion */}
                    <motion.div
                        initial={false}
                        animate={{ height: expanded ? captionHeight : 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                    >
                        <div ref={hiddenRef} className="mt-2">
                            {captionText}
                        </div>
                    </motion.div>

                    <button
                        onClick={toggleExpanded}
                        className="text-blue-600 underline hover:opacity-80"
                    >
                        {expanded ? "Show less" : "... more"}
                    </button>

                    <p className="text-sm text-gray-500">1 day ago</p>
                </div>
            </div>

            {/* Instagram Link */}
            <div className="mt-16 text-center text-xl">
                <p>
                    Wanna see more? Visit our{" "}
                    <a
                        href="https://www.instagram.com/uoft_vac"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline hover:opacity-80"
                    >
                        Instagram
                    </a>{" "}
                    page!
                </p>
            </div>
        </section>
    );
}
