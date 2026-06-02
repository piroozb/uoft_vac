
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact Us",
};

import ContactUsPageClient from "./ContactUsPageClient";
export default function ContactUsPage() {
    return (<ContactUsPageClient/>)
}
