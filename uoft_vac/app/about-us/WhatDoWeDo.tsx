"use client";

import SectionTitle from "../common/SectionTitle";
import TextLink from "../common/TextLink";

const subsectionSize = "text-5xl";
const subsectionMargin = "mb-5";

function Events() {
    return (
        <div
            className="w-full h-[750px] rounded-md shadow-lg flex flex-col items-center justify-start p-6"
            style={{ backgroundColor: "rgb(255,206,0)" }}
        >
            <SectionTitle size={subsectionSize} margin={subsectionMargin}>Events</SectionTitle>
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
                <div className="grid grid-cols-2 gap-12 mb-5">
                    {["Workshops", "Virtual Events"].map((label, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <div className="w-30 h-30 bg-white shadow-md rounded-lg"></div>
                            <p className="mt-2 text-lg font-medium text-center">{label}</p>
                        </div>
                    ))}
                </div>

                {/* And more! */}
                <p
                    className="text-3xl font-extrabold whitespace-nowrap absolute"
                    style={{
                        right: "-1rem",
                        top: "12.5rem",
                    }}
                >
                    And<br />more!
                </p>
            </div>

            {/* Call-to-action boxes container */}
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Instagram */}
                <div
                    className="rounded-2xl px-6 py-3 text-white text-[1.2rem] shadow-md"
                    style={{ backgroundColor: "rgb(189,130,255)", minHeight: "80px" }}
                >
                    Check out our past events on our{" "}
                    <TextLink
                        text="Instagram"
                        href="https://instagram.com/uoft_vac/"
                        className="text-blue-600"
                    />
                    {" "}page!
                </div>

                {/* Join us */}
                <div
                    className="rounded-2xl px-6 py-3 text-white text-[1.2rem] shadow-md"
                    style={{ backgroundColor: "rgb(189,130,255)", minHeight: "80px" }}
                >
                    Feeling inspired?<br />
                    <TextLink
                        text="Become a member today!"
                        href="/join-us"
                        style={{ color: "rgb(53,228,78)" }}
                    />
                </div>
            </div>
        </div>
    )
}

function OfficeHours() {
    return (
        <div
            className="w-full h-[750px] rounded-md shadow-lg flex flex-col items-center justify-start p-6"
            style={{ backgroundColor: "rgb(0,214,255)" }}
        >
            <SectionTitle size={subsectionSize} margin={subsectionMargin}>Office Hours</SectionTitle>
            <p className="text-[1.35rem] text-center mb-5">
                We host office hours every <strong>Thursday 3–6pm</strong>.
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
                            src="/office-video.mp4"
                            controls
                            className="max-w-full max-h-full rounded-md shadow-md object-contain"
                            style={{ display: "block", margin: "0 auto" }}
                        ></video>
                    </div>
                </div>

                {/* Bubble graphics container */}
                <div className="flex flex-col justify-center gap-4">
                    {/* Make Art */}
                    <div className="flex justify-center">
                        <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-md text-lg font-semibold translate-x-15">
                            Make art
                        </div>
                    </div>
                    {/* Study */}
                    <div className="flex justify-center">
                        <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-md text-lg font-semibold -translate-x-20 -translate-y-3">
                            Study
                        </div>
                    </div>
                    {/* Socialise */}
                    <div className="flex justify-center">
                        <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-md text-lg font-semibold translate-x-5">
                            Socialise
                        </div>
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
