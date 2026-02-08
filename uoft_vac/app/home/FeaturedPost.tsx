"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { INSTAGRAM_LINK } from "../common/Constants";
import { useIsMobile } from "../layout/IsMobile";
import SectionTitle from "../common/SectionTitle";
import TextLink from "../common/TextLink";
import { ExpandableText } from "../common/ExpandableText";

const NAV_BUTTONS_IMAGE_CLASSNAME = "w-7.5 opacity-70 hover:opacity-100";

function ImageCarousel({ images }: { images: string[] }) {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideTransition = {
        duration: 0.4,
        ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
    };

    const handlePrev = () => {
        setDirection(-1);
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setDirection(1);
        setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="flex flex-col items-center gap-5">

            {/* Row: nav buttons & picture */}
            <div className="flex gap-5">

                {/* Previous */}
                <button
                    onClick={handlePrev}
                    className="cursor-pointer"
                >
                    <Image
                        src="/carousel-arrow-l.png"
                        alt="Previous"
                        className={NAV_BUTTONS_IMAGE_CLASSNAME}
                        width={100} height={0}
                    />
                </button>

                {/* Images */}
                <div className="w-[clamp(0rem,25rem,70vw)] aspect-square rounded-md shadow-lg overflow-hidden relative">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={index}
                            className="absolute w-full h-full"
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
                        >
                            <Image
                                src={images[index]}
                                alt="Instagram post image"
                                className="object-cover"
                                fill
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Next */}
                <button
                    onClick={handleNext}
                    className="cursor-pointer"
                >
                    <Image
                        src="/carousel-arrow-r.png"
                        alt="Next"
                        className={NAV_BUTTONS_IMAGE_CLASSNAME}
                        width={100} height={0}
                    />
                </button>
            </div>

            {/* Dots */}
            <div className="flex gap-2.5 cursor-pointer">
                {images.map((_, idx) => (
                    <img
                        key={idx}
                        src="/carousel-dot.png"
                        alt={`Go to image ${idx + 1}`}
                        className={`w-2.5 ${
                            index === idx ? "opacity-100" :
                            "opacity-50 hover:opacity-100"} duration-100`}
                        onClick={() => {
                            setDirection(idx > index ? 1 : -1);
                            setIndex(idx);
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

const CAPTION_COLLAPSED_HEIGHT = 400;

function Caption({ captionText }: { captionText: string }) {
    const [expanded, setExpanded] = useState(false);

    const { ref, fullHeight, needsExpand } =
        ExpandableText<HTMLDivElement>(
            expanded,
            CAPTION_COLLAPSED_HEIGHT,
            [captionText, CAPTION_COLLAPSED_HEIGHT]
        );

    return (
        <div className="text-left text-[1.25rem]">
            <motion.div
                ref={ref}
                initial={false}
                animate={{
                    maxHeight: expanded ? fullHeight : CAPTION_COLLAPSED_HEIGHT,
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
    const mobile = useIsMobile();
    const [images, setImages] = useState<string[] | null>(null);
    const [captionText, setCaptionText] = useState<string>("");

    // Fetch data from the latest Instagram post.
    useEffect(() => {
    fetch("/api/featured-post")
        .then(res => res.json())
        .then(data => {
        setImages(data.images);
        setCaptionText(data.caption);
        })
        .catch(console.error);
    }, []);

    return (
        <section
            className="mt-10 flex flex-col items-center"
            style={{ containerType: "inline-size" }}
        >
            {/* Title */}
            <SectionTitle>Featured Post!</SectionTitle>

            {/* Picture & caption */}
            <div
                className={`mt-5 grid
                ${mobile ? "m-10 gap-10" : "mx-[5cqw] gap-20 grid-cols-[auto_1fr]"}`}
            >
                {images && images.length > 0 && (
                    <ImageCarousel images={images} />
                )}
                <Caption captionText={captionText}/>
            </div>

            {/* Wanna see more? */}
            <div
                className={`mx-10 text-[1.5rem]
                ${mobile ? "" : "mt-10"}`}
            >
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
