"use client";

import {
    createContext,
    useContext,
    useState,
    ReactNode,
} from "react";

type WindowOffsetContextType = {
    offset: number;
    setOffset: (v: number) => void;
};

const WindowOffsetContext = createContext<WindowOffsetContextType | undefined>(undefined);

export function WindowOffsetProvider({ children }: { children: ReactNode }) {
    const [offset, setOffset] = useState(0);

    return (
        <WindowOffsetContext.Provider value={{ offset, setOffset }}>
            {children}
        </WindowOffsetContext.Provider>
    );
}

export function useWindowOffset() {
    const ctx = useContext(WindowOffsetContext);
    if (!ctx) {
        throw new Error("useWindowOffset must be used inside WindowOffsetProvider.");
    }
    return ctx;
}
