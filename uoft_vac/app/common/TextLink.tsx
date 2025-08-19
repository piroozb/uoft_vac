"use client";

interface LinkProps {
    text: string;
    href: string;
    style?: React.CSSProperties;
    hoverStyle?: React.CSSProperties;
}

export default function TextLink({ text, href, style, hoverStyle }: LinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={style}
            className="hover:underline relative"
            onMouseEnter={(e) => {
                if (hoverStyle) Object.assign(e.currentTarget.style, hoverStyle);
            }}
            onMouseLeave={(e) => {
                if (style) e.currentTarget.style.color = style.color || "";
            }}
        >
            {text}
        </a>
    );
}
