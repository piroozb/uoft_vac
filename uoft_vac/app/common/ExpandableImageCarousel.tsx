"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
    COMMON_EASE_OUT,
} from "./Constants";
import { useIsMobile } from "../layout/UseIsMobile";

const NAV_BUTTONS_IMAGE_CLASSNAME = "w-[min(2rem,8cqw)] opacity-70 hover:opacity-100";

// Image Carousel
function ImageCarousel({
    images, // If testing, will be a list of classNames for square divs.
    alt,
    imageSize,
    index,
    direction,
    isExpanded = false,
    setIndex,
    setDirection,
    onImageClick,
    isTest = false,
} : {
    images: string[];
    alt: string;
    imageSize?: string;
    index: number;
    direction: number;
    isExpanded?: boolean;
    setIndex: React.Dispatch<React.SetStateAction<number>>;
    setDirection: React.Dispatch<React.SetStateAction<number>>;
    onImageClick?: () => void;
    isTest?: boolean;
}) {
    const isSmaller = useIsMobile(true);

    const multipleImages = images.length > 1;

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        setDirection(-1);
        setIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setDirection(1);
        setIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="flex justify-center items-center">

            {/* Size wrapper */}
            <div className={`relative ${!isExpanded
                ? `${imageSize} aspect-square`
                : `${!multipleImages ? "w-[90vw]" : "w-[80vw]"} h-[90vh]`}`}
            >

                {/* Image */}
                <div
                    className={`w-full h-full ${!isExpanded && "rounded-lg shadow-lg"} relative overflow-hidden
                        ${onImageClick ? "cursor-pointer" : ""}`}
                    onClick={onImageClick}
                >
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={index}
                            className="absolute inset-0"
                            custom={direction}
                            variants={{
                                enter: (dir: number) => ({
                                    x: dir > 0 ? "100%" : "-100%",
                                }),
                                center: { x: "0%" },
                                exit: (dir: number) => ({
                                    x: dir > 0 ? "-100%" : "100%",
                                }),
                            }}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: .25, ease: COMMON_EASE_OUT }}
                        >

                            {/* If testing, use square divs with given classNames. */}
                            {isTest ? (<div className={`w-full h-full ${images[index]}`}/>
                            
                            // Otherwise, use images as usual.

                            // NORMAL VIEW
                            ) : !isExpanded ? (
                                <Image
                                    src={images[index]}
                                    alt={alt}
                                    className="object-cover"
                                    fill
                                />
                            
                            // EXPANDED VIEW
                            ) : (
                                <Image
                                    src={images[index]}
                                    alt={alt}
                                    className="w-full h-full object-contain"
                                    width={1000} height={0}
                                />
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Carousel interactors */}
                    {multipleImages && (
                        <div className="flex justify-center">

                            {/* Arrow buttons */}

                            {/* Previous */}
                            <button
                                onClick={handlePrev}
                                className="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer z-1"
                            >
                                <Image
                                    src="/carousel-arrow-l.png"
                                    alt="Previous"
                                    className={`${!isSmaller ? "-translate-x-3/2" : "translate-x-1/2"}
                                        ${NAV_BUTTONS_IMAGE_CLASSNAME}`}
                                    width={100} height={0}
                                />
                            </button>

                            {/* Next */}
                            <button
                                onClick={handleNext}
                                className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer z-1"
                            >
                                <Image
                                    src="/carousel-arrow-r.png"
                                    alt="Next"
                                    className={`${!isSmaller ? "translate-x-3/2" : "-translate-x-1/2"}
                                        ${NAV_BUTTONS_IMAGE_CLASSNAME}`}
                                    width={100} height={0}
                                />
                            </button>

                            {/* Dots */}
                            <div className="gap-2.5 flex absolute bottom-0 cursor-pointer z-1">
                                {images.map((_, idx) => (
                                    <img
                                        key={idx}
                                        src="/carousel-dot.png"
                                        alt={`Go to image ${idx + 1}`}
                                        className={`w-[min(.7rem,3cqw)]
                                            ${!isSmaller ? "translate-y-2/1" : "-translate-y-1/1"}
                                            ${index === idx ? "opacity-100" : "opacity-50 hover:opacity-100"}`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setDirection(idx > index ? 1 : -1);
                                            setIndex(idx);
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
}

export default function ExpandableImageCarousel({
    images,
    alt = "Loading image(s)… 🧐",
    normalSize,
    isTest = false,
} : {
    images: string[];
    alt?: string;
    normalSize: string;
    isTest?: boolean;
}) {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [expanded, setExpanded] = useState(false);

    return (
        <>

            {/* NORMAL VIEW */}
            <ImageCarousel
                images={images}
                alt={alt}
                imageSize={normalSize}
                index={index}
                direction={direction}
                setIndex={setIndex}
                setDirection={setDirection}
                onImageClick={() => setExpanded(true)}
                isTest={isTest}
            />

            {/* EXPANDED VIEW */}
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        className="fixed inset-0 bg-gray-900/60 flex items-center justify-center z-200"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        onClick={() => setExpanded(false)}
                    >
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                            }}
                        >
                            <ImageCarousel
                                images={images}
                                alt={`${alt} (Full)`}
                                index={index}
                                direction={direction}
                                isExpanded
                                setIndex={setIndex}
                                setDirection={setDirection}
                                isTest={isTest}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
