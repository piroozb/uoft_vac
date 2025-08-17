import SectionTitle from "../common/SectionTitle";
import ExecEntryList from "./ExecEntryList";

const categorySize = "text-7xl";
const categoryMargin = "mb-15"

export default function OurTeam() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            {/* Title */}
            <SectionTitle>Meet the Team!</SectionTitle>

            {/* Exec categories */}
            <div className="space-y-6">
                {/* Admin */}
                <SectionTitle size={categorySize} margin={categoryMargin}>Admin</SectionTitle>
                <ExecEntryList key='Sy' />
                <ExecEntryList key='Allison' right />
                <ExecEntryList key='Jackie' />
                <ExecEntryList key='Emily' right />
                <ExecEntryList key='Jaiz' />

                {/* Events */}
                <SectionTitle size={categorySize} margin={categoryMargin}>Events</SectionTitle>
                <ExecEntryList key='Thomas' />
                <ExecEntryList key='Pelin' right />
                <ExecEntryList key='Joyce' />
                <ExecEntryList key='Valentine' right />

                {/* Graphics */}
                <SectionTitle size={categorySize} margin={categoryMargin}>Graphics</SectionTitle>
                <ExecEntryList key='BiewBiew' />
                <ExecEntryList key='Angelia' right />
                <ExecEntryList key='Christina' />
                <ExecEntryList key='Rachel' right />

                {/* Marketing */}
                <SectionTitle size={categorySize} margin={categoryMargin}>Marketing</SectionTitle>
                <ExecEntryList key='Jae' />
                <ExecEntryList key='Nabneel' right />
                <ExecEntryList key='Emilio' />
                <ExecEntryList key='Kelvin' right />

                {/* Webmaster */}
                <SectionTitle size={categorySize} margin={categoryMargin}>Webmaster</SectionTitle>
                <ExecEntryList key='Pirooz' />
                <ExecEntryList key='Sunny' right />

                {/* Office Manager */}
                <SectionTitle size={categorySize} margin={categoryMargin}>Office Manager</SectionTitle>
                <ExecEntryList key='Lydia' />
                <ExecEntryList key='Alex' right />

            </div>
        </div>
    );
}
