"use client";

import Title from "../Title";

export default function UpcomingEvents() {
    return (
        <section className="w-full px-8 py-16">
            {/* Title. */}
            <Title>Upcoming Events!</Title>

            {/* Graphic. */}
            <div className="mx-auto" style={{ maxWidth: "600px" }}>
                <div className="w-full aspect-square bg-white shadow-lg rounded-md"></div>
            </div>
        </section>
    );
}
