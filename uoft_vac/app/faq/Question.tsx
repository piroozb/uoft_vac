
import Image from "next/image";
import { ReactNode, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
    BARS_EDGES_GREEN,
    EASE_OUT,
} from "../common/Constants";
import { ExpandableText } from "../common/ExpandableText";

const ROTATION_MAG = 72;
const STAR_TRANSF_CLASSNAME = "absolute inset-0";
const STAR_TRANSF = { duration: .3, ease: EASE_OUT };
const STAR_CLASSNAME = "object-contain";

export default function Question({
    question,
    answer,
    isExpanded,
    onClick,
    index,
} : {
    question: string;
    answer: ReactNode;
    isExpanded: boolean;
    onClick: (e: MouseEvent<HTMLDivElement>) => void;
    index: number;
}) {
    const { ref, fullHeight } = ExpandableText<HTMLDivElement>(isExpanded, 0, [answer]);

    return (
        <div
            className="p-5 cursor-pointer"
            onClick={onClick}
            style={{ borderTop: index === 0
                    ? "none" : `1px solid ${BARS_EDGES_GREEN}`, }}
        >

            {/* Question */}
            <div className="mb-5 text-[1.5rem] flex justify-between items-center font-semibold">

                {question}

                {/* Star icon */}
                <div className="w-7.5 h-7.5 relative overflow-visible">
                    <AnimatePresence>
                        <motion.div
                            key={isExpanded ? "expanded" : "collapsed"}
                            className={STAR_TRANSF_CLASSNAME}
                            initial={{
                                rotate: isExpanded ? -ROTATION_MAG : ROTATION_MAG,
                                opacity: 0
                            }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{
                                rotate: isExpanded ? -ROTATION_MAG : ROTATION_MAG,
                                opacity: 0
                            }}
                            transition={STAR_TRANSF}
                        >
                            <Image
                                src={isExpanded ? "/faq-star-expanded.png" : "/faq-star-collapsed.png"}
                                alt={isExpanded ? "Expanded" : "Collapsed"}
                                className={STAR_CLASSNAME}
                                fill
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Expand / collapse */}
            <motion.div
                ref={ref}
                initial={false}
                animate={{
                    maxHeight: isExpanded ? fullHeight : 0,
                    opacity: isExpanded ? 1 : 0,
                }}
                transition={{ duration: .5, ease: EASE_OUT }}
                className="overflow-hidden"
            >
                <p className="text-[1.25rem]">
                    {answer}
                </p>
            </motion.div>
        </div>
    );
}
