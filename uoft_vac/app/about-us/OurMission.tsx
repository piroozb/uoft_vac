import SectionTitle from "../common/SectionTitle";

const valueClass =
    "w-65 h-65 rounded-full flex items-center justify-center text-white text-lg font-bold";

export default function OurMission() {
    return (
        <section className="flex flex-col items-center my-10">
            {/* Title */}
            <SectionTitle>Our Mission!</SectionTitle>

            {/* Paint splash */}
            <div className="w-11/12 max-w-4xl bg-[rgb(53,228,78)] p-8 rounded-lg">
                {/* Mission statement */}
                <p className="text-[1.6rem] text-black leading-relaxed text-center">
                    The <strong>University of Toronto Visual Art Club (UTVAC)</strong> aims to build an
                    <strong> encouraging, artistic community</strong> and a <strong>positive platform</strong> for students
                    interested in art to develop and express their passion through
                    <strong> art workshops, exhibits, and socials</strong>. We believe that
                    <strong> anyone can enjoy art</strong>, and we hope to inspire students who may be hesitant about art
                    to <strong>discover their creative potentials</strong>.
                </p>
            </div>

            {/* Values */}
            <div className="flex justify-center gap-30 mt-10">
                <div className={`${valueClass} bg-red-500`}>Create</div>
                <div className={`${valueClass} bg-yellow-400`}>Share</div>
                <div className={`${valueClass} bg-blue-500`}>Connect</div>
            </div>
        </section>
    );
}
