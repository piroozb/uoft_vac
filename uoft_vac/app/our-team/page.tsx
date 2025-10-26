import SectionTitle from "../common/SectionTitle";
// import ExecEntryList from "./ExecEntryList";
import ExecEntryGrid from "./ExecEntryGrid";
import {
    SMALL_TITLE_SIZE,
    SMALL_TITLE_MARGIN,
} from "../common/Constants";

// Order:
const team = {
    Admin: ["Sy", "Allison", "Jackie", "Emily"],
    Events: ["Thomas", "Pelin", "Joyce", "Valentine"],
    Graphics: ["BiewBiew", "Angelia", "Christina", "Rachel"],
    Marketing: ["Jae", "Nabneel", "Emilio", "Kelvin"],
    Webmaster: ["Pirooz", "Sunny"],
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

// Explicit mapping for number of entries in a row from the array length to the tailwind version.
const gridCols: Record<number, string> = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4 gap-75",
    5: "grid-cols-5",
    6: "grid-cols-6",
};

export default function OurTeam() {
    return (
        <div className="max-w-6xl mx-auto mt-10">

            {/* Title */}
            <SectionTitle>Meet the Team!</SectionTitle>

            {/* Exec categories */}
            <div>
                {Object.entries(team).map(([category, members]) => (
                    <div key={category}>
                        <SectionTitle size={SMALL_TITLE_SIZE} margin={SMALL_TITLE_MARGIN}>
                            {category}
                        </SectionTitle>
                            <div className={`grid ${gridCols[members.length] || "grid-cols-4"} ${SMALL_TITLE_MARGIN}`}>
                                {members.map((name) => (
                                    <ExecEntryGrid key={name} entryKey={name} />
                                ))}
                            </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}
