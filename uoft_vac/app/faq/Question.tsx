"use client";

import {
    ReactNode,
    MouseEvent,
    useRef,
    useState,
    useLayoutEffect,
    useEffect,
} from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

import { BARS_EDGES_DARK_GREEN } from "../common/Constants";

interface QuestionProps {
    question: string;
    answer: ReactNode;
    isOpen: boolean;
    onClick: (e: MouseEvent<HTMLDivElement>) => void;
    index: number;
}

export default function Question({ question, answer, isOpen, onClick, index }: QuestionProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [height, setHeight] = useState(0);

    // Additional calculated height for expanded answers.
    const measureHeight = () => {
        if (ref.current) {
            setHeight(ref.current.scrollHeight);
        }
    };

    // Measure on expand / collapse.
    useLayoutEffect(() => {
        measureHeight();
    }, [answer]);

    // Measure on window resize.
    useEffect(() => {
        if (!isOpen) return;

        window.addEventListener("resize", measureHeight);
        return () => window.removeEventListener("resize", measureHeight);
    }, [isOpen]);

    return (
        <div
            className="p-5 cursor-pointer"
            onClick={onClick}
            style={{
                borderTop: index === 0 ? "none" : `1px solid ${BARS_EDGES_DARK_GREEN}`,
            }}
        >
            {/* Question */}
            <div className="mb-5 flex justify-between items-center">
                <span className="text-[1.5rem] font-semibold">{question}</span>

                {isOpen ? (
                    <FaChevronRight className="w-5 h-5" style={{ color: BARS_EDGES_DARK_GREEN }} />
                ) : (
                    <FaChevronDown className="w-5 h-5" style={{ color: BARS_EDGES_DARK_GREEN }} />
                )}
            </div>

            {/* Expand / collapse */}
            <motion.div
                ref={ref}
                initial={false}
                animate={{
                    maxHeight: isOpen ? height : 0,
                    opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="overflow-hidden"
            >
                {/* Answer */}
                <div className="text-[1.25rem]">{answer}</div>
            </motion.div>
        </div>
    );
}
