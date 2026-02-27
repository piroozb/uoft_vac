"use client";

import Image from "next/image";

import { useIsMobile } from "../layout/UseIsMobile";
import SectionTitle from "../common/SectionTitle";

const VALUES_CLASSNAME = "w-50 relative aspect-square";

export default function OurMission() {
    const isSmaller = useIsMobile(true);

    return (
        <section className="flex flex-col items-center">

            {/* Section title */}
            <SectionTitle>Our Mission!</SectionTitle>

            {/* Mission container */}
            <div className="w-250 aspect-[3/1.5] flex justify-center items-center relative">

                {/* Paint */}
                <Image
                    src="/mission-paint.png"
                    alt="Our mission"
                    className="object-contain z-[-1]"
                    fill
                />

                {/* Mission statement */}
                <div className="mx-30 max-w-[90cqw]">
                    <p className="text-[min(1.6rem,4.9cqw)] z-1 text-center">
                        The University of Toronto Visual Art Club (UTVAC) aims to build an
                        <strong> encouraging, artistic community</strong> and a <strong>positive platform</strong> for students
                        interested in art to develop and express their passion through
                        <strong> art workshops, exhibits, and socials</strong>. We believe that
                        <strong> anyone can enjoy art</strong>, and we hope to inspire students who may be hesitant about art
                        to <strong>discover their creative potentials</strong>.
                    </p>
                </div>
            </div>

            {/* Values container */}
            <div className={`w-[90cqw] ${!isSmaller ?
                "gap-[5cqw] flex justify-center"
                : "flex flex-col items-center"}`}
            >

                {/* Create */}
                <div className={VALUES_CLASSNAME}>
                    <Image
                        src="/values-create.png"
                        alt="Create"
                        className={`${isSmaller && "translate-x-[-20cqw]"}`}
                        fill
                    />
                </div>

                {/* Share */}
                <div className={VALUES_CLASSNAME}>
                    <Image
                        src="/values-share.png"
                        alt="Share"
                        className={`${isSmaller && "translate-x-[15cqw] translate-y-[-5cqw]"}`}
                        fill
                    />
                </div>

                {/* Connect */}
                <div className={VALUES_CLASSNAME}>
                    <Image
                        src="/values-connect.png"
                        alt="Connect"
                        className={`${isSmaller && "translate-x-[-10cqw]"}`}
                        fill
                    />
                </div>
            </div>
        </section>
    );
}
