"use client";

import JoinUs from "./JoinUs";
import ContactUs from "./ContactUs";

export default function JoinUsContactUs() {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-10">
      <JoinUs />
      <ContactUs />
    </div>
  );
}
