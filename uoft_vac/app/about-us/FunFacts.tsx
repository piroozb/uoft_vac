
import Image from "next/image";

import {
    SUBSECTION_BLUE,
} from "../common/Constants";
import SectionTitle from "../common/SectionTitle";

const FACT_CLOUD_CLASSNAME = "w-[24cqw] aspect-square flex items-center relative";
const FACT_TEXT_CLASSNAME = "m-[3cqw] text-[min(1.5rem,2cqw)] text-center";

export default function FunFacts() {
    return (
        <section
            className="my-15 flex flex-col items-center"
            style={{ containerType: "inline-size" }}
        >

            {/* Section title */}
            <SectionTitle
                src="/title-fun-facts.png"
                height="min(6rem,17.5cqw)"
            >
                Fun Facts!
            </SectionTitle>

            {/* Facts container */}
            <div className="mt-5 gap-[1cqw] grid grid-cols-4">

                {/* Fact 1 */}
                <div className={`mt-[0cqw] ${FACT_CLOUD_CLASSNAME}`}>
                    <Image
                        src="/fact-cloud1.png"
                        alt="Fact 1"
                        className="object-contain z-[-1]"
                        fill
                    />

                    <p className={FACT_TEXT_CLASSNAME}>
                        <strong>VAC</strong> originated from the Scarborough campus and then branched out to St. George in 2019.
                    </p>
                </div>

                {/* Fact 2 */}
                <div className={`mt-[5cqw] ${FACT_CLOUD_CLASSNAME}`}>
                    <Image
                        src="/fact-cloud2.png"
                        alt="Fact 2"
                        className="object-contain z-[-1]"
                        fill priority
                    />

                    <p className={FACT_TEXT_CLASSNAME}>
                        <strong>VAC</strong> used to be known as VAS – The Visual Art Society.
                    </p>
                </div>

                {/* Fact 3 */}
                <div className={`mt-[1cqw] ${FACT_CLOUD_CLASSNAME}`}>
                    <Image
                        src="/fact-cloud3.png"
                        alt="Fact 3"
                        className="object-contain z-[-1]"
                        fill priority
                    />

                    <p className={FACT_TEXT_CLASSNAME}>
                        VAC only held virtual events in <strong>2020 and 2021</strong>.
                    </p>
                </div>

                {/* Fact 4 */}
                <div className={`mt-[6cqw] ${FACT_CLOUD_CLASSNAME}`}>
                    <Image
                        src="/fact-cloud4.png"
                        alt="Fact 4"
                        className="object-contain z-[-1]"
                        fill priority
                    />

                    <p className={FACT_TEXT_CLASSNAME}>
                        2022 was the first year we held <strong>in-person events</strong> again.
                    </p>
                </div>
            </div>

            {/* Mascot container */}
            <div className="flex items-center w-11/12 max-w-5xl relative">

                {/* Frodo */}
                <div className="w-30 h-30 bg-green-500 rounded-lg z-10">
                </div>

                {/* Text */}
                <div className={`bg-[${SUBSECTION_BLUE}] rounded-r-full text-black text-xl font-semibold py-4 px-8 ml-[-50px] pl-16 z-0 flex items-center`}>
                    Hi I'm Frodo, the club mascot!
                </div>
            </div>
        </section>
    );
}
