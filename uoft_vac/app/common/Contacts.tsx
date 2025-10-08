"use client";

import { FaDiscord, FaInstagram } from "react-icons/fa";
import { useState, ReactElement } from "react";

import { emailLink, discordLink, instagramLink } from "./Constants";
import TextLink from "./TextLink";

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
                href={emailLink}
                style={{ fontSize: size * 0.5 }}
            />
        );
    }

    return (
        <a
            href={emailLink}
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

// Circle icon component (for Discord & Instagram icons).
interface CircleIconProps {
    icon: ReactElement;
    bgColor: string;
    size: number;
}

export function CircleIcon({ icon, bgColor, size }: CircleIconProps) {
    return (
        <div
            className="rounded-full flex items-center justify-center"
            style={{
                backgroundColor: bgColor,
                width: size,
                height: size,
            }}
        >
            {icon && (
                <span className="text-white" style={{ fontSize: size * .7 }}>
                    {icon}
                </span>
            )}
        </div>
    );
}

// Discord icon with invite link.
interface DiscordIconProps {
    size: number;
}

export function DiscordIcon({ size }: DiscordIconProps) {
    return (
        <a
            href={discordLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
        >
            <CircleIcon icon={<FaDiscord />} bgColor="#3b82f6" size={size} /> {/* Blue */}
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
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
        >
            <CircleIcon icon={<FaInstagram />} bgColor="#ec4899" size={size} /> {/* Pink */}
        </a>
    );
}
