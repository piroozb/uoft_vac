
import Image from "next/image";
import {
    ReactNode,
    MouseEvent,
} from "react";
import {
    AnimatePresence,
    motion,
} from "framer-motion";

import {
    BARS_EDGES_GREEN,
    COMMON_EASE_OUT,
} from "../common/Constants";
import { ExpandableText } from "../common/ExpandableText";

const ROTATION_MAG = 72;

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

        // Hitbox container
        <div
            className="p-[1cqw] gap-5 flex flex-col cursor-pointer"
            onClick={onClick}
            style={{ borderTop: index === 0
                    ? "none" : `1px solid ${BARS_EDGES_GREEN}`, }}
        >

            {/* Question */}
            <p className="gap-5 text-[min(1.5rem,3.5cqw)] grid grid-cols-[1fr_auto] font-semibold">

                {question}

                {/* Star icon */}
                <div className="w-[min(2.5rem,5cqw)] aspect-square relative overflow-visible">
                    <AnimatePresence>
                        <motion.div
                            key={isExpanded ? "expanded" : "collapsed"}
                            className="absolute inset-0"
                            initial={{
                                rotate: isExpanded ? -ROTATION_MAG : ROTATION_MAG,
                                opacity: 0
                            }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{
                                rotate: isExpanded ? -ROTATION_MAG : ROTATION_MAG,
                                opacity: 0
                            }}
                            transition={{ ease: COMMON_EASE_OUT, duration: .3 }}
                        >
                            <Image
                                src={isExpanded ? "/faq-star-expanded.png" : "/faq-star-collapsed.png"}
                                alt={isExpanded ? "Expanded" : "Collapsed"}
                                className="object-contain"
                                fill
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </p>

            {/* Expand / collapse */}
            <motion.div
                ref={ref}
                initial={false}
                animate={{
                    maxHeight: isExpanded ? fullHeight : 0,
                    opacity: isExpanded ? 1 : 0,
                }}
                transition={{ ease: COMMON_EASE_OUT, duration: .5 }}
                className="overflow-hidden"
            >
                <p className="text-[min(1.25rem,3cqw)]">
                    {answer}
                </p>
            </motion.div>
        </div>
    );
}
