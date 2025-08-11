import React from "react";

interface TitleProps {
    children: React.ReactNode;
}

export default function Title({ children }: TitleProps) {
    return (
        <h2 className="text-8xl font-bold mb-12 text-center">
            {children}
        </h2>
    );
}
