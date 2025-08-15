"use client";

import SectionTitle from "../common/SectionTitle";

export default function WhatDoWeDo() {
    return (
        <section className="w-full px-8 py-10">
            {/* Title */}
            <SectionTitle>What do we do?</SectionTitle>

            {/* Subsections */}
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Events */}
                <div
                    className="w-full h-[750px] rounded-md shadow-lg"
                    style={{ backgroundColor: "rgb(255,206,0)" }}
                ></div>

                {/* Office Hours */}
                <div
                    className="w-full h-[750px] rounded-md shadow-lg flex flex-col items-center justify-start p-6"
                    style={{ backgroundColor: "rgb(0,214,255)" }}
                >
                    <SectionTitle size="text-6xl" padding="mb-5">Office Hours</SectionTitle>
                    <p className="text-[1.5rem] text-center mb-5">
                        We host office hours every <strong>Thursday 3–6pm</strong>.
                        <br />
                        Be sure to check our <strong>Discord announcements</strong> for additional office hours!
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
                        {/* Video container */}
                        <div className="flex flex-col items-center">
                            {/* Text */}
                            <p className="text-[1.4rem] mb-4 text-center">
                                Can't find our office? Watch this video!
                            </p>
                            {/* Video */}
                            <video
                                src="/office-video.mp4"
                                controls
                                className="max-w-full max-h-105 rounded-md shadow-md object-contain"
                                style={{ display: "block", margin: "0 auto" }}
                            ></video>
                        </div>

                        {/* Bubble graphics container */}
                        <div className="flex flex-col justify-center">
                            {/* Make art */}
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
            </div>
        </section>
    );
}
