import SectionTitle from "../SectionTitle";

export default function OurMission() {
    return (
        <section className="flex flex-col items-center py-12 bg-[#b4f4b4]">
            {/* Title */}
            <SectionTitle>Our Mission!</SectionTitle>

            {/* Paint splash */}
            <div className="w-11/12 max-w-4xl bg-[rgb(53,228,78)] p-8 rounded-lg mt-6">
                {/* Mission statement */}
                <p className="text-[1.5rem] text-black leading-relaxed">
                    The <strong>University of Toronto Visual Art Club (UTVAC)</strong> aims to build an
                    <strong> encouraging, artistic community</strong> and a <strong>positive platform</strong> for students
                    interested in art to develop and express their passion through
                    <strong> art workshops, exhibits, and socials</strong>. We believe that
                    <strong> anyone can enjoy art</strong>, and we hope to inspire students who may be hesitant about art
                    to <strong>discover their creative potentials</strong>.
                </p>
            </div>
            {/* Values */}
            <div className="flex justify-center gap-20 mt-10">
                {/* Create */}
                <div className="w-100 h-100 rounded-full bg-red-500 flex items-center justify-center text-white text-lg font-bold">
                    Create
                </div>

                {/* Share */}
                <div className="w-100 h-100 rounded-full bg-yellow-400 flex items-center justify-center text-white text-lg font-bold">
                    Share
                </div>

                {/* Connect */}
                <div className="w-100 h-100 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg font-bold">
                    Connect
                </div>
            </div>
        </section>
    );
}
