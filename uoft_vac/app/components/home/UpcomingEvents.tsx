"use client";

import SectionTitle from "../SectionTitle";

export default function UpcomingEvents() {
    return (
        <section className="w-full px-8 py-16">
            {/* Title */}
            <SectionTitle>Upcoming Events!</SectionTitle>

            {/* Graphic */}
            <div className="mx-auto" style={{ maxWidth: "600px" }}>
                <div className="w-full aspect-square bg-white shadow-lg rounded-md"></div>
            </div>
        </section>
    );
}
