import {
    SUBSECTION_BLUE,
} from "../common/Constants";
import SectionTitle from "../common/SectionTitle";

const FACT_CLASSNAME =
    "w-[20cqw] p-[1cqw] text-[1.75cqw] aspect-square items-center text-center bg-white rounded-lg shadow-lg flex";

export default function FunFacts() {
    return (
        <section
            className="mt-5 flex flex-col items-center"
            style={{ containerType: "inline-size" }}
        >

            {/* Section title */}
            <SectionTitle>Fun Facts!</SectionTitle>

            {/* Facts container */}
            <div className="mt-5 gap-[4cqw] grid grid-cols-4">

                {/* Fact 1 */}
                <div className="mt-[0cqw]">
                    <div className={FACT_CLASSNAME}>
                        <span>
                            <strong>VAC</strong> originated from the Scarborough campus and then branched out to St. George in 2019.
                        </span>
                    </div>
                </div>

                {/* Fact 2 */}
                <div className="mt-[5cqw]">
                    <div className={FACT_CLASSNAME}>
                        <span>
                            <strong>VAC</strong> used to be known as VAS – The Visual Art Society.
                        </span>
                    </div>
                </div>

                {/* Fact 3 */}
                <div className="mt-[1cqw]">
                    <div className={FACT_CLASSNAME}>
                        <span>
                            VAC only held virtual events in <strong>2020 and 2021</strong>.
                        </span>
                    </div>
                </div>

                {/* Fact 4 */}
                <div className="mt-[6cqw]">
                    <div className={FACT_CLASSNAME}>
                        <span>
                            2022 was the first year we held <strong>in-person events</strong> again.
                        </span>
                    </div>
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
