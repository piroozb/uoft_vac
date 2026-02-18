"use client";

import Image from "next/image";

import {
  MEMBERSHIP_FORM_LINK,
  DISCORD_LINK,
  INSTAGRAM_LINK,
  TEXT_LINK_PASSIVE_PURPLE,
  TEXT_LINK_HOVER_PURPLE,
} from "../common/Constants";
import {
    SP_TITLE_HEIGHT,
    SP_TWO_HALVES_CLASSNAME,
    SP_GRAPHIC_CONTAINER_CLASSNAME,
    SP_GRAPHIC_CLASSNAME,
    SP_TEXT_CONTAINER_CLASSNAME,
    SP_TEXT_CLASSNAME,
    SP_TEXT_T_CLASSNAME,
} from "../common/SmallPagesCommon";
import SectionTitle from "../common/SectionTitle";
import TextLink from "../common/TextLink";

const INSTRUCTIONS_T_CLASSNAME = `${SP_TEXT_T_CLASSNAME} font-semibold`;

export default function JoinUsPage() {
  return (
    <div
      className="my-[1cqw]"
      style={{ containerType: "inline-size" }}
    >
      
      {/* Page title */}
      <SectionTitle
        src="/title-join-us.png"
        height={SP_TITLE_HEIGHT}
      >
        Join Us Today For Free!
      </SectionTitle>

      {/* Two halves */}
      <div className={SP_TWO_HALVES_CLASSNAME}>

        {/* Left: instructions */}
        <div
          className={SP_TEXT_CONTAINER_CLASSNAME}
          style={{ containerType: "inline-size" }}
        >

          {/* Step 1 */}
          <div
            className={SP_TEXT_CLASSNAME}
            style={{ top: "10%", transform: "rotate(-1deg)" }}
          >
            <p className={INSTRUCTIONS_T_CLASSNAME}>
              1. Fill out the{" "}
              <TextLink
                text="verification form"
                href={MEMBERSHIP_FORM_LINK}
                style={{ color: TEXT_LINK_PASSIVE_PURPLE }}
                hoverStyle={{ color: TEXT_LINK_HOVER_PURPLE }}
              />
              !
            </p>
          </div>

          {/* Step 2 */}
          <div
            className={SP_TEXT_CLASSNAME}
            style={{ top: "35%", transform: "rotate(1deg)" }}
          >
            <p className={INSTRUCTIONS_T_CLASSNAME}>
              2. Join our{" "}
              <TextLink
                text="Discord"
                href={DISCORD_LINK}
                style={{ color: TEXT_LINK_PASSIVE_PURPLE }}
                hoverStyle={{ color: TEXT_LINK_HOVER_PURPLE }}
              />{" "}
              and wait for verification!
            </p>
          </div>

          {/* Step 3 */}
          <div
            className={SP_TEXT_CLASSNAME}
            style={{ top: "60%", transform: "rotate(-1deg)" }}
          >
            <p className={INSTRUCTIONS_T_CLASSNAME}>
              3. Follow us on{" "}
              <TextLink
                text="Instagram"
                href={INSTAGRAM_LINK}
                style={{ color: TEXT_LINK_PASSIVE_PURPLE }}
                hoverStyle={{ color: TEXT_LINK_HOVER_PURPLE }}
              />{" "}
              for updates!
            </p>
          </div>
        </div>

        {/* Right: graphic */}
        <div className={SP_GRAPHIC_CONTAINER_CLASSNAME}>
          <Image
            src="/join-us-graphic.png"
            alt="Join Us!"
            className={SP_GRAPHIC_CLASSNAME}
            fill
          />
        </div>
      </div>
    </div>
  );
}
