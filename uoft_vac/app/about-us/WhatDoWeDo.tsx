"use client";

import {
    INSTAGRAM_LINK,
    SUBSECTION_SIZE,
    SUBSECTION_MARGIN,
} from "../common/Constants";
import SectionTitle from "../common/SectionTitle";

function Events() {
    return (
        <div
            className="w-full rounded-md shadow-lg flex flex-col items-center justify-start p-5"
            style={{ backgroundColor: "rgb(255,206,0)" }}
        >
            <SectionTitle size={SUBSECTION_SIZE} margin={SUBSECTION_MARGIN}>Events</SectionTitle>
            <p className="text-[1.35rem] text-center mb-5">
                We host a variety of events every <strong>Friday 3–6pm</strong>.
                <br />
                All members can come at any point to relax and hang out.
                <br />
                Any <strong>UofT student</strong> may sign up to become a member for <strong>free!</strong>
                <br />
                Look out for <strong>Instagram posts</strong> and <strong>Discord announcements</strong> to see what events are coming up!
            </p>

            {/* Example events graphics container */}
            <div className="flex flex-col items-center relative">
                {/* Row 1 */}
                <div className="grid grid-cols-3">
                    {["Themed Events", "Craft Days", "Gallery Visits"].map((label, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <div className="w-30 h-30 bg-white shadow-md rounded-lg"></div>
                            <p className="mt-2 text-lg font-medium text-center">{label}</p>
                        </div>
                    ))}
                </div>

                {/* Row 2 */}
                <div className="mt-5 grid grid-cols-3">
                    {["Workshops", "Virtual Events"].map((label, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <div className="w-30 h-30 bg-white shadow-md rounded-lg"></div>
                            <p className="mt-2 text-lg font-medium text-center">{label}</p>
                        </div>
                    ))}
                    
                {/* And more! */}
                    <div className="flex justify-center">
                        <img
                            src="/and-more.png"
                            alt="AND MORE!"
                            className="w-25 object-contain"
                        />
                    </div>
                </div>


            </div>

            {/* Purple buttons */}
            <div className="my-5 mx-5 gap-5 grid grid-cols-2">
                
                {/* Instagram */}
                <a
                    href={INSTAGRAM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl px-5 py-3 text-[1.2rem] text-white shadow-lg
                   transform transition-all duration-300
                   hover:scale-95 hover:text-[rgb(255,254,176)]"
                    style={{ backgroundColor: "rgb(80,43,113)" }}
                >
                    Check out our past events on our Instagram page!
                </a>

                {/* Join us */}
                <a
                    href="/join-us"
                    className="rounded-2xl px-5 py-3 text-[1.2rem] text-white shadow-lg
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
            style={{ backgroundColor: "rgb(0,214,255)" }}
        >
            {/* Subsection title */}
            <SectionTitle size={SUBSECTION_SIZE}>Office Hours</SectionTitle>

            {/* Overview */}
            <p className="mx-5 text-[1.35rem] text-center">
                We host office hours every <strong>Tuesday and Thursday from 3–6pm</strong>.
                <br />
                Be sure to check our <strong>Discord announcements</strong> for additional office hours!
            </p>

            <div className="mb-5 grid grid-cols-[auto_1fr]">

                {/* Video container */}
                <div className="ml-5 flex flex-col">

                    <p className="mt-5 text-[1.35rem] text-center">
                        Can't find our office?<br />
                        Watch this video!
                    </p>

                    {/* Video */}
                    <div className="mt-1 rounded-md">
                        <video
                            src="/office-video.mp4"
                            controls
                            className="h-[450px] rounded-md shadow-lg"
                        />
                    </div>
                </div>

                {/* Bubble graphics container */}
                <div className="flex flex-col items-center justify-around">

                    {/* Make Art */}
                    <div style={{ transform: "translateX(calc(4cqw))" }}>
                        <img
                            src="/office-hours-make-art.png"
                            alt="Make art"
                            className="w-[10cqw] h-[10cqw]"
                        />
                    </div>

                    {/* Study */}
                    <div style={{ transform: "translateX(calc(-5cqw))" }}>
                        <img
                            src="/office-hours-study.png"
                            alt="Study"
                            className="w-[10cqw] h-[10cqw]"
                        />
                    </div>

                    {/* Socialise */}
                    <div style={{ transform: "translateX(calc(2cqw))" }}>
                        <img
                            src="/office-hours-socialise.png"
                            alt="Socialise"
                            className="w-[10cqw] h-[10cqw]"
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
            <div className="mx-5 grid grid-cols-2 gap-10">
                <Events />
                <OfficeHours />
            </div>
        </section>
    );
}
