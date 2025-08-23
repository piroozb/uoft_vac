"use client";

import { useState, MouseEvent } from "react";

import {
    barsCentreGreen,
    pageButtonsLightYellow,
    subsectionSize,
    subsectionMargin,
} from "../common/Constants";
import SectionTitle from "../common/SectionTitle";
import { faqs } from "./FAQs";
import Question from "./Question";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleClick = (e: MouseEvent<HTMLDivElement>, index: number) => {
        const target = e.target as HTMLElement;
        if (target.closest("a")) return; // If clicking on a link, do not collapse.
        toggleFAQ(index);
    };

    return (
        // Green container
        <div
            className="max-w-7xl mx-auto rounded-2xl shadow-md p-10 my-10"
            style={{ backgroundColor: barsCentreGreen }}
        >
            {/* Title */}
            <SectionTitle size={subsectionSize} margin={subsectionMargin}>
                Frequently Asked Questions
            </SectionTitle>

            {/* Yellow container */}
            <div
                className="rounded-xl mt-10 p-5"
                style={{ backgroundColor: pageButtonsLightYellow }}
            >
                {/* Map the data in FAQs.tsx using the Question.tsx component. */}
                {faqs.map((faq, i) => (
                    <Question
                        key={i}
                        q={faq.q}
                        a={faq.a}
                        isOpen={openIndex === i}
                        index={i}
                        onClick={(e) => handleClick(e, i)}
                    />
                ))}
            </div>
        </div>
    );
}
