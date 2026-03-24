"use client";

import Image from "next/image";
import {
    useState,
} from "react";

import { useIsMobile } from "../layout/UseIsMobile";
import SectionTitle from "../common/SectionTitle";
import ExpandableImageCarousel from "../common/ExpandableImageCarousel";

export default function UpcomingEvents() {
    const isMobile = useIsMobile()
    const [hoverFrodoo, setHoverFrodoo] = useState(false);

    return (
        <section className="my-15 flex flex-col items-center">

            {/* Section title */}
            <SectionTitle
                src="/title-upcoming-events.png"
                height="min(5rem,7cqw)"
            >
                Upcoming Events!
            </SectionTitle>

            {/* Row */}
            <div className={`mt-10 ${!isMobile && "w-full grid grid-cols-[1fr_auto_1fr]"} items-center`}>

                {/* Frodo left */}
                {!isMobile &&
                    <div className="flex justify-center">
                        <Image
                            src="/frodo-smiley.png"
                            alt="Frodo smiley"
                            className="object-contain"
                            width={150} height={0}
                        />
                    </div>
                }

                {/* Graphic */}
                <ExpandableImageCarousel
                    images={["/event-schedule.png"]}
                    alt="Event Schedule"
                    normalSize="w-[min(40rem,85cqw)]"
                />

                {/* Frodo right */}
                {!isMobile &&
                    <div className="flex justify-center">
                        <Image
                            src={!hoverFrodoo ? "/frodoo.png" : "/cursed-dave.png"}
                            alt="Frodave"
                            className="object-contain cursor-pointer"
                            width={150} height={0}
                            onMouseEnter={() => setHoverFrodoo(true)}
                            onMouseLeave={() => setHoverFrodoo(false)}
                        />
                    </div>
                }
            </div>
        </section>
    );
}
