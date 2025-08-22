"use client";

import {
    membershipFormLink,
    discordLink,
    instagramLink,
    textLinkDarkPurple,
    textLinkHoverPurple,
    subsectionSize,
    subsectionMargin,
} from "../common/Constants";
import SectionTitle from "../common/SectionTitle";
import TextLink from "../common/TextLink";

export default function JoinUs() {
    return (
        // Subsection container
        <div
            className="w-full h-[750px] rounded-md shadow-lg flex flex-col items-center justify-start p-5 overflow-y-auto relative"
            style={{ backgroundColor: "rgb(255, 165, 0)" }}
        >
            {/* Title */}
            <SectionTitle size={subsectionSize} margin={subsectionMargin}>
                Join us today for free!
            </SectionTitle>

            {/* Contents */}
            <div className="max-w-3xl text-[1.5rem] leading-relaxed relative z-10">
                <ol className="list-decimal list-inside space-y-5">
                    <li>
                        Fill out the{" "}
                        <strong>member verification form</strong> linked{" "}
                        <TextLink
                            text="here"
                            href={membershipFormLink}
                            style={{ color: textLinkDarkPurple }}
                            hoverStyle={{ color: textLinkHoverPurple }}
                        />.
                    </li>

                    <li>
                        Join our <strong>Discord server</strong>{" "}
                        <TextLink
                            text="here"
                            href={discordLink}
                            style={{ color: textLinkDarkPurple }}
                            hoverStyle={{ color: textLinkHoverPurple }}
                        />
                        . Since we manually verify members, please wait 1–2 days
                        to have full access to the server. Until then, you can
                        read the server rules.
                    </li>

                    <li>
                        Follow our <strong>Instagram</strong>{" "}
                        <TextLink
                            text="here"
                            href={instagramLink}
                            style={{ color: textLinkDarkPurple }}
                            hoverStyle={{ color: textLinkHoverPurple }}
                        />{" "}
                        for more!
                    </li>
                </ol>

                {/* Wrapped text */}
                <p className="mt-8">
                    Watch out for our <strong>event announcements and club</strong>
                    <span className="pl-65 inline-block">
                        <strong>updates</strong> on <em>Discord</em> and <em>Instagram!</em>
                        <br />
                        You are free to attend the events as you please : )
                    </span>
                </p>
            </div>

            {/* Frodo placeholder */}
            <div
                className="bg-green-600 w-60 h-75 rounded-md absolute"
                style={{
                    bottom: 0,
                    left: 20,
                }}
            />
        </div>
    );
}
