"use client";

import SectionTitle from "../common/SectionTitle";

export default function UpcomingEvents() {
    return (
        <section className="w-full px-8 my-10">
            {/* Title */}
            <SectionTitle>Upcoming Events!</SectionTitle>

            {/* Graphic */}
            <div
                className="mx-auto py-15"
                style={{ maxWidth: "600px" }}
            >
                <div className="w-full aspect-square bg-white shadow-lg rounded-md"></div>
            </div>
        </section>
    );
}
