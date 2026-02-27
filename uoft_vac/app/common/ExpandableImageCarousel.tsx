"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { EASE_OUT } from "./Constants";

const NAV_BUTTONS_IMAGE_CLASSNAME = "w-7.5 opacity-70 hover:opacity-100";

// Image Carousel
function ImageCarousel({
    images,
    alt,
    imageSize,
    index,
    direction,
    isExpanded = false,
    setIndex,
    setDirection,
    onImageClick,
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
}) {
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
        <div className="gap-5 flex flex-col items-center">
            <div className="gap-5 flex items-center">

                {/* Previous */}
                {multipleImages && (
                    <button onClick={handlePrev}>
                        <Image
                            src="/carousel-arrow-l.png"
                            alt="Previous"
                            className={NAV_BUTTONS_IMAGE_CLASSNAME}
                            width={100} height={0}
                        />
                    </button>
                )}

                {/* Image */}
                <div
                    className={`${isExpanded ? "" : `${imageSize} aspect-square rounded-lg shadow-xl`} relative overflow-hidden
                        ${onImageClick ? "cursor-pointer" : ""}`}
                    onClick={onImageClick}
                >
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={index}
                            className={`${isExpanded ? "" : "absolute"} w-full h-full`}
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
                            transition={{ duration: .25, ease: EASE_OUT }}
                        >
                            {isExpanded ? (
                                <Image
                                    src={images[index]}
                                    alt={alt}
                                    className={`max-w-[90vw] max-h-[90vh] ${multipleImages ? "w-auto h-auto" : ""} object-contain`}
                                    width={1000} height={0}
                                />
                            ) : (
                                <Image
                                    src={images[index]}
                                    alt={alt}
                                    className="object-cover"
                                    fill
                                />
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Next */}
                {multipleImages && (
                    <button onClick={handleNext}>
                        <Image
                            src="/carousel-arrow-r.png"
                            alt="Next"
                            className={NAV_BUTTONS_IMAGE_CLASSNAME}
                            width={100} height={0}
                        />
                    </button>
                )}
            </div>

            {/* Dots */}
            {multipleImages && (
                <div className="flex gap-2.5 cursor-pointer">
                    {images.map((_, idx) => (
                        <img
                            key={idx}
                            src="/carousel-dot.png"
                            alt={`Go to image ${idx + 1}`}
                            className={`w-2.5 ${
                                index === idx
                                    ? "opacity-100"
                                    : "opacity-50 hover:opacity-100"
                            } duration-100`}
                            onClick={(e) => {
                                e.stopPropagation();
                                setDirection(idx > index ? 1 : -1);
                                setIndex(idx);
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function ExpandableImageCarousel({
    images,
    alt = "An image… 🧐",
    normalSize,
} : {
    images: string[];
    alt?: string;
    normalSize: string;
}) {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [expanded, setExpanded] = useState(false);

    return (
        <>

            {/* Normal view */}
            <ImageCarousel
                images={images}
                alt={alt}
                imageSize={normalSize}
                index={index}
                direction={direction}
                setIndex={setIndex}
                setDirection={setDirection}
                onImageClick={() => setExpanded(true)}
            />

            {/* Expanded view */}
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        className="fixed inset-0 bg-gray-900/60 flex items-center justify-center z-[101]"
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
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
