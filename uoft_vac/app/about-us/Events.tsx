"use client";

import {
    INSTAGRAM_LINK,
    SUBSECTION_YELLOW,
    PURP_BUTTONS_PURPLE,
    PURP_BUTTON_HOVER_YELLOW,
    PURP_BUTTON_HOVER_GREEN,
} from "../common/Constants";
import {
    SUBSECTIONS_TITLE_SIZE,
    SUBSECTIONS_TEXT_CLASSNAME 
 } from "./WhatDoWeDo";
import SectionTitle from "../common/SectionTitle";

const PURP_BUTTON_CLASSNAME =
    "rounded-2xl px-[2cqw] py-[2cqw] text-[3cqw] text-white shadow-lg transform transition-all duration-300 hover:scale-95";

export default function Events() {
    return (
        <div
            className="rounded-lg shadow-lg"
            style={{
                backgroundColor: SUBSECTION_YELLOW,
                containerType: "inline-size",
            }}
        >
            {/* Subsection title */}
            <SectionTitle size={SUBSECTIONS_TITLE_SIZE}>Events</SectionTitle>

            {/* Overview */}
            <p className={SUBSECTIONS_TEXT_CLASSNAME}>
                We host a variety of events every <strong>Friday 3–6pm</strong>.
                <br />
                All members can come at any point to relax and hang out.
                <br />
                Any <strong>UofT student</strong> may sign up to become a member for <strong>free!</strong>
                <br />
                Look out for <strong>Instagram posts</strong> and <strong>Discord announcements</strong> to see what events are coming up!
            </p>

            {/* Example events graphics container */}
            <div className="mt-[2cqw]">

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
                    <div className="m-auto">
                        <img
                            src="/and-more.png"
                            alt="AND MORE!"
                            className="w-[15cqw] h-[15cqw]"
                        />
                    </div>
                </div>
            </div>

            {/* Purple buttons */}
            <div className="m-[2cqw] gap-[2cqw] grid grid-cols-2">

                {/* Instagram */}
                <a
                    href={INSTAGRAM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${PURP_BUTTON_CLASSNAME} hover:text-[${PURP_BUTTON_HOVER_YELLOW}]`}
                    style={{ backgroundColor: PURP_BUTTONS_PURPLE }}
                >
                    Check out our past events on our Instagram page!
                </a>
                {/* Join us */}
                <a
                    href="/join-us"
                    className={`${PURP_BUTTON_CLASSNAME} hover:text-[${PURP_BUTTON_HOVER_GREEN}]`}
                    style={{ backgroundColor: PURP_BUTTONS_PURPLE }}
                >
                    Feeling inspired?
                    <br />
                    Become a member today!
                </a>
            </div>
        </div>
    )
}
