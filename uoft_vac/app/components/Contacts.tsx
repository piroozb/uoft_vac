import { FaDiscord, FaInstagram } from "react-icons/fa";
import { ReactElement } from "react";

// Circle icon component (for Discord & Instagram icons).
interface CircleIconProps {
    icon: ReactElement;
    bgColor: string;
    size?: number; // Optional icon size
}
export function CircleIcon({ icon, bgColor, size = 20 }: CircleIconProps) {
    return (
        <div
            className={`w-10 h-10 rounded-full flex items-center justify-center`}
            style={{ backgroundColor: bgColor }}
        >
            {/* Clone the icon and override its size and color */}
            {icon && (
                <span className="text-white" style={{ fontSize: size }}>
                    {icon}
                </span>
            )}
        </div>
    );
}

// Club's email with link.
export function EmailLink() {
    return (
        <a
            href="mailto:utvisualartclub@gmail.com"
            className="text-black hover:underline"
        >
            utvisualartclub@gmail.com
        </a>
    );
}

// Discord icon with invite link.
export function DiscordIcon() {
    return (
        <a
            href="https://discord.gg/YOUR_INVITE"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
        >
            <CircleIcon icon={<FaDiscord />} bgColor="#3b82f6" size={22} /> {/* Blue */}
        </a>
    );
}

// Instagram icon with account link.
export function InstagramIcon() {
    return (
        <a
            href="https://instagram.com/YOUR_HANDLE"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
        >
            <CircleIcon icon={<FaInstagram />} bgColor="#ec4899" size={22} /> {/* Pink */}
        </a>
    );
}
