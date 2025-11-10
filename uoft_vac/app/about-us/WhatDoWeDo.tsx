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
                <div className="grid grid-cols-3 gap-10 mb-5">
                    {["Themed Events", "Craft Days", "Gallery Visits"].map((label, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <div className="w-30 h-30 bg-white shadow-md rounded-lg"></div>
                            <p className="mt-2 text-lg font-medium text-center">{label}</p>
                        </div>
                    ))}
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-3 gap-10 mb-5">
                    {["Workshops", "Virtual Events"].map((label, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <div className="w-30 h-30 bg-white shadow-md rounded-lg"></div>
                            <p className="mt-2 text-lg font-medium text-center">{label}</p>
                        </div>
                    ))}
                {/* And more! */}
                    <div className="flex justify-center">
                        <img
                            src="./and-more.png"
                            alt="AND MORE!"
                            className="w-25 object-contain"
                        />
                    </div>
                </div>


            </div>

            {/* Purple buttons */}
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Instagram */}
                <a
                    href={INSTAGRAM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl px-6 py-3 text-[1.2rem] text-white shadow-md 
                   transform transition-all duration-300
                   hover:scale-95 hover:text-[rgb(255,254,176)]"
                    style={{ backgroundColor: "rgb(80,43,113)", minHeight: "80px" }}
                >
                    Check out our past events on our Instagram page!
                </a>

                {/* Join us */}
                <a
                    href="/join-us"
                    className="rounded-2xl px-6 py-3 text-[1.2rem] text-white shadow-md 
                   transform transition-all duration-300
                   hover:scale-95 hover:text-[rgb(198,255,206)]"
                    style={{ backgroundColor: "rgb(80,43,113)", minHeight: "80px" }}
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
            className="w-full rounded-md shadow-lg flex flex-col items-center justify-start p-5"
            style={{ backgroundColor: "rgb(0,214,255)" }}
        >
            <SectionTitle size={SUBSECTION_SIZE} margin={SUBSECTION_MARGIN}>Office Hours</SectionTitle>
            <p className="text-[1.35rem] text-center mb-5">
                We host office hours every <strong>Tuesday and Thursday from 3–6pm</strong>.
                <br />
                Be sure to check our <strong>Discord announcements</strong> for additional office hours!
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
                {/* Video container */}
                <div className="flex flex-col items-center">
                    <p className="text-[1.35rem] mb-4 text-center">
                        Can't find our office? Watch this video!
                    </p>
                    <div
                        className="overflow-hidden rounded-md w-full"
                        style={{ height: "450px" }}
                    >
                        <video
                            src="./office-video.mp4"
                            controls
                            className="max-w-full max-h-full rounded-md shadow-md object-contain"
                            style={{ display: "block", margin: "0 auto" }}
                        ></video>
                    </div>
                </div>

                {/* Bubble graphics container */}
                <div className="flex flex-col justify-center gap">
                    {/* Make Art */}
                    <div className="flex justify-center">
                        <img
                            src="./office-hours-make-art.png"
                            alt="Make art"
                            className="w-40 h-40 object-contain translate-x-5"
                        />
                    </div>
                    {/* Study */}
                    <div className="flex justify-center">
                        <img
                            src="./office-hours-study.png"
                            alt="Study"
                            className="w-40 h-40 object-contain -translate-x-12.5"
                        />
                    </div>
                    {/* Socialise */}
                    <div className="flex justify-center">
                        <img
                            src="./office-hours-socialise.png"
                            alt="Socialise"
                            className="w-40 h-40 object-contain translate-x-5"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function WhatDoWeDo() {
    return (
        <section className="w-full px-8 my-10">
            {/* Title */}
            <SectionTitle>What do we do?</SectionTitle>

            {/* Subsections */}
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <Events />
                <OfficeHours />
            </div>
        </section>
    );
}
