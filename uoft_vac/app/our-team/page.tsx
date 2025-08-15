import React from "react";

import SectionTitle from "../common/SectionTitle";
import ExecEntryList from "./ExecEntryList";

export default function OurTeam() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            {/* Title */}
            <SectionTitle>Meet the Team!</SectionTitle>

            {/* Exec categories */}
            <div className="space-y-6">
                {/* Admin */}
                <SectionTitle size="text-7xl" padding="mb-5">Admin</SectionTitle>
                <ExecEntryList
                />

                {/* Events */}
                <SectionTitle size="text-7xl" padding="mb-5">Events</SectionTitle>

                {/* Graphics */}
                <SectionTitle size="text-7xl" padding="mb-5">Graphics</SectionTitle>

                {/* Marketing */}
                <SectionTitle size="text-7xl" padding="mb-5">Marketing</SectionTitle>

                {/* Webmaster */}
                <SectionTitle size="text-7xl" padding="mb-5">Webmaster</SectionTitle>

                {/* Office Manager */}
                <SectionTitle size="text-7xl" padding="mb-5">Office Manager</SectionTitle>

            </div>
        </div>
    );
}
