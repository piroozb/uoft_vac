"use client";

import SectionTitle from "../common/SectionTitle";
import {
  membershipFormLink,
  discordLink,
  instagramLink,
  textLinkDarkPurple,
  textLinkHoverPurple,
  smallTitleSize,
  smallTitleMargin,
} from "../common/Constants";
import TextLink from "../common/TextLink";

export default function JoinUsPage() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-start mt-10 px-[150px] overflow-hidden">
      {/* Title */}
      <SectionTitle size={smallTitleSize} margin={smallTitleMargin}>Join Us Today For Free!</SectionTitle>

      {/* Two halves */}
      <div className="flex flex-1 w-full">

        {/* Left: instructions */}
        <div className="flex-1 relative">
          {/* Step 1 */}
          <div
            className="absolute flex items-center"
            style={{ top: "10%", left: "10%", transform: "rotate(-3deg)" }}
          >
            <p className="text-[2rem] font-semibold">
              1. Fill out the{" "}
              <TextLink
                text="verification form"
                href={membershipFormLink}
                style={{ color: textLinkDarkPurple }}
                hoverStyle={{ color: textLinkHoverPurple }}
              />
              !
            </p>
            <div className="w-10 h-10 bg-green-600 ml-5" />
          </div>

          {/* Step 2 */}
          <div
            className="absolute flex items-center"
            style={{ top: "30%", left: "20%", transform: "rotate(2deg)" }}
          >
            <div className="w-10 h-10 bg-green-600 mr-5" />
            <p className="text-[2rem] font-semibold">
              2. Join our{" "}
              <TextLink
                text="Discord"
                href={discordLink}
                style={{ color: textLinkDarkPurple }}
                hoverStyle={{ color: textLinkHoverPurple }}
              />{" "}
              and wait for verification!
            </p>
          </div>

          {/* Step 3 */}
          <div
            className="absolute flex items-center"
            style={{ top: "60%", left: "10%", transform: "rotate(-4deg)" }}
          >
            <p className="text-[2rem] font-semibold">
              3. Follow us on{" "}
              <TextLink
                text="Instagram"
                href={instagramLink}
                style={{ color: textLinkDarkPurple }}
                hoverStyle={{ color: textLinkHoverPurple }}
              />{" "}
              for updates!
            </p>
            <div className="w-10 h-10 bg-green-600 ml-5" />
          </div>
        </div>

        {/* Right: graphic */}
        <div className="flex-1 relative flex">

          {/* Graphic */}
          <div className="w-[90%] h-[80%] bg-green-500 relative rounded-md flex items-end justify-center">

            {/* Text */}
            <div className="absolute bottom-5 w-[90%] bg-green-700 rounded text-white text-[1.5rem] text-center leading-relaxed">
              <p>
                Watch out for our <strong>event announcements and club updates</strong> on <em>Discord</em> and <em>Instagram!</em> You are free to attend the events as you please : )
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
