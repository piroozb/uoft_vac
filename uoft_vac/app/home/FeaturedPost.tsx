"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
    INSTAGRAM_LINK,
    EASE_OUT,
} from "../common/Constants";
import { useIsMobile } from "../layout/UseIsMobile";
import SectionTitle from "../common/SectionTitle";
import TextLink from "../common/TextLink";
import ExpandableImageCarousel from "../common/ExpandableImageCarousel";
import { ExpandableText } from "../common/ExpandableText";

const CAPTION_COLLAPSED_HEIGHT = 400;

export default function FeaturedPost() {
    const isMobile = useIsMobile();

    const [images, setImages] = useState<string[] | null>(null);
    const [captionText, setCaptionText] = useState<string>("Some words? 🧐");
    const [timestamp, setTimestamp] = useState<string | null>(null);
    const [captionExpanded, setCaptionExpanded] = useState(false);

    // Fetch data
    useEffect(() => {
        fetch("/api/featured-post")
            .then(res => res.json())
            .then(data => {
                setImages(data.images);
                setCaptionText(data.caption);
                setTimestamp(data.timestamp);
            })
            .catch(console.error);
    }, []);

    // ExpandableText hook
    const { ref, fullHeight, needsExpand } =
        ExpandableText<HTMLDivElement>(
            captionExpanded,
            CAPTION_COLLAPSED_HEIGHT,
            [captionText, CAPTION_COLLAPSED_HEIGHT]
        );

    // Timestamp logic
    let timestampText = "Some time ago? 🧐";

    if (timestamp) {
        const diff = Date.now() - new Date(timestamp).getTime();
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0)
            timestampText = `${days} day${days === 1 ? "" : "s"} ago`;
        else if (hours > 0)
            timestampText = `${hours} hour${hours === 1 ? "" : "s"} ago`;
        else if (minutes > 0)
            timestampText = `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
        else
            timestampText = "Just now";
    }

    return (
        <section
            className="mt-5 flex flex-col items-center"
            style={{ containerType: "inline-size" }}
        >

            {/* Section title */}
            <SectionTitle>Featured Post!</SectionTitle>

            <div
                className={`mt-10 grid ${!isMobile
                    ? "mx-[5cqw] gap-20 grid-cols-[auto_1fr]"
                    : "m-10 gap-10"}`}
            >

                {/* Expandable image carousel */}
                {images && images.length > 0 && (
                    <ExpandableImageCarousel
                        images={images}
                        alt="Featured Post"
                        normalSize="w-[clamp(0rem,25rem,70vw)]"
                    />
                )}

                <div>

                    {/* Caption */}
                    <div className="text-left text-[1.25rem]">
                        <motion.div
                            ref={ref}
                            className="overflow-hidden whitespace-pre-line"
                            transition={{ duration: .5, ease: EASE_OUT }}
                            animate={{
                                maxHeight: captionExpanded
                                    ? fullHeight
                                    : CAPTION_COLLAPSED_HEIGHT
                            }}
                        >
                            {captionText}
                        </motion.div>

                        {/* Expand/collapse prompt */}
                        {needsExpand && (
                            <button
                                onClick={() => setCaptionExpanded(prev => !prev)}
                                className="mt-2.5 text-blue-600 underline hover:opacity-80"
                            >
                                {captionExpanded ? "Show less" : "... more"}
                            </button>
                        )}
                    </div>

                    {/* Timestamp */}
                    <p className="mt-5 text-[1rem] text-gray-500">
                        {timestampText}
                    </p>
                </div>
            </div>

            {/* Wanna see more? */}
            <div
                className={`mx-10 text-[1.5rem]
                ${!isMobile && "mt-10"}`}
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
