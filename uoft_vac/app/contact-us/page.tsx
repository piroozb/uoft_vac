"use client";

import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import {
    EMAIL_LINK,
    DISCORD_LINK,
    INSTAGRAM_LINK,
    TEXT_LINK_PASSIVE_ORANGE,
    TEXT_LINK_HOVER_ORANGE,
    SMALL_PAGES_TITLE_SIZE,
} from "../common/Constants";
import TextLink from "../common/TextLink";

const BULLETS_CLASSNAME = "absolute flex items-center";

export default function ContactUsPage() {
    return (
        <div
            className="w-full my-[1cqw] flex flex-col items-center"
            style={{ containerType: "inline-size" }}
        >

            {/* Page title */}
            <SectionTitle
                graphic="/title-contact-us.png"
                size={SMALL_PAGES_TITLE_SIZE}
            >
                Contact Us!
            </SectionTitle>

            {/* Two halves */}
            <div className="w-full aspect-[2/1] flex">

                {/* Left: graphic */}
                <div className="w-1/2 relative">
                    <Image
                        src="/contact-us-graphic.png"
                        alt="Contact Us Graphic"
                        fill
                        className="mt-[1cqw] object-top object-contain"
                        priority
                    />
                </div>

                {/* Right: contact info */}
                <div
                    className="w-1/2 relative flex flex-col items-center"
                    style={{ containerType: "inline-size" }}
                >
                    <p
                        className="mt-[5cqw] font-semibold"
                        style={{ fontSize: "5cqw" }}
                    >
                        You can reach us by:
                    </p>

                    {/* Bullet 1 */}
                    <div
                        className={BULLETS_CLASSNAME}
                        style={{ top: "20%", transform: "rotate(-1deg)" }}
                    >
                        <p style={{ fontSize: "4cqw" }}>
                            • Writing us an{" "}
                            <TextLink
                                text="email"
                                href={EMAIL_LINK}
                                style={{ color: TEXT_LINK_PASSIVE_ORANGE }}
                                hoverStyle={{ color: TEXT_LINK_HOVER_ORANGE }}
                            />
                            !
                        </p>
                    </div>

                    {/* Bullet 2 */}
                    <div
                        className={BULLETS_CLASSNAME}
                        style={{ top: "40%", transform: "rotate(1deg)" }}
                    >
                        <p style={{ fontSize: "4cqw" }}>
                            • Sending us a message on{" "}
                            <TextLink
                                text="Instagram"
                                href={INSTAGRAM_LINK}
                                style={{ color: TEXT_LINK_PASSIVE_ORANGE }}
                                hoverStyle={{ color: TEXT_LINK_HOVER_ORANGE }}
                            />
                            !
                        </p>
                    </div>

                    {/* Bullet 3 */}
                    <div
                        className={BULLETS_CLASSNAME}
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
                                style={{ color: TEXT_LINK_PASSIVE_ORANGE }}
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
