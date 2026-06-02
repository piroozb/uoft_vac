
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "About Us",
};

import AboutUsPageClient from "./AboutUsPageClient";
export default function AboutUsPage() {
    return (<AboutUsPageClient/>)
}
