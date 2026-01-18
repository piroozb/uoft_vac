"use client";

import {
    INSTAGRAM_LINK,
    SUBSECTION_SIZE,
} from "../common/Constants";
import SectionTitle from "../common/SectionTitle";

const BUBBLE_GRAPHICS_CLASSNAME = "w-[25cqw] h-[25cqw]";

function Events() {
    return (
        <div
            className="rounded-md shadow-lg"
            style={{
                backgroundColor: "rgb(255,206,0)",
                containerType: "inline-size",
            }}
        >
            {/* Subsection title */}
            <SectionTitle size={SUBSECTION_SIZE}>Events</SectionTitle>

            {/* Overview */}
            <p className="text-[3.25cqw] text-center">
                We host a variety of events every <strong>Friday 3–6pm</strong>.
                <br />
                All members can come at any point to relax and hang out.
                <br />
                Any <strong>UofT student</strong> may sign up to become a member for <strong>free!</strong>
                <br />
                Look out for <strong>Instagram posts</strong> and <strong>Discord announcements</strong> to see what events are coming up!
            </p>

            {/* Example events graphics container */}
            <div className="mt-[2cqw] justify-around">

                {/* Row 1 */}
                <div className="grid grid-cols-3">
                    {["Themed Events", "Craft Days", "Gallery Visits"].map((label, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <div className="w-[20cqw] h-[20cqw] bg-white shadow-md rounded-lg"></div>
                            <p className="mt-[1cqw] text-[3cqw] font-medium text-center">{label}</p>
                        </div>
                    ))}
                </div>

                {/* Row 2 */}
                <div className="mt-[2cqw] grid grid-cols-3">
                    {["Workshops", "Virtual Events"].map((label, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <div className="w-[20cqw] h-[20cqw] bg-white shadow-md rounded-lg"></div>
                            <p className="mt-[1cqw] text-[3cqw] font-medium text-center">{label}</p>
                        </div>
                    ))}

                    {/* And more! */}
                    <div className="flex justify-center">
                        <img
                            src="/and-more.png"
                            alt="AND MORE!"
                            className="w-[15cqw] object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Purple buttons */}
            <div className="my-[2cqw] mx-[2cqw] gap-[2cqw] grid grid-cols-2 items-center">

                {/* Instagram */}
                <a
                    href={INSTAGRAM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl px-[2cqw] py-[2cqw] text-[3cqw] text-white shadow-lg
                   transform transition-all duration-300
                   hover:scale-95 hover:text-[rgb(255,254,176)]"
                    style={{ backgroundColor: "rgb(80,43,113)" }}
                >
                    Check out our past events on our Instagram page!
                </a>
                {/* Join us */}
                <a
                    href="/join-us"
                    className="rounded-2xl px-[2cqw] py-[2cqw] text-[3cqw] text-white shadow-lg
                   transform transition-all duration-300
                   hover:scale-95 hover:text-[rgb(198,255,206)]"
                    style={{ backgroundColor: "rgb(80,43,113)" }}
                >
                    Feeling inspired?
                    <br />
                    Become a member today!
                </a>
            </div>
        </div>
    )
}

function OfficeHours() {
    return (
        <div
            className="w-full rounded-md shadow-lg flex-col"
            style={{
                backgroundColor: "rgb(0,214,255)",
                containerType: "inline-size",
            }}
        >
            {/* Subsection title */}
            <SectionTitle size={SUBSECTION_SIZE}>Office Hours</SectionTitle>

            {/* Overview */}
            <p className="text-[3.25cqw] text-center">
                We host office hours every <strong>Monday and Wednesday from 3–6pm</strong>.
                <br />
                Be sure to check our <strong>Discord announcements</strong> for additional office hours!
            </p>

            <div className="grid grid-cols-[auto_1fr]">

                {/* Video container */}
                <div className="ml-[2cqw] flex flex-col">

                    <p className="text-[3.25cqw] text-center">
                        Can't find our office?<br />
                        Watch this video!
                    </p>

                    {/* Video */}
                    <div className="mt-[1cqw] rounded-md">
                        <video
                            src="/office-video.mp4"
                            controls
                            className="h-[69cqw] rounded-md shadow-lg"
                        />
                    </div>
                </div>

                {/* Bubble graphics container */}
                <div className="flex flex-col items-center">

                    {/* Make Art (top) */}
                    <div style={{ transform: "translateX(calc(10cqw))" }}>
                        <img
                            src="/office-hours-make-art.png"
                            alt="Make art"
                            className={BUBBLE_GRAPHICS_CLASSNAME}
                        />
                    </div>

                    {/* Study (middle, centered) */}
                    <div style={{ transform: "translateX(calc(-10cqw)) translateY(calc(-2cqw))" }}>
                        <img
                            src="/office-hours-study.png"
                            alt="Study"
                            className={BUBBLE_GRAPHICS_CLASSNAME}
                        />
                    </div>

                    {/* Socialise (bottom) */}
                    <div style={{ transform: "translateX(calc(5cqw))" }}>
                        <img
                            src="/office-hours-socialise.png"
                            alt="Socialise"
                            className={BUBBLE_GRAPHICS_CLASSNAME}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function WhatDoWeDo() {
    return (
        <section>
            {/* Section title */}
            <SectionTitle>What do we do?</SectionTitle>

            {/* Subsections */}
            <div className="mx-[1cqw] grid grid-cols-2 gap-[1cqw]">
                <Events />
                <OfficeHours />
            </div>
        </section>
    );
}
