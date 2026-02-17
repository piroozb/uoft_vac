"use client";

import { useIsMobile } from "../layout/IsMobile";
import SectionTitle from "../common/SectionTitle";
import ExecEntryGrid from "./ExecEntryGrid";
import ExecEntryList from "./ExecEntryList";

const CATEGORY_CONTAINER_CLASSNAME_COMMON = "mt-20";
const CATEGORY_TITLE_HEIGHT_MAX = "10cqw";
const CATEGORY_TITLE_HEIGHT_COMMON = `min(7rem,${CATEGORY_TITLE_HEIGHT_MAX})`;

// Exec category specs:
const EXEC_CATEGORIES_SPECS: Record<string, {
    members: string[];
    members_mobile?: string[]; // If none, mobile will use the same order.
    is_first_right?: boolean; // Default: false
    titleSRC?: string;
    titleHeight?: string;
    containerClassName?: string;
} >= {

    "Admin": {
        members: ["Allison", "Sy", "Jackie"],
        members_mobile: ["Sy", "Allison", "Jackie"],
    },

    "Events": {
        members: ["Thomas", "Joyce", "Valentine"],
        containerClassName: CATEGORY_CONTAINER_CLASSNAME_COMMON,
        is_first_right: true,
    },

    "Graphics": {
        members: ["BiewBiew", "Angelia", "Christina"],
        titleSRC: "graphics",
        containerClassName: CATEGORY_CONTAINER_CLASSNAME_COMMON,
        titleHeight: CATEGORY_TITLE_HEIGHT_COMMON,
    },

    "Marketing": {
        members: ["Jae", "Nabneel", "Emilio", "Kelvin"],
        titleSRC: "marketing",
        containerClassName: CATEGORY_CONTAINER_CLASSNAME_COMMON,
        titleHeight: CATEGORY_TITLE_HEIGHT_COMMON,
        is_first_right: true,
    },

    "Webmaster": {
        members: ["Pirooz", "Sunny"],
        titleSRC: "webmaster",
        containerClassName: CATEGORY_CONTAINER_CLASSNAME_COMMON,
        titleHeight: `min(6rem,${CATEGORY_TITLE_HEIGHT_MAX})`,
        is_first_right: true,
    },

    "Office Manager": {
        members: ["Lydia", "Alex"],
        titleSRC: "office-manager",
        containerClassName: CATEGORY_CONTAINER_CLASSNAME_COMMON,
        titleHeight: CATEGORY_TITLE_HEIGHT_COMMON,
        is_first_right: true,
    },
};

// Explicit mapping from the number of entries in a category to the tailwind equivalent (for grid format)
const COLS_MAP: Record<number, string> = {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-2 min-[1600px]:grid-cols-4",
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
                    titleSRC,
                    containerClassName,
                    titleHeight,
                }, ]) => {

                    const cols = Math.min(members.length, 4);
                    const mobileMembers = members_mobile ?? members;

                    return (
                        <div className={containerClassName}>
                        
                        {/* Category title */}
                        <SectionTitle
                            src={titleSRC ? `/title-${titleSRC}.png` : undefined}
                            height={titleHeight}
                        >
                            {category}
                        </SectionTitle>
            
                        {/* Entries */}
                        {isMobile ? (
                            <div className="mt-10 gap-10 grid">
                                {mobileMembers.map((name, index) => (
                                    <ExecEntryList
                                        key={name}
                                        entryKey={name}
                                        isLeft={is_first_right ? ((index % 2 === 1)) : (index % 2 === 0)}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className={`mt-5 mx-3 gap-10 grid ${COLS_MAP[cols]}`}>
                                {members.map((name) => (
                                    <ExecEntryGrid
                                        key={name}
                                        entryKey={name}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                )}
            )}
        </div>
    );
}
