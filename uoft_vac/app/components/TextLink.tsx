import React from "react";

interface LinkProps {
    text: string;
    href: string;
    className: string; // Style specs.
}

export default function TextLink({ text, href, className }: LinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:underline ${className ?? ""}`}
        >
            {text}
        </a>
    );
}
