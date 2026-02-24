"use client";

import Image from "next/image";
import { useState, MouseEvent } from "react";

import {
    BARS_CENTRE_GREEN,
    PAGE_BUTTONS_PASSIVE_YELLOW,
} from "../common/Constants";
import { useIsMobile } from "../layout/IsMobile";
import SectionTitle from "../common/SectionTitle";
import { faqs } from "./FAQs";
import Question from "./Question";

export default function FAQSection() {
    const isMobile = useIsMobile()

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
        <div className="mt-5 flex flex-col items-center">

            {/* Section title */}
            <SectionTitle height="min(5rem,7cqw)">
                Frequently Asked Questions
            </SectionTitle>

            {/* Container top */}
            <div className={`${!isMobile && "mx-[5cqw]"}`}>
                <Image
                    src="/faq-container-top.png"
                    alt="Frodo Head"
                    className=" object-contain"
                    width={2000} height={0}
                />
            </div>
            
            {/* Green container */}
            <div
                className={`${!isMobile ? "mx-[5cqw] px-10" : "px-5"}`}
                style={{ backgroundColor: BARS_CENTRE_GREEN }}
            >

                {/* Yellow container */}
                <div
                    className={`px-5 ${!isMobile ? "rounded-3xl" : "rounded-2xl"}`}
                    style={{ backgroundColor: PAGE_BUTTONS_PASSIVE_YELLOW }}
                >

                    {/* Map the data in FAQs.tsx using the Question.tsx component. */}
                    {faqs.map((faq, i) => (
                        <Question
                            key={i}
                            question={faq.question}
                            answer={faq.answer}
                            isExpanded={openIndex === i}
                            index={i}
                            onClick={(e) => handleClick(e, i)}
                        />
                    ))}
                </div>
            </div>

            {/* Container bottom */}
            <div className={`${!isMobile && "mx-[5cqw]"}`}>
                <Image
                    src="/faq-container-bot.png"
                    alt="Frodo butt"
                    className=" object-contain"
                    width={2000} height={0}
                />
            </div>
        </div>
        
    );
}
