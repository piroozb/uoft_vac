import SectionTitle from "../common/SectionTitle";

import Image from "next/image";

const VALUES_CLASSNAME = "relative w-50 h-50";

export default function OurMission() {
    return (
        <section className="flex flex-col items-center">

            {/* Section title */}
            <SectionTitle>Our Mission!</SectionTitle>

            {/* Mission container */}
            <div className="flex items-center justify-center relative px-30 w-[60rem] aspect-[3/1.5]">

                {/* Paint */}
                <Image
                    src="/mission-paint.png"
                    alt="Our mission"
                    fill
                    className="object-contain"
                    priority
                />

                {/* Mission statement */}
                <p className="text-[1.6rem] z-1 text-center">
                    The <strong>University of Toronto Visual Art Club (UTVAC)</strong> aims to build an
                    <strong> encouraging, artistic community</strong> and a <strong>positive platform</strong> for students
                    interested in art to develop and express their passion through
                    <strong> art workshops, exhibits, and socials</strong>. We believe that
                    <strong> anyone can enjoy art</strong>, and we hope to inspire students who may be hesitant about art
                    to <strong>discover their creative potentials</strong>.
                </p>
            </div>

            {/* Values */}
            <div className="flex gap-[10cqw]">
                <div className={VALUES_CLASSNAME}>
                    <Image
                        src="/values-create.png"
                        alt="Create"
                        fill
                    />
                </div>

                <div className={VALUES_CLASSNAME}>
                    <Image
                        src="/values-share.png"
                        alt="Share"
                        fill
                    />
                </div>

                <div className={VALUES_CLASSNAME}>
                    <Image
                        src="/values-connect.png"
                        alt="Connect"
                        fill
                    />
                </div>
            </div>
        </section>
    );
}
