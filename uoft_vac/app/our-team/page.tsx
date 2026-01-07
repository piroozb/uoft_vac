import SectionTitle from "../common/SectionTitle";
// import ExecEntryList from "./ExecEntryList";
import ExecEntryGrid from "./ExecEntryGrid";
import {
    SMALL_TITLE_SIZE,
    SMALL_TITLE_MARGIN,
} from "../common/Constants";

// Order:
const team = {
    "Admin": ["Allison", "Sy", "Jackie"],
    "Events": ["Thomas", "Joyce", "Valentine"],
    "Graphics": ["BiewBiew", "Angelia", "Christina", "Rachel"],
    "Marketing": ["Jae", "Nabneel", "Emilio", "Kelvin"],
    "Webmaster": ["Pirooz", "Sunny"],
    "Office Manager": ["Lydia", "Alex"],
};

// export default function OurTeam() {
//     return (
//         <div className="max-w-4xl mx-auto py-10">

//             {/* Title */}
//             <SectionTitle>Meet the Team!</SectionTitle>

//             {/* Exec categories */}
//             <div>
//                 {Object.entries(team).map(([category, members]) => (
//                     <div key={category}>

//                         {/* Category title */}
//                         <SectionTitle size={categorySize} margin={categoryMargin}>
//                             {category}
//                         </SectionTitle>

//                         {/* Mapped exec entries */}
//                         {members.map((name, i) => (
//                             <ExecEntryList
//                                 key={name}
//                                 entryKey={name}

//                                 // Admin starts left, subsequent categories start right.
//                                 right={category === "Admin" ? i % 2 === 1 : i % 2 === 0}
//                             />
//                         ))}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// Explicit mapping from the number of entries in a category to the tailwind equivalent.
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
                                    `mx-3 gap-5 grid ${cols === 4
                                        ? "grid-cols-2 min-[1600px]:grid-cols-4"
                                        : COLS_MAP[cols]
                                    }`
                                }
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
