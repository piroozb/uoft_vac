"use client";

import { useState } from "react";

import { EMAIL_LINK, DISCORD_LINK, INSTAGRAM_LINK } from "./Constants";
import TextLink from "./TextLink";
import HoverShrink from "./HoverShrink";

// Club's email with link.
interface EmailLinkProps {
    size: number;
}

export function EmailLink({ size }: EmailLinkProps) {
    const [hovered, setHovered] = useState(false);
    const [imgError, setImgError] = useState(false);

    const imageSrc = hovered ? "/email-hovered.png" : "/email.png";

    // If images don't load, use TextLink instead.
    if (imgError) {
        return (
            <TextLink
                text="utvisualartclub@gmail.com"
                href={EMAIL_LINK}
                style={{ fontSize: size * 0.5 }}
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
            style={{
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
            }}
        >
            <img
                src={imageSrc}
                alt="utvisualartclub@gmail.com"
                onError={() => setImgError(true)}
                style={{ width: size * 7.5 }}
            />
        </a>
    );
}

// Discord icon with invite link.
interface DiscordIconProps {
    size: number;
}

export function DiscordIcon({ size }: DiscordIconProps) {
    return (
        <a
            href={DISCORD_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
        >
            <HoverShrink>
                <img
                    src="/discord-logo.png"
                    alt="Discord"
                    width={size}
                    height={size}
                    className="object-contain"
                />
            </HoverShrink>
        </a>
    );
}

// Instagram icon with account link.
interface InstagramIconProps {
    size: number;
}

export function InstagramIcon({ size }: InstagramIconProps) {
    return (
        <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
        >
            <HoverShrink>
                <img
                    src="/instagram-logo.png"
                    alt="Instagram"
                    width={size}
                    height={size}
                    className="object-contain"
                />
            </HoverShrink>
        </a>
    );
}
