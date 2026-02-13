"use client";

import SectionTitle from "../common/SectionTitle";
import ExpandableImageCarousel from "../common/ExpandableImageCarousel";

export default function UpcomingEvents() {
    return (
        <section className="mt-5 flex flex-col items-center">

            {/* Section title */}
            <SectionTitle>Upcoming Events!</SectionTitle>

            {/* Graphic */}
            <ExpandableImageCarousel
                images={["/event-schedule.png"]}
                alt="Event Schedule"
                normalSize="w-[clamp(0rem,40rem,85vw)]"
            />
        </section>
    );
}
