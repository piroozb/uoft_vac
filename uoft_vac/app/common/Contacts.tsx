"use client";

import Image from "next/image";
import { useState } from "react";

import { EMAIL_LINK, DISCORD_LINK, INSTAGRAM_LINK } from "./Constants";
import TextLink from "./TextLink";
import HoverShrink from "./HoverShrink";

// Club's email with link.
export function EmailLink({ size } : { size: number }) {
    const [hovered, setHovered] = useState(false);
    const [imgError, setImgError] = useState(false);

    const imageSrc = hovered ? "/email-hovered.png" : "/email.png";

    // If image doesn't load, use TextLink instead.
    if (imgError) {
        return (
            <TextLink
                text="utvisualartclub@gmail.com"
                href={EMAIL_LINK}
                style={{ fontSize: size * .5 }}
            />
        );
    }

    return (
        <a
            href={EMAIL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Image
                src={imageSrc}
                alt="utvisualartclub@gmail.com"
                width={size * 7.5} height={0}
                onError={() => setImgError(true)}
            />
        </a>
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
            <HoverShrink>
                <Image
                    src="/discord-logo.png"
                    alt="Discord"
                    className="object-contain"
                    width={size} height={0}
                />
            </HoverShrink>
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
            <HoverShrink>
                <Image
                    src="/instagram-logo.png"
                    alt="Instagram"
                    className="object-contain"
                    width={size} height={0}
                />
            </HoverShrink>
        </a>
    );
}
