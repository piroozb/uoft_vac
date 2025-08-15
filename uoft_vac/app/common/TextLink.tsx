interface LinkProps {
    text: string;
    href: string;
    className?: string; // Style specs.
    style?: React.CSSProperties;
}

export default function TextLink({ text, href, className, style }: LinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:underline ${className ?? ""}`}
            style={style}
        >
            {text}
        </a>
    );
}
