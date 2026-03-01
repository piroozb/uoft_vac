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
            <div className="mt-10">
                <ExpandableImageCarousel
                    images={["/event-schedule.png"]}
                    alt="Event Schedule"
                    normalSize="w-[min(40rem,85vw)]"
                />
            </div>
        </section>
    );
}
