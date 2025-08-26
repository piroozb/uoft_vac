import SectionTitle from "../common/SectionTitle";
import ExecEntryList from "./ExecEntryList";
import ExecEntryGrid from "./ExecEntryGrid";

const categorySize = "text-7xl";
const categoryMargin = "mb-15";

// Order
const team = {
    Admin: ["Sy", "Allison", "Jackie", "Emily", "Jaiz"],
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

export default function OurTeam() {
    return (
        <div className="max-w-6xl mx-auto mt-10">

            {/* Title */}
            <SectionTitle>Meet the Team!</SectionTitle>

            {/* Exec categories */}
            <div>
                {Object.entries(team).map(([category, members]) => (
                    <div key={category}>
                        <SectionTitle size={categorySize} margin={categoryMargin}>
                            {category}
                        </SectionTitle>

                        {/* If it's admin, entries are in two rows. */}
                        {category === "Admin" ? (
                            <>

                                {/* First row */}
                                <div className="grid grid-cols-3">
                                    <ExecEntryGrid entryKey="Allison" />
                                    <ExecEntryGrid entryKey="Sy" />
                                    <ExecEntryGrid entryKey="Jackie" />
                                </div>

                                {/* Second row */}
                                <div className="grid grid-cols-2 mb-10">
                                    <ExecEntryGrid entryKey="Emily" />
                                    <ExecEntryGrid entryKey="Jaiz" />
                                </div>
                            </>
                        ):

                        // All other categories have entries in one row.
                        (
                            <div className={`grid grid-cols-${members.length} mb-10`}>
                                {members.map((name) => (
                                    <ExecEntryGrid key={name} entryKey={name} />
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
