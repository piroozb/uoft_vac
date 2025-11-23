interface SectionTitleProps {
    children: React.ReactNode;
    size?: string;
    margin?: string;
}

export default function SectionTitle({ children, size = "text-4xl md:text-8xl", margin = "mb-10" }: SectionTitleProps) {
    return (
        <h2 className={`${size} font-bold ${margin} text-center`}>
            {children}
        </h2>
    );
}
