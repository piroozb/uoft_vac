"use client";

import { useState, useRef, useLayoutEffect, MouseEvent } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

import {
    barsEdgesDarkGreen,
    barsCentreGreen,
    pageButtonsLightYellow,
    subsectionSize,
    subsectionMargin,
} from "../common/Constants";
import SectionTitle from "../common/SectionTitle";
import { faqs } from "./FAQs";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [heights, setHeights] = useState<number[]>([]);
    const refs = useRef<(HTMLDivElement | null)[]>([]);

    useLayoutEffect(() => {
        const newHeights = refs.current.map((el) => el?.scrollHeight ?? 0);
        setHeights(newHeights);
    }, [faqs]);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleClick = (e: MouseEvent<HTMLDivElement>, index: number) => {
        // If the click target is a link (or inside a link), do nothing
        const target = e.target as HTMLElement;
        if (target.closest("a")) {
            return;
        }
        toggleFAQ(index);
    };

    return (
        <div
            className="max-w-7xl mx-auto rounded-2xl shadow-md p-10 my-10"
            style={{ backgroundColor: barsCentreGreen }}
        >
            <SectionTitle size={subsectionSize} margin={subsectionMargin}>
                Frequently Asked Questions
            </SectionTitle>

            <div
                className="rounded-xl mt-10 p-5"
                style={{ backgroundColor: pageButtonsLightYellow }}
            >
                {faqs.map((faq, i) => (
                    <div
                        key={i}
                        className="p-5 cursor-pointer"
                        onClick={(e) => handleClick(e, i)}
                        style={{
                            borderTop: i === 0 ? "none" : `1px solid ${barsEdgesDarkGreen}`,
                        }}
                    >
                        <div className="flex justify-between items-center">
                            <span className="text-[1.5rem] font-semibold">{faq.q}</span>
                            {openIndex === i ? (
                                <FaChevronRight
                                    className="w-5 h-5"
                                    style={{ color: barsEdgesDarkGreen }}
                                />
                            ) : (
                                <FaChevronDown
                                    className="w-5 h-5"
                                    style={{ color: barsEdgesDarkGreen }}
                                />
                            )}
                        </div>

                        {/* Animated Answer */}
                        <motion.div
                            ref={(el) => (refs.current[i] = el)}
                            initial={false}
                            animate={{
                                maxHeight: openIndex === i ? heights[i] : 0,
                                opacity: openIndex === i ? 1 : 0,
                            }}
                            transition={{
                                duration: 0.5,
                                ease: [0.25, 1, 0.5, 1],
                            }}
                            style={{
                                overflow: "hidden",
                            }}
                            className="mt-5"
                        >
                            <div className="text-[1.25rem] text-sm">{faq.a}</div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}
