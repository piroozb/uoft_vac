"use client";

import SectionTitle from "../common/SectionTitle";
import { InstagramEmbed } from 'react-social-media-embed';
export default function UpcomingEvents() {
    return (
        <section className="mt-5">
            {/* Section title */}
            <SectionTitle>Upcoming Events!</SectionTitle>

            {/* Graphic */}
            <div className="mt-10 flex justify-center">
                <div className="w-full max-w-150">
                    <InstagramEmbed url="https://www.instagram.com/uoft_vac/" />
                </div>
            </div>
        </section>
    );
}
