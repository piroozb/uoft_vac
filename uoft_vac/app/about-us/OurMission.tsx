
import Image from "next/image";

import SectionTitle from "../common/SectionTitle";

const VALUES_CLASSNAME = "w-50 relative aspect-square";

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
                    className="object-contain z-[-1]"
                    priority
                />

                {/* Mission statement */}
                <div className="max-w-[90cqw]">
                    <p className="text-[1.6rem] z-1 text-center">
                        The <strong>University of Toronto Visual Art Club (UTVAC)</strong> aims to build an
                        <strong> encouraging, artistic community</strong> and a <strong>positive platform</strong> for students
                        interested in art to develop and express their passion through
                        <strong> art workshops, exhibits, and socials</strong>. We believe that
                        <strong> anyone can enjoy art</strong>, and we hope to inspire students who may be hesitant about art
                        to <strong>discover their creative potentials</strong>.
                    </p>
                </div>
            </div>

            {/* Values */}
            <div className="w-[90cqw] gap-[10cqw] flex justify-center">
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
