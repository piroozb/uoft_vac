interface SectionTitleProps {
    children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
    return (
        <h2 className="text-8xl font-bold mb-10 text-center">
            {children}
        </h2>
    );
}
