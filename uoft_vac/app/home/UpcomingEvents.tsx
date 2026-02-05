"use client";

import SectionTitle from "../common/SectionTitle";
import { InstagramEmbed } from 'react-social-media-embed';

export default function UpcomingEvents() {
    return (
        <section className="mt-5 flex flex-col items-center">

            {/* Section title */}
            <SectionTitle>Upcoming Events!</SectionTitle>

            {/* Graphic */}
            <div className="mt-10 w-[clamp(0rem,40rem,90vw)] aspect-square">
                <InstagramEmbed url="https://www.instagram.com/uoft_vac/" />
            </div>
        </section>
    );
}
