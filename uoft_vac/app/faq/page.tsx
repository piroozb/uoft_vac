
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Frequently Asked Questions",
};

import FAQPageClient from "./FAQPageClient";
export default function FAQPage() {
    return (<FAQPageClient/>)
}
