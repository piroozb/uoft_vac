import { FaDiscord, FaInstagram } from "react-icons/fa";
import { ReactElement } from "react";

import { emailLink, discordLink, instagramLink } from "./Constants";
import TextLink from "./TextLink";

// Club's email with link.
interface EmailLinkProps {
    size: number;
}

export function EmailLink({ size }: EmailLinkProps) {
    return (
        <TextLink
            text="utvisualartclub@gmail.com"
            href={emailLink}
            className="text-black"
            style={{ fontSize: size * .5}}
        />
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
