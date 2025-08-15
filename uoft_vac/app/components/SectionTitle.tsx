interface SectionTitleProps {
    children: React.ReactNode;
    size?: string;
    padding?: string;
}

export default function SectionTitle({ children, size = "text-8xl", padding = "mb-10" }: SectionTitleProps) {
    return (
        <h2 className={`${size} font-bold ${padding} text-center`}>
            {children}
        </h2>
    );
}
