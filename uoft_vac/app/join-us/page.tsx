"use client";

import SectionTitle from "../common/SectionTitle";
import {
  MEMBERSHIP_FORM_LINK,
  DISCORD_LINK,
  INSTAGRAM_LINK,
  TEXT_LINK_DARK_PURPLE,
  TEXT_LINK_HOVER_PURPLE,
} from "../common/Constants";
import TextLink from "../common/TextLink";

export default function JoinUsPage() {
  return (
    <div className="my-5">
      
      {/* Title */}
      <SectionTitle
        graphic="/title-join-us.png"
        size="6.5cqw"
        margin=""
      >
        Join Us Today For Free!
      </SectionTitle>

      {/* Two halves */}
      <div className="flex aspect-[2/1]">

        {/* Left: instructions */}
        <div
          className="w-1/2 relative flex flex-col items-center"
          style={{ containerType: "inline-size" }}
        >

          {/* Step 1 */}
          <div
            className="absolute"
            style={{ top: "10%", transform: "rotate(-1deg)" }}
          >
            <p
              className="font-semibold"
              style={{ fontSize: "4cqw" }}
            >
              1. Fill out the{" "}
              <TextLink
                text="verification form"
                href={MEMBERSHIP_FORM_LINK}
                style={{ color: TEXT_LINK_DARK_PURPLE }}
                hoverStyle={{ color: TEXT_LINK_HOVER_PURPLE }}
              />
              !
            </p>
          </div>

          {/* Step 2 */}
          <div
            className="absolute"
            style={{ top: "35%", transform: "rotate(1deg)" }}
          >
            <p
              className="font-semibold"
              style={{ fontSize: "4cqw" }}
            >
              2. Join our{" "}
              <TextLink
                text="Discord"
                href={DISCORD_LINK}
                style={{ color: TEXT_LINK_DARK_PURPLE }}
                hoverStyle={{ color: TEXT_LINK_HOVER_PURPLE }}
              />{" "}
              and wait for verification!
            </p>
          </div>

          {/* Step 3 */}
          <div
            className="absolute"
            style={{ top: "60%", transform: "rotate(-1deg)" }}
          >
            <p
              className="font-semibold"
              style={{ fontSize: "4cqw" }}
            >
              3. Follow us on{" "}
              <TextLink
                text="Instagram"
                href={INSTAGRAM_LINK}
                style={{ color: TEXT_LINK_DARK_PURPLE }}
                hoverStyle={{ color: TEXT_LINK_HOVER_PURPLE }}
              />{" "}
              for updates!
            </p>
          </div>
        </div>

        {/* Right: graphic */}
        <div className="flex-1">

          {/* Graphic */}
          <div className="w-[100%] h-[100%] bg-green-500 relative rounded-md flex items-end justify-center">
          </div>
        </div>
      </div>
    </div>
  );
}
