import SectionTitle from "../common/SectionTitle";

const factClass =
    "bg-white rounded-lg shadow-md flex items-center justify-center text-center text-black text-[1.5rem] leading-relaxed font-normal aspect-square w-64";

export default function FunFacts() {
    return (
        <section className="flex flex-col items-center my-10">
            {/* Title */}
            <SectionTitle>Fun Facts!</SectionTitle>

            {/* Facts container */}
            <div className="mt-10 flex flex-wrap justify-center gap-16 w-full max-w-7xl">
                {/* Fact 1 */}
                <div className="flex items-start mt-0">
                    <div className={factClass}>
                        <span>
                            <strong>VAC</strong> originated from the Scarborough campus and then branched out to St. George in 2019
                        </span>
                    </div>
                </div>

                {/* Fact 2 */}
                <div className="flex items-start mt-10">
                    <div className={factClass}>
                        <span>
                            <strong>VAC</strong> used to be known as VAS – The Visual Art Society
                        </span>
                    </div>
                </div>

                {/* Fact 3 */}
                <div className="flex items-start mt-0">
                    <div className={factClass}>
                        <span>
                            VAC only held virtual events in <strong>2020 and 2021</strong>
                        </span>
                    </div>
                </div>

                {/* Fact 4 */}
                <div className="flex items-start mt-5">
                    <div className={factClass}>
                        <span>
                            2022 was the first year we held <strong>in-person events</strong> again
                        </span>
                    </div>
                </div>
            </div>

            {/* Mascot */}
            <div className="flex items-center w-11/12 max-w-5xl relative">
                {/* Frodo */}
                <div className="w-30 h-30 bg-green-500 rounded-lg z-10">
                </div>

                {/* Text */}
                <div className="bg-[rgb(0,214,255)] rounded-r-full text-black text-xl font-semibold py-4 px-8 ml-[-50px] pl-16 z-0 flex items-center">
                    Hi I'm Frodo, the club mascot!
                </div>
            </div>
        </section>
    );
}
