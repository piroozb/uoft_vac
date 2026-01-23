"use client";

import Events from "./Events";
import OfficeHours from "./OfficeHours";
import SectionTitle from "../common/SectionTitle";

export default function WhatDoWeDo() {
    return (
        <section className="mt-5">
            {/* Section title */}
            <SectionTitle>What do we do?</SectionTitle>

            {/* Subsections */}
            <div className="mt-5 mx-[1cqw] gap-[1cqw] grid grid-cols-2">
                <Events />
                <OfficeHours />
            </div>
        </section>
    );
}
