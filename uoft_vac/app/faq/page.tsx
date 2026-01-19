"use client";

import { useState, MouseEvent } from "react";

import {
    BARS_CENTRE_GREEN,
    PAGE_BUTTONS_PASSIVE_YELLOW,
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
            className="mx-[5cqw] my-10 p-10 rounded-4xl shadow-lg"
            style={{
                backgroundColor: BARS_CENTRE_GREEN,
                containerType: "inline-size",
            }}
        >

            {/* Title */}
            <SectionTitle size="5cqw">
                Frequently Asked Questions
            </SectionTitle>

            {/* Yellow container */}
            <div
                className="mt-10 px-5 rounded-3xl shadow-lg"
                style={{ backgroundColor: PAGE_BUTTONS_PASSIVE_YELLOW }}
            >

                {/* Map the data in FAQs.tsx using the Question.tsx component. */}
                {faqs.map((faq, i) => (
                    <Question
                        key={i}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === i}
                        index={i}
                        onClick={(e) => handleClick(e, i)}
                    />
                ))}
            </div>
        </div>
    );
}
