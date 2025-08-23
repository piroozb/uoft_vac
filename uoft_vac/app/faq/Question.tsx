"use client";

import {
    ReactNode,
    MouseEvent,
    useRef,
    useState,
    useLayoutEffect
} from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

import { barsEdgesDarkGreen } from "../common/Constants";

interface QuestionProps {
    q: string;
    a: ReactNode;
    isOpen: boolean;
    onClick: (e: MouseEvent<HTMLDivElement>) => void;
    index: number;
}

export default function Question({ q, a, isOpen, onClick, index }: QuestionProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        if (ref.current) {
            setHeight(ref.current.scrollHeight);
        }
    }, [a]);

    return (
        <div
            className="p-5 cursor-pointer"
            onClick={onClick}
            style={{
                borderTop: index === 0 ? "none" : `1px solid ${barsEdgesDarkGreen}`,
            }}
        >
            {/* Question container */}
            <div className="flex justify-between items-center">

                {/* Question */}
                <span className="text-[1.5rem] font-semibold">{q}</span>

                {isOpen ? ( // Right arrow if collapsed.
                    <FaChevronRight className="w-5 h-5" style={{ color: barsEdgesDarkGreen }} />
                    
                ) : ( // Down arrow if expanded.
                    <FaChevronDown className="w-5 h-5" style={{ color: barsEdgesDarkGreen }} />
                )}
            </div>

            {/* Expand/collapse transition */}
            <motion.div
                ref={ref}
                initial={false}
                animate={{
                    maxHeight: isOpen ? height : 0,
                    opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                style={{ overflow: "hidden" }}
                className="mt-5"
            >

                {/* Answer */}
                <div className="text-[1.25rem] text-sm">{a}</div>
            </motion.div>
        </div>
    );
}
