import SectionTitle from "../SectionTitle";

export default function FunFacts() {
    return (
        <section className="flex flex-col items-center py-12 bg-[#b4f4b4]">
            {/* Title */}
            <SectionTitle>Fun Facts!</SectionTitle>

            {/* Facts container */}
            <div className="mt-10 flex flex-wrap justify-center gap-16 w-full max-w-7xl">
                {/* Fact 1 */}
                <div className="bg-white rounded-lg shadow-md flex items-center justify-center text-center text-black text-[1.2rem] leading-relaxed font-normal aspect-square w-64">
                    <span>
                        <strong>VAC</strong> originated from the Scarborough campus and then branched out to St. George in 2019
                    </span>
                </div>

                {/* Fact 2 */}
                <div className="bg-white rounded-lg shadow-md flex items-center justify-center text-center text-black text-[1.2rem] leading-relaxed font-normal aspect-square w-64 mt-10">
                    <span>
                        <strong>VAC</strong> used to be known as VAS – The Visual Art Society
                    </span>
                </div>

                {/* Fact 3 */}
                <div className="bg-white rounded-lg shadow-md flex items-center justify-center text-center text-black text-[1.2rem] leading-relaxed font-normal aspect-square w-64 mt-4">
                    <span>
                        VAC only held virtual events in <strong>2020 and 2021</strong>
                    </span>
                </div>

                {/* Fact 4 */}
                <div className="bg-white rounded-lg shadow-md flex items-center justify-center text-center text-black text-[1.2rem] leading-relaxed font-normal aspect-square w-64 mt-13">
                    <span>
                        2022 was the first year we held <strong>in-person events</strong> again
                    </span>
                </div>
            </div>
        </section>
    );
}
