import SectionTitle from "../common/SectionTitle";
import ExecEntryGrid from "./ExecEntryGrid";

// Order:
const team = {
    "Admin": ["Allison", "Sy", "Jackie"],
    "Events": ["Thomas", "Joyce", "Valentine"],
    "Graphics": ["BiewBiew", "Angelia", "Christina", "Rachel"],
    "Marketing": ["Jae", "Nabneel", "Emilio", "Kelvin"],
    "Webmaster": ["Pirooz", "Sunny"],
    "Office Manager": ["Lydia", "Alex"],
};

const COLS_MAP: Record<number, string> = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
};

export default function OurTeam() {
    return (
        <div className="my-5 mx-auto">
            {/* Title */}
            <SectionTitle>Meet the Team!</SectionTitle>

            <div>
                {Object.entries(team).map(([category, members]) => {
                    const cols = Math.min(members.length, 4);

                    return (
                        <div key={category}>
                            <SectionTitle size="60px">
                                {category}
                            </SectionTitle>

                            {/* Entries */}
                            <div
                                className={
                                    `mx-3 gap-5 grid
                                    grid-cols-1
                                    sm:grid-cols-2
                                    lg:${COLS_MAP[Math.min(cols, 3)]}
                                    xl:${COLS_MAP[cols]}`}
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
