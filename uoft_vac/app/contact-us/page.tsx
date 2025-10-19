"use client";

import SectionTitle from "../common/SectionTitle";
import {
    emailLink,
    discordLink,
    instagramLink,
    textLinkDarkOrange,
    textLinkHoverOrange,
    smallTitleSize,
    smallTitleMargin,
} from "../common/Constants";
import TextLink from "../common/TextLink";

export default function ContactUsPage() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-start mt-10 px-[150px] overflow-hidden">
            {/* Title */}
            <SectionTitle size={smallTitleSize} margin={smallTitleMargin}>Contact Us!</SectionTitle>

            {/* Two halves */}
            <div className="flex flex-1 w-full">

                {/* Left: graphic */}
                <div className="flex-1 relative flex justify-end">

                    {/* Graphic */}
                    <div className="w-[90%] h-[80%] bg-green-500 relative rounded-md flex flex-col items-center">
                        
                        {/* Text */}
                        <p className="text-[1.5rem] text-center m-5">
                            Do you have any <strong>questions</strong> for us? Or are you looking to{" "}
                            <strong>collaborate on an event</strong> with us? If so, we would love to hear
                            from you!
                        </p>
                    </div>
                </div>

                {/* Right: contact info */}
                <div className="flex-1 relative flex flex-col items-center">
                    <p className="text-[3rem] font-semibold">You can reach us by:</p>

                    {/* 1 */}
                    <div
                        className="absolute flex items-center"
                        style={{ top: "10%", left: "25%", transform: "rotate(-2deg)" }}
                    >
                        <p className="text-[2rem]">
                            • Writing us an{" "}
                            <TextLink
                                text="email"
                                href={emailLink}
                                style={{ color: textLinkDarkOrange }}
                                hoverStyle={{ color: textLinkHoverOrange }}
                            />
                            !
                        </p>
                    </div>

                    {/* Bullet 2 */}
                    <div
                        className="absolute flex items-center"
                        style={{ top: "30%", left: "30%", transform: "rotate(1.5deg)" }}
                    >
                        <p className="text-[2rem]">
                            • Sending us a message on{" "}
                            <TextLink
                                text="Instagram"
                                href={instagramLink}
                                style={{ color: textLinkDarkOrange }}
                                hoverStyle={{ color: textLinkHoverOrange }}
                            />
                            !
                        </p>
                    </div>

                    {/* Bullet 3 */}
                    <div
                        className="absolute flex items-center"
                        style={{ top: "60%", left: "25%", transform: "rotate(-3deg)" }}
                    >
                        <p className="text-[2rem]">
                            • Ping the <strong>@President</strong> or <strong>@Vice-President</strong> role on{" "}
                            <TextLink
                                text="Discord"
                                href={discordLink}
                                style={{ color: textLinkDarkOrange }}
                                hoverStyle={{ color: textLinkHoverOrange }}
                            />
                            !
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
