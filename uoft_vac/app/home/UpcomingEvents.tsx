"use client";

import SectionTitle from "../common/SectionTitle";
import { DEFAULT_TITLE_SIZE } from "../common/SectionTitle";
import ExpandableImageCarousel from "../common/ExpandableImageCarousel";

export default function UpcomingEvents() {
    return (
        <section className="mt-15 flex flex-col items-center">

            {/* Section title */}
            <SectionTitle
                src="/title-upcoming-events.png"
                size={`min(${DEFAULT_TITLE_SIZE},7cqw)`}
            >
                Upcoming Events!
            </SectionTitle>

            {/* Graphic */}
            <ExpandableImageCarousel
                images={["/event-schedule.png"]}
                alt="Event Schedule"
                normalSize="mt-10 w-[clamp(0rem,40rem,85vw)]"
            />
        </section>
    );
}
