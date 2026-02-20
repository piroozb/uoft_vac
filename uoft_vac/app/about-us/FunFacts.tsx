"use client";

import Image from "next/image";

import {
    SUBSECTION_BLUE,
} from "../common/Constants";
import { useIsMobile } from "../layout/IsMobile";
import SectionTitle from "../common/SectionTitle";

const FACT_CLOUD_IM_CLASSNAME = "object-contain z-[-1]";
const FACT_TEXT_CLASSNAME = `m-[5cqw] text-[9cqw] text-center`;

export default function FunFacts() {
    const isMobile = useIsMobile()

    const FACT_CONTAINER_CLASSNAME =
        `${!isMobile ? "w-[24cqw]" : "w-[35cqw] max-[700px]:w-75"}
        aspect-square flex items-center relative`;

    return (
        <section
            className="my-15 flex flex-col items-center"
            style={{ containerType: "inline-size" }}
        >

            {/* Section title */}
            <SectionTitle
                src="/title-fun-facts.png"
                height="min(7rem,17.5cqw)"
            >
                Fun Facts!
            </SectionTitle>

            {/* Facts container */}
            <div className={`min-[700px]:grid ${!isMobile ? "mt-5 gap-[1cqw] grid-cols-4" : "mt-20 max-[700px]:mt-5 grid-cols-2"}`}>

                {/* Fact 1 */}
                <div
                    className={`${!isMobile
                        ? "translate-y-[0cqw]"
                        : "min-[700px]:-translate-x-[5cqw] max-[700px]:-translate-x-[10cqw] max-[700px]:-mb-10"}
                        ${FACT_CONTAINER_CLASSNAME}`}
                    style={{ containerType: "inline-size" }}
                >
                    <Image
                        src="/fact-cloud1.png"
                        alt="Fact 1"
                        className={FACT_CLOUD_IM_CLASSNAME}
                        fill
                    />

                    <p className={FACT_TEXT_CLASSNAME}>
                        VAC originated from the <strong>Scarborough campus</strong> and then branched out to <strong>St. George in 2019</strong>.
                    </p>
                </div>

                {/* Fact 2 */}
                <div
                    className={`${!isMobile
                        ? "translate-y-[5cqw]"
                        : "min-[700px]:-translate-y-[5cqw] max-[700px]:translate-x-[7.5cqw] max-[700px]:-mb-15"}
                        ${FACT_CONTAINER_CLASSNAME}`}
                    style={{ containerType: "inline-size" }}
                >
                    <Image
                        src="/fact-cloud2.png"
                        alt="Fact 2"
                        className={FACT_CLOUD_IM_CLASSNAME}
                        fill
                    />

                    <p className={FACT_TEXT_CLASSNAME}>
                        VAC used to be known as <strong>VAS</strong> – <strong>The Visual Art Society</strong>.
                    </p>
                </div>

                {/* Fact 3 */}
                <div
                    className={`${!isMobile
                        ? "translate-y-[1cqw]"
                        : "min-[700px]:translate-y-[5cqw] max-[700px]:-translate-x-[7.5cqw] max-[700px]:-mb-20"}
                        ${FACT_CONTAINER_CLASSNAME}`}
                    style={{ containerType: "inline-size" }}
                >
                    <Image
                        src="/fact-cloud3.png"
                        alt="Fact 3"
                        className={FACT_CLOUD_IM_CLASSNAME}
                        fill
                    />

                    <p className={FACT_TEXT_CLASSNAME}>
                        VAC only held virtual events in <strong>2020 and 2021</strong>.
                    </p>
                </div>

                {/* Fact 4 */}
                <div
                    className={`${!isMobile
                        ? "translate-y-[6cqw]"
                        : "min-[700px]:translate-x-[5cqw] max-[700px]:translate-x-[10cqw]"}
                        ${FACT_CONTAINER_CLASSNAME}`}
                    style={{ containerType: "inline-size" }}
                >
                    <Image
                        src="/fact-cloud4.png"
                        alt="Fact 4"
                        className={FACT_CLOUD_IM_CLASSNAME}
                        fill
                    />

                    <p className={FACT_TEXT_CLASSNAME}>
                        2022 was the first year we held <strong>in-person events</strong> again.
                    </p>
                </div>
            </div>

            {/* Mascot container */}
            <div className={`${!isMobile
                ? "mt-[7cqw] ml-[25cqw]"
                : "mt-[10cqw] ml-[50cqw] max-[700px]:ml-[10cqw]"}
                w-full flex items-center relative`}
            >

                {/* Frodo */}
                <div className="w-[min(8rem,15cqw)] aspect-square relative">
                    <Image
                        src="/frodo-facts.png"
                        alt="Frodo"
                        className="object-contain"
                        fill
                    />
                </div>

                {/* Text */}
                <div
                    className="ml-[-50] pl-15 pr-[min(2rem,4cqw)] h-[min(4rem,10cqw)] text-[1.5rem]
                        font-semibold rounded-r-full flex items-center z-[-1]"
                    style={{ backgroundColor: SUBSECTION_BLUE }}
                >
                    Hi I'm Frodo, the club mascot!
                </div>
            </div>
        </section>
    );
}
