"use client";

import {
    emailLink,
    discordLink,
    instagramLink,
    textLinkDarkOrange,
    textLinkHoverOrange,
    subsectionSize,
    subsectionMargin,
} from "../common/Constants";
import SectionTitle from "../common/SectionTitle";
import TextLink from "../common/TextLink";

export default function ContactUs() {
    return (
        <div
            className="w-full h-[750px] rounded-md shadow-lg flex flex-col items-center justify-start p-6 relative"
            style={{ backgroundColor: "rgb(0, 214, 255)" }}
        >
            {/* Title */}
            <SectionTitle size={subsectionSize} margin={subsectionMargin}>
                Contact Us!
            </SectionTitle>

            {/* Content */}
            <div className="max-w-3xl text-[1.5rem] leading-relaxed relative z-10">
                <p>
                    Do you have any <strong>questions</strong> for us? Or are you looking to{" "}
                    <strong>collaborate on an event</strong> with us? If so, we would love to hear
                    from you!
                </p>
                <br />
                <p>
                    You can reach out to us by writing an{" "}
                    <TextLink
                        text="email"
                        href={emailLink}
                        style={{ color: textLinkDarkOrange }}
                        hoverStyle={{ color: textLinkHoverOrange }}
                    />
                    , sending us a message on{" "}
                    <TextLink
                        text="Instagram"
                        href={instagramLink}
                        style={{ color: textLinkDarkOrange }}
                        hoverStyle={{ color: textLinkHoverOrange }}
                    />{" "}
                    or contacting <strong>Sy (sulaeem)</strong>, <strong>Allison (callicco)</strong>, or{" "}
                    <strong>Jackie (jackorbus)</strong> on{" "}
                    <TextLink
                        text="Discord"
                        href={discordLink}
                        style={{ color: textLinkDarkOrange }}
                        hoverStyle={{ color: textLinkHoverOrange }}
                    />
                    !
                </p>
            </div>

            {/* Green rectangle bottom-right */}
            <div
                className="bg-green-600 w-60 h-75 rounded-md absolute"
                style={{
                    bottom: 0,
                    right: 20,
                }}
            />
        </div>
    );
}
