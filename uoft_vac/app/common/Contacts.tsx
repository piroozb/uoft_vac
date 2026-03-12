"use client";

import Image from "next/image";
import { useState } from "react";

import { EMAIL_LINK, DISCORD_LINK, INSTAGRAM_LINK } from "./Constants";
import TextLink from "./TextLink";
import DynamicButton from "./DynamicButton";

// Club's email with link.
export function EmailLink({ size } : { size: number }) {
    const [hovered, setHovered] = useState(false);
    const [imgError, setImgError] = useState(false);

    // Return image if loaded successfully.
    if (!imgError) {
        return (
            <a
                href={EMAIL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <Image
                    src={hovered ? "/email-hovered.png" : "/email.png"}
                    alt="utvisualartclub@gmail.com"
                    width={size * 7.5} height={0}
                    onError={() => setImgError(true)}
                />
            </a>
        );
    }

    // If load error, use TextLink.
    return (
        <TextLink
            text="utvisualartclub@gmail.com"
            href={EMAIL_LINK}
            style={{ fontSize: size * .5 }}
        />
    );
}

// Discord icon with invite link.
export function DiscordIcon({ size } : { size: number }) {
    return (
        <a
            href={DISCORD_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
        >
            <DynamicButton>
                <Image
                    src="/discord-logo.png"
                    alt="Discord"
                    className="object-contain"
                    width={size} height={0}
                />
            </DynamicButton>
        </a>
    );
}

// Instagram icon with account link.
export function InstagramIcon({ size } : { size: number }) {
    return (
        <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
        >
            <DynamicButton>
                <Image
                    src="/instagram-logo.png"
                    alt="Instagram"
                    className="object-contain"
                    width={size} height={0}
                />
            </DynamicButton>
        </a>
    );
}
