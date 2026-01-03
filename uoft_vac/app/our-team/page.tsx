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

export default function OurTeam() {
    return (
        <div className="my-[1cqw] mx-auto">
            {/* Title */}
            <SectionTitle>Meet the Team!</SectionTitle>

            <div>
                {Object.entries(team).map(([category, members]) => {

                    // Number of columns (max 4)
                    const cols = Math.min(members.length, 4);

                    return (
                        <div key={category}>
                            <SectionTitle
                                size={SMALL_TITLE_SIZE}
                                margin={SMALL_TITLE_MARGIN}
                            >
                                {category}
                            </SectionTitle>

                            {/* Entries */}
                            <div className={`grid grid-cols-${cols}`}>
                                {members.map((name) => (
                                    <ExecEntryGrid key={name} entryKey={name} />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
