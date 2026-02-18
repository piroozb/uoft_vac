"use client";

import { useIsMobile } from "../layout/IsMobile";
import SectionTitle from "../common/SectionTitle";
import ExecEntryGrid from "./ExecEntryGrid";
import ExecEntryList from "./ExecEntryList";

export const NAME_OUTLINE_TEXT_SHADOW =
    `-1px -1px 0 #000,
    1px -1px 0 #000,
    -1px  1px 0 #000,
    1px  1px 0 #000`;

const CATEGORY_CONTAINER_CLASSNAME_COMMON = "pt-[min(5rem,7cqw)]";
const CATEGORY_TITLE_HEIGHT_MAX = "11cqw";

// Exec category specs:
const EXEC_CATEGORIES_SPECS: Record<string, {
    members: string[];
    members_mobile?: string[]; // If none, mobile will use the same order.
    is_first_right?: boolean; // Default: false
    titleSrc?: string;
    titleHeight?: string;
    containerClassName?: string;
} >= {

    "Admin": {
        members: ["Allison", "Sy", "Jackie"],
        members_mobile: ["Sy", "Allison", "Jackie"],
        titleSrc: "admin",
        containerClassName: "mt-5",
        titleHeight: `min(6rem,${CATEGORY_TITLE_HEIGHT_MAX})`,
    },

    "Events": {
        members: ["Thomas", "Joyce", "Valentine"],
        titleSrc: "events",
        containerClassName: CATEGORY_CONTAINER_CLASSNAME_COMMON,
        titleHeight: `min(7rem,${CATEGORY_TITLE_HEIGHT_MAX})`,
        is_first_right: true,
    },

    "Graphics": {
        members: ["BiewBiew", "Angelia", "Christina"],
        titleSrc: "graphics",
        containerClassName: CATEGORY_CONTAINER_CLASSNAME_COMMON,
        titleHeight: `min(7rem,${CATEGORY_TITLE_HEIGHT_MAX})`,
    },

    "Marketing": {
        members: ["Jae", "Nabneel", "Emilio", "Kelvin"],
        titleSrc: "marketing",
        containerClassName: CATEGORY_CONTAINER_CLASSNAME_COMMON,
        titleHeight: `min(7rem,${CATEGORY_TITLE_HEIGHT_MAX})`,
        is_first_right: true,
    },

    "Webmaster": {
        members: ["Pirooz", "Sunny"],
        titleSrc: "webmaster",
        containerClassName: CATEGORY_CONTAINER_CLASSNAME_COMMON,
        titleHeight: `min(6rem,${CATEGORY_TITLE_HEIGHT_MAX})`,
        is_first_right: true,
    },

    "Office Manager": {
        members: ["Lydia", "Alex"],
        titleSrc: "office-manager",
        containerClassName: CATEGORY_CONTAINER_CLASSNAME_COMMON,
        titleHeight: `min(7rem,${CATEGORY_TITLE_HEIGHT_MAX})`,
        is_first_right: true,
    },
};

export default function OurTeam() {
    const isMobile = useIsMobile()

    return (
        <div className="mb-15">
            {Object.entries(EXEC_CATEGORIES_SPECS).map( ([
                category, {
                    members,
                    members_mobile,
                    is_first_right,
                    titleSrc,
                    containerClassName,
                    titleHeight,
                }, ]) => {

                    const cols = Math.min(members.length, 4);
                    const mobileMembers = members_mobile ?? members;

                    return (
                        <div className={containerClassName}>
                        
                            {/* Category title */}
                            <SectionTitle
                                src={titleSrc ? `/title-execs-${titleSrc}.png` : undefined}
                                height={titleHeight}
                            >
                                {category}
                            </SectionTitle>
                
                            {/* Entries */}

                            {/* DESKTOP VIEW */}
                            {!isMobile ? (
                                <div className={`mt-5 mx-3 gap-10 grid ${{
                                    1: "grid-cols-1",
                                    2: "grid-cols-2",
                                    3: "grid-cols-3",
                                    4: "grid-cols-4 max-[1600px]:grid-cols-2",
                                }[cols]}`}>
                                    {members.map((name) => (
                                        <ExecEntryGrid
                                            key={name}
                                            entryKey={name}
                                        />
                                    ))}
                                </div>
                            
                            // MOBILE VIEW
                            ) : (
                                <div className="mt-10 gap-10 grid">
                                    {mobileMembers.map((name, index) => (
                                        <>

                                            {/* Use list format normally */}
                                            <div className={`block max-[700px]:hidden`}>
                                                <ExecEntryList
                                                    key={name}
                                                    entryKey={name}
                                                    isLeft={is_first_right ? ((index % 2 === 1)) : (index % 2 === 0)}
                                                />
                                            </div>

                                            {/* Use grid format for less than … */}
                                            <div className={`hidden max-[700px]:block`}>
                                                <ExecEntryGrid
                                                    key={name}
                                                    entryKey={name}
                                                />
                                            </div>
                                        </>
                                    ))}
                                </div>
                            )}
                        </div>
                    )
                }
            )}
        </div>
    );
}
