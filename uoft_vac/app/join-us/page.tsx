"use client";

import SectionTitle from "../common/SectionTitle";
import {
  MEMBERSHIP_FORM_LINK,
  DISCORD_LINK,
  INSTAGRAM_LINK,
  TEXT_LINK_PASSIVE_PURPLE,
  TEXT_LINK_HOVER_PURPLE,
} from "../common/Constants";
import {
    SP_PAGE_TITLE_SIZE,
    SP_TWO_HALVES_CLASSNAME,
    SP_TEXT_CONTAINER_CLASSNAME,
    SP_TEXT_CLASSNAME,
    SP_TEXT_T_CLASSNAME,
} from "../common/SmallPagesCommon";
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
        graphic="/title-join-us.png"
        size={SP_PAGE_TITLE_SIZE}
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
        <div className="flex-1">

          {/* Graphic */}
          <div className="w-[100%] h-[100%] bg-green-500 relative rounded-md flex items-end justify-center">
          </div>
        </div>
      </div>
    </div>
  );
}
