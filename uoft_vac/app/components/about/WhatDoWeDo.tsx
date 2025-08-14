"use client";

import SectionTitle from "../SectionTitle";

export default function WhatDoWeDo() {
    return (
        <section className="w-full px-8 py-10">
            {/* Title */}
            <SectionTitle>What do we do?</SectionTitle>

            {/* Subsections */}
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Events */}
                <div
                    className="w-full h-[700px] rounded-md shadow-lg"
                    style={{ backgroundColor: "rgb(255,206,0)" }}
                ></div>

                {/* Office Hours */}
                <div
                    className="w-full h-[700px] rounded-md shadow-lg"
                    style={{ backgroundColor: "rgb(0,214,255)" }}
                ></div>
            </div>
        </section>
    );
}
