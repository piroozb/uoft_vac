import { ReactNode, MouseEvent } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

import { BARS_EDGES_DARK_GREEN } from "../common/Constants";
import { useExpandableHeight } from "../common/ExpandableText";

interface QuestionProps {
    question: string;
    answer: ReactNode;
    isOpen: boolean;
    onClick: (e: MouseEvent<HTMLDivElement>) => void;
    index: number;
}

export default function Question({
    question,
    answer,
    isOpen,
    onClick,
    index,
}: QuestionProps) {
    const { ref, fullHeight } =
        useExpandableHeight<HTMLDivElement>(
            isOpen,
            0,
            [answer]
        );

    return (
        <div
            className="p-5 cursor-pointer"
            onClick={onClick}
            style={{
                borderTop: index === 0
                    ? "none"
                    : `1px solid ${BARS_EDGES_DARK_GREEN}`,
            }}
        >
            {/* Question */}
            <div className="mb-5 flex justify-between items-center">
                <span className="text-[1.5rem] font-semibold">
                    {question}
                </span>

                {isOpen ? (
                    <FaChevronRight
                        className="w-5 h-5"
                        style={{ color: BARS_EDGES_DARK_GREEN }}
                    />
                ) : (
                    <FaChevronDown
                        className="w-5 h-5"
                        style={{ color: BARS_EDGES_DARK_GREEN }}
                    />
                )}
            </div>

            {/* Expand / collapse */}
            <motion.div
                ref={ref}
                initial={false}
                animate={{
                    maxHeight: isOpen ? fullHeight : 0,
                    opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="overflow-hidden"
            >
                <div className="text-[1.25rem]">
                    {answer}
                </div>
            </motion.div>
        </div>
    );
}
