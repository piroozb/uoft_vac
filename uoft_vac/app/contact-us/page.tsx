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
        <div className="w-full flex flex-col items-center justify-start my-5">
            {/* Title */}
            <SectionTitle
                graphic="/title-contact-us.png"
                size="7.5cqw"
                margin=""
            >
                Contact Us!
            </SectionTitle>

            {/* Two halves */}
            <div className="flex w-full aspect-[2/1]">
                {/* Left: graphic */}
                <div className="w-1/2 relative">
                    <Image
                        src="/contact-us-graphic.png"
                        alt="Contact Us Graphic"
                        fill
                        className="mt-5 object-top object-contain"
                        priority
                    />
                </div>

                {/* Right: contact info (container query enabled) */}
                <div
                    className="w-1/2 relative flex flex-col items-center"
                    style={{ containerType: "inline-size" }}
                >
                    <p className="mt-5 font-semibold" style={{ fontSize: "5cqw" }}>
                        You can reach us by:
                    </p>

                    {/* Bullet 1 */}
                    <div
                        className="absolute flex items-center"
                        style={{ top: "20%", transform: "rotate(-1deg)" }}
                    >
                        <p style={{ fontSize: "4cqw" }}>
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
                        style={{ top: "40%", transform: "rotate(1deg)" }}
                    >
                        <p style={{ fontSize: "4cqw" }}>
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
                        className="absolute flex items-center text-center"
                        style={{ top: "65%", transform: "rotate(-1deg)" }}
                    >
                        <p style={{ fontSize: "4cqw" }}>
                            • Ping the <strong>@President</strong> or{" "}
                            <strong>@Vice-President</strong>
                            <br />
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
