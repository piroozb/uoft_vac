"use client";

import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import {
    EMAIL_LINK,
    DISCORD_LINK,
    INSTAGRAM_LINK,
    TEXT_LINK_DARK_ORANGE,
    TEXT_LINK_HOVER_ORANGE,
} from "../common/Constants";
import TextLink from "../common/TextLink";

export default function ContactUsPage() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-start mt-5 overflow-hidden">
            {/* Title */}
            <SectionTitle
                graphic="/title-contact-us.png"
                size="125px"
                margin=""
            >
                Contact Us!
            </SectionTitle>

            {/* Two halves */}
            <div className="flex flex-1 w-full">
                {/* Left: graphic */}
                <div className="flex-1 relative flex justify-end border">
                    <div className="w-full h-full">
                        {/* Graphic */}
                        <Image
                            src="/contact-us-graphic.png"
                            alt="Contact Us Graphic"
                            fill
                            className="my-5 object-top object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* Right: contact info */}
                <div className="flex-1 relative flex flex-col items-center border">
                    <p className="text-[3rem] font-semibold">
                        You can reach us by:
                    </p>

                    {/* Bullet 1 */}
                    <div
                        className="absolute flex items-center"
                        style={{ top: "15%", transform: "rotate(-2deg)" }}
                    >
                        <p className="text-[2rem]">
                            • Writing us an{" "}
                            <TextLink
                                text="email"
                                href={EMAIL_LINK}
                                style={{ color: TEXT_LINK_DARK_ORANGE }}
                                hoverStyle={{ color: TEXT_LINK_HOVER_ORANGE }}
                            />
                            !
                        </p>
                    </div>

                    {/* Bullet 2 */}
                    <div
                        className="absolute flex items-center"
                        style={{ top: "35%", transform: "rotate(1.5deg)" }}
                    >
                        <p className="text-[2rem]">
                            • Sending us a message on{" "}
                            <TextLink
                                text="Instagram"
                                href={INSTAGRAM_LINK}
                                style={{ color: TEXT_LINK_DARK_ORANGE }}
                                hoverStyle={{ color: TEXT_LINK_HOVER_ORANGE }}
                            />
                            !
                        </p>
                    </div>

                    {/* Bullet 3 */}
                    <div
                        className="absolute flex items-center"
                        style={{ top: "60%", transform: "rotate(-3deg)" }}
                    >
                        <p className="text-[2rem]">
                            • Ping the <strong>@President</strong> or <strong>@Vice-President</strong>
                            <br/>
                            role on{" "}
                            <TextLink
                                text="Discord"
                                href={DISCORD_LINK}
                                style={{ color: TEXT_LINK_DARK_ORANGE }}
                                hoverStyle={{ color: TEXT_LINK_HOVER_ORANGE }}
                            />
                            !
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
