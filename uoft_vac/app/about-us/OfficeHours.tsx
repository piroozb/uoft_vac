"use client";

import {
    SUBSECTION_SIZE,
} from "../common/Constants";
import SectionTitle from "../common/SectionTitle";

const TEXT_CLASSNAME = "text-[3.25cqw] text-center";
const BUBBLE_GRAPHICS_CLASSNAME = "w-[25cqw] h-[25cqw]";

export default function OfficeHours() {
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
            <p className={TEXT_CLASSNAME}>
                We host office hours every <strong>Monday and Wednesday from 3–6pm</strong>.
                <br />
                Be sure to check our <strong>Discord announcements</strong> for additional office hours!
            </p>

            <div className="grid grid-cols-[auto_1fr]">

                {/* Video container */}
                <div className="ml-[2cqw] flex flex-col">

                    <p className={TEXT_CLASSNAME}>
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
