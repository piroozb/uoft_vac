import SectionTitle from "../common/SectionTitle";

import { BARS_CENTRE_GREEN } from "../common/Constants";

const VALUES_CLASSNAME =
    "w-65 h-65 rounded-full flex items-center justify-center text-white text-lg font-bold";

export default function OurMission() {
    return (
        <section className="flex flex-col items-center">

            {/* Section title */}
            <SectionTitle>Our Mission!</SectionTitle>

            {/* Paint splash */}
            <div
                className="max-w-4xl rounded-lg"
                style={{ backgroundColor: BARS_CENTRE_GREEN }}
            >
                {/* Mission statement */}
                <p className="m-5 text-[1.6rem] text-center">
                    The <strong>University of Toronto Visual Art Club (UTVAC)</strong> aims to build an
                    <strong> encouraging, artistic community</strong> and a <strong>positive platform</strong> for students
                    interested in art to develop and express their passion through
                    <strong> art workshops, exhibits, and socials</strong>. We believe that
                    <strong> anyone can enjoy art</strong>, and we hope to inspire students who may be hesitant about art
                    to <strong>discover their creative potentials</strong>.
                </p>
            </div>

            {/* Values */}
            <div className="flex gap-[5cqw] mt-10">
                <div className={`${VALUES_CLASSNAME} bg-red-500`}>Create</div>
                <div className={`${VALUES_CLASSNAME} bg-yellow-400`}>Share</div>
                <div className={`${VALUES_CLASSNAME} bg-blue-500`}>Connect</div>
            </div>
        </section>
    );
}
