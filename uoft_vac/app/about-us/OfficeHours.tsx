"use client";

import {
    SUBSECTION_BLUE,
} from "../common/Constants";
import {
    SUBSECTIONS_TITLE_SIZE,
    SUBSECTIONS_TEXT_CLASSNAME 
 } from "./WhatDoWeDo";
import SectionTitle from "../common/SectionTitle";

const BUBBLE_GRAPHICS_CLASSNAME = "w-[25cqw] h-[25cqw]";

export default function OfficeHours() {
    return (
        <div
            className="rounded-lg shadow-lg"
            style={{
                backgroundColor: SUBSECTION_BLUE,
                containerType: "inline-size",
            }}
        >
            {/* Subsection title */}
            <SectionTitle size={SUBSECTIONS_TITLE_SIZE}>Office Hours</SectionTitle>

            {/* Overview */}
            <p className={SUBSECTIONS_TEXT_CLASSNAME}>
                We host office hours every <strong>Monday and Wednesday from 3–6pm</strong>.
                <br />
                Be sure to check our <strong>Discord announcements</strong> for additional office hours!
            </p>

            <div className="grid grid-cols-[auto_1fr]">

                {/* Video container */}
                <div className="ml-[2cqw] flex flex-col">

                    <p className={SUBSECTIONS_TEXT_CLASSNAME}>
                        Can't find our office?<br />
                        Watch this video!
                    </p>

                    {/* Video */}
                    <div className="mt-[1cqw] rounded-lg">
                        <video
                            src="/office-video.mp4"
                            controls
                            className="h-[69cqw] rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                {/* Bubble graphics container */}
                <div className="flex flex-col items-center">

                    {/* Make Art */}
                    <div style={{ transform: "translateX(calc(10cqw))" }}>
                        <img
                            src="/office-hours-make-art.png"
                            alt="Make art"
                            className={BUBBLE_GRAPHICS_CLASSNAME}
                        />
                    </div>

                    {/* Study */}
                    <div style={{ transform: "translateX(calc(-10cqw)) translateY(calc(-2cqw))" }}>
                        <img
                            src="/office-hours-study.png"
                            alt="Study"
                            className={BUBBLE_GRAPHICS_CLASSNAME}
                        />
                    </div>

                    {/* Socialise */}
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
