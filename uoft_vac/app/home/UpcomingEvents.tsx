"use client";

import SectionTitle from "../common/SectionTitle";
import ExpandableImageCarousel from "../common/ExpandableImageCarousel";

export default function UpcomingEvents() {
    return (
        <section className="my-15 flex flex-col items-center">

            {/* Section title */}
            <SectionTitle
                src="/title-upcoming-events.png"
                height={`min(5rem,7cqw)`}
            >
                Upcoming Events!
            </SectionTitle>

            {/* Graphic */}
            <ExpandableImageCarousel
                images={["/event-schedule.png"]}
                alt="Event Schedule"
                normalSize="mt-10 w-[min(40rem,85vw)]"
            />
        </section>
    );
}
