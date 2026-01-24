"use client";

import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import {
    EMAIL_LINK,
    DISCORD_LINK,
    INSTAGRAM_LINK,
    TEXT_LINK_PASSIVE_ORANGE,
    TEXT_LINK_HOVER_ORANGE,
} from "../common/Constants";
import {
    SP_PAGE_TITLE_SIZE,
    SP_TWO_HALVES_CLASSNAME,
    SP_TEXT_CONTAINER_CLASSNAME,
    SP_TEXT_CLASSNAME,
    SP_TEXT_T_CLASSNAME
} from "../common/SmallPagesCommon";
import TextLink from "../common/TextLink";

export default function ContactUsPage() {
    return (
        <div
            className="my-[1cqw]"
            style={{ containerType: "inline-size" }}
        >

            {/* Page title */}
            <SectionTitle
                graphic="/title-contact-us.png"
                size={SP_PAGE_TITLE_SIZE}
            >
                Contact Us!
            </SectionTitle>

            {/* Two halves */}
            <div className={SP_TWO_HALVES_CLASSNAME}>

                {/* Left: graphic */}
                <div className="w-1/2 relative">
                    <Image
                        src="/contact-us-graphic.png"
                        alt="Contact Us Graphic"
                        fill
                        className="p-[1cqw] object-top object-contain"
                        priority
                    />
                </div>

                {/* Right: contact info */}
                <div
                    className={SP_TEXT_CONTAINER_CLASSNAME}
                    style={{ containerType: "inline-size" }}
                >
                    <p
                        className="mt-[5cqw] text-[5cqw] font-semibold"
                    >
                        You can reach us by:
                    </p>

                    {/* Bullet 1 */}
                    <div
                        className={SP_TEXT_CLASSNAME}
                        style={{ top: "20%", transform: "rotate(-1deg)" }}
                    >
                        <p className={SP_TEXT_T_CLASSNAME}>
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
                        className={SP_TEXT_CLASSNAME}
                        style={{ top: "40%", transform: "rotate(1deg)" }}
                    >
                        <p className={SP_TEXT_T_CLASSNAME}>
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
                        className={SP_TEXT_CLASSNAME}
                        style={{ top: "65%", transform: "rotate(-1deg)" }}
                    >
                        <p className={SP_TEXT_T_CLASSNAME}>
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
