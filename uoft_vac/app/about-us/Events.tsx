"use client";

import Image from "next/image";

import {
    INSTAGRAM_LINK,
    SUBSECTION_YELLOW,
    PURP_BUTTONS_PURPLE,
    PAGE_BUTTONS_PASSIVE_YELLOW,
    PURP_BUTTON_HOVER_GREEN,
} from "../common/Constants";
import {
    SUBSECTIONS_CONTAINER_CLASSNAME,
    SUBSECTIONS_TITLE_HEIGHT,
    SUBSECTIONS_TEXT_CLASSNAME,
} from "./WhatDoWeDo";
import { useIsMobile } from "../layout/UseIsMobile";
import SectionTitle from "../common/SectionTitle";
import DynamicButton from "../common/DynamicButton";

const EVENT_GRAPHICS_ROW_CLASSNAME = "gap-[1cqw] text-[max(3cqw,.8rem)] flex flex-col items-center font-medium text-center";
const EVENT_GRAPHICS_DIV_CLASSNAME = "w-[20cqw] aspect-square border-2 rounded-lg shadow-lg relative overflow-hidden";
const PURP_BUTTON_CLASSNAME = "px-[2cqw] py-[2cqw] text-[max(3cqw,1.1rem)] block rounded-lg shadow-lg text-white";
const PURP_BUTTON_CLASSNAME_MOBILE_ADD = "text-center";

export default function Events() {
    const isMobile = useIsMobile();

    return (

        // Subsection container; coloured rectangle
        <div
            className={SUBSECTIONS_CONTAINER_CLASSNAME}
            style={{
                backgroundColor: SUBSECTION_YELLOW,
                containerType: "inline-size",
            }}
        >
            
            {/* Subsection title */}
            <SectionTitle height={SUBSECTIONS_TITLE_HEIGHT}>Events</SectionTitle>

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
                    {[
                        ["Themed Events", "/events-themed-events.png"],
                        ["Craft Days", "/events-craft-days.png"],
                        ["Gallery Visits", "/events-gallery-visits.png"]
                    ].map(([label, src], idx) => (
                        <div
                            key={idx}
                            className={EVENT_GRAPHICS_ROW_CLASSNAME}
                        >
                            <div className={EVENT_GRAPHICS_DIV_CLASSNAME}>
                                <Image
                                    src={src}
                                    alt={label}
                                    fill
                                />
                            </div>
                            {label}
                        </div>
                    ))}
                </div>

                {/* Row 2 */}
                <div className="mt-[2cqw] grid grid-cols-3">
                    {[
                        ["Workshops", "/events-workshops.png"],
                        ["Virtual Events", "/events-virtual-events.png"]]
                        .map(([label, src], idx) => (
                        <div
                            key={idx}
                            className={EVENT_GRAPHICS_ROW_CLASSNAME}
                        >
                            <div className={EVENT_GRAPHICS_DIV_CLASSNAME}>
                                <Image
                                    src={src}
                                    alt={label}
                                    fill
                                />
                            </div>
                            {label}
                        </div>
                    ))}

                    {/* And more! */}
                    <div className="flex justify-center items-center">
                        <div className="w-[15cqw] -translate-y-[2cqw] aspect-square relative">
                            <Image
                                src="/and-more.png"
                                alt="AND MORE!"
                                className="object-contain"
                                fill
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Purple buttons */}
            <div className={`m-[2cqw] gap-[2cqw] ${isMobile ? "flex flex-col" : "grid grid-cols-2"}`}>

                {/* Instagram */}
                <DynamicButton>
                    <a
                        href={INSTAGRAM_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${PURP_BUTTON_CLASSNAME}
                            ${isMobile && PURP_BUTTON_CLASSNAME_MOBILE_ADD}`}
                        style={{ backgroundColor: PURP_BUTTONS_PURPLE }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.color = PAGE_BUTTONS_PASSIVE_YELLOW)
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "")
                        }
                    >
                        Check out our past events on our Instagram page!
                    </a>
                </DynamicButton>

                {/* Join us */}
                <DynamicButton>
                    <a
                        href="/join-us"
                        className={`${PURP_BUTTON_CLASSNAME}
                            ${isMobile && PURP_BUTTON_CLASSNAME_MOBILE_ADD}`}
                        style={{ backgroundColor: PURP_BUTTONS_PURPLE }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.color = PURP_BUTTON_HOVER_GREEN)
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "")
                        }
                    >
                        Feeling inspired?{" "}
                        {isMobile ? <></> : <br/>}
                        Become a member today!
                    </a>
                </DynamicButton>
            </div>
        </div>
    )
}
