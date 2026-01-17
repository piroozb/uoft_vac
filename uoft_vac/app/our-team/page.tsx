import SectionTitle from "../common/SectionTitle";
import ExecEntryGrid from "./ExecEntryGrid";
import ExecEntryList from "./ExecEntryList";

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

// Grid format entries order (for desktop view)
const ENTRY_ORDER_GRID = {
    "Admin": ["Allison", "Sy", "Jackie"],
    "Events": ["Thomas", "Joyce", "Valentine"],
    "Graphics": ["BiewBiew", "Angelia", "Christina", "Rachel"],
    "Marketing": ["Jae", "Nabneel", "Emilio", "Kelvin"],
    "Webmaster": ["Pirooz", "Sunny"],
    "Office Manager": ["Lydia", "Alex"],
};

// Difference: switch Sy and Allison

// List format entries order (for mobile view)
const ENTRY_ORDER_LIST = {
    "Admin": ["Sy", "Allison", "Jackie"],
    "Events": ["Thomas", "Joyce", "Valentine"],
    "Graphics": ["BiewBiew", "Angelia", "Christina", "Rachel"],
    "Marketing": ["Jae", "Nabneel", "Emilio", "Kelvin"],
    "Webmaster": ["Pirooz", "Sunny"],
    "Office Manager": ["Lydia", "Alex"],
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
        <div className="my-5 mx-auto">
            {/* Page title */}
            <SectionTitle>Meet the Team!</SectionTitle>

            <div>
                {Object.entries(ENTRY_ORDER_GRID).map(([category, members]) => {
                    const cols = Math.min(members.length, 4);

                    return (
                        <div key={category}>

                            {/* Category title */}
                            <div className="my-5">
                                <SectionTitle size="60px">
                                    {category}
                                </SectionTitle>
                            </div>

                            {/* Entries */}
                            <div
                                className={
                                    `mx-3 gap-5 grid
                                    grid-cols-1
                                    ${cols >= 2 ? 'sm:grid-cols-2' : ''}
                                    ${cols >= 3 ? 'lg:grid-cols-3' : ''}
                                    ${cols >= 4 ? 'xl:grid-cols-4' : ''}`}
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
