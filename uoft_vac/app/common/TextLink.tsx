"use client";

interface LinkProps {
    text: string;
    href: string;
    style?: React.CSSProperties;
    hoverStyle?: React.CSSProperties;
    stay?: boolean;
}

export default function TextLink({ text, href, style, hoverStyle, stay = false }: LinkProps) {
    return (
        <a
            href={href}
            target={stay ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="hover:underline relative"
            style={style}
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
