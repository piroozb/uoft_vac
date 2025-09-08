"use client";

import JoinUs from "./JoinUs";
import ContactUs from "./ContactUs";

export default function JoinUsContactUs() {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-10 mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-40">
      <JoinUs />
      <ContactUs />
    </div>
  );
}
