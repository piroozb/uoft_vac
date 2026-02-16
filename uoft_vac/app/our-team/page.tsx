import SectionTitle from "../common/SectionTitle";
import ExecEntryGrid from "./ExecEntryGrid";
import ExecEntryList from "./ExecEntryList";

// Grid format entries order (for desktop view)
const ENTRY_ORDER_GRID = {
    "Admin": ["Allison", "Sy", "Jackie"],
    "Events": ["Thomas", "Joyce", "Valentine"],
    "Graphics": ["BiewBiew", "Angelia", "Christina"],
    "Marketing": ["Jae", "Nabneel", "Emilio", "Kelvin"],
    "Webmaster": ["Pirooz", "Sunny"],
    "Office Manager": ["Lydia", "Alex"],
};

// Difference: switch Sy and Allison

// List format entries order (for mobile view)
const ENTRY_ORDER_LIST = {
    "Admin": ["Sy", "Allison", "Jackie"],
    "Events": ["Thomas", "Joyce", "Valentine"],
    "Graphics": ["BiewBiew", "Angelia", "Christina"],
    "Marketing": ["Jae", "Nabneel", "Emilio", "Kelvin"],
    "Webmaster": ["Pirooz", "Sunny"],
    "Office Manager": ["Lydia", "Alex"],
};

const CATEGORY_TITLE_GRAPHICS: Record<string, string> = {
    "Admin": "",
    "Events": "",
    "Graphics": "graphics",
    "Marketing": "marketing",
    "Webmaster": "webmaster",
    "Office Manager": "office-manager",
};

// Explicit mapping from the number of entries in a category to the tailwind equivalent (for grid format)
const COLS_MAP: Record<number, string> = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
};

export default function OurTeam() {
    return (
        <div className="mb-15">

            {/* Page title */}
            <SectionTitle>Meet the Team!</SectionTitle>

            <div>
                {Object.entries(ENTRY_ORDER_GRID).map(([category, members]) => {
                    const cols = Math.min(members.length, 4);

                    return (
                        <div key={category}>

                            {/* Category title */}
                            <div className="mt-15">
                                <SectionTitle
                                    src={
                                        CATEGORY_TITLE_GRAPHICS[category]
                                        ? `/title-${CATEGORY_TITLE_GRAPHICS[category]}.png`
                                        : undefined
                                    }
                                    height={
                                        CATEGORY_TITLE_GRAPHICS[category]
                                        ? "min(5rem,10cqw)"
                                        : "4rem"
                                    }
                                >
                                    {category}
                                </SectionTitle>
                            </div>

                            {/* Entries */}
                            <div
                                className={`mt-5 mx-3 gap-10 grid ${cols === 4
                                        ? "grid-cols-2 min-[1600px]:grid-cols-4"
                                        : COLS_MAP[cols]}`}
                            >
                                {members.map((name) => (
                                    <ExecEntryGrid
                                        key={name}
                                        entryKey={name}
                                    />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
