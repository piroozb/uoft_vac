"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ArtworkCarouselProps {
    images: string[];
    alt?: string;
    size?: string;
}

const NAV_BUTTONS_IMAGE_CLASSNAME = "w-7.5 opacity-70 hover:opacity-100";

// Image Carousel
function ImageCarousel({
    images,
    alt,
    size,
    index,
    direction,
    setIndex,
    setDirection,
    onImageClick,
    isSquare = true,
    imageFit = "object-cover",
}: {
    images: string[];
    alt: string;
    size: string;
    index: number;
    direction: number;
    setIndex: React.Dispatch<React.SetStateAction<number>>;
    setDirection: React.Dispatch<React.SetStateAction<number>>;
    onImageClick?: () => void;
    isSquare?: boolean;
    imageFit?: string;
}) {
    const multipleImages = images.length > 1;

    const handlePrev = () => {
        setDirection(-1);
        setIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setDirection(1);
        setIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="flex flex-col items-center gap-5">
            <div className="flex gap-5 items-center">

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
                    className={`${size} ${isSquare ? "aspect-square" : ""} rounded-md shadow-lg overflow-hidden relative
                        ${onImageClick ? "cursor-pointer" : ""}`}
                    onClick={onImageClick}
                >
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={index}
                            className="absolute w-full h-full"
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
                            transition={{
                                duration: 0.25,
                                ease: [0.25, 1, 0.5, 1],
                            }}
                        >
                            <Image
                                src={images[index]}
                                alt={alt}
                                className={imageFit}
                                fill
                            />
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
                            onClick={() => {
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
    size = "w-75",
}: ArtworkCarouselProps) {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            {/* Normal view */}
            <ImageCarousel
                images={images}
                alt={alt}
                size={size}
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
                            onClick={(e) => e.stopPropagation()}
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
                                size="w-100 h-100"
                                index={index}
                                direction={direction}
                                setIndex={setIndex}
                                setDirection={setDirection}
                                isSquare ={false}
                                imageFit="object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
