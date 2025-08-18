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
                <ExecEntryList entryKey='Sy' />
                <ExecEntryList entryKey='Allison' right />
                <ExecEntryList entryKey='Jackie' />
                <ExecEntryList entryKey='Emily' right />
                <ExecEntryList entryKey='Jaiz' />

                {/* Events */}
                <SectionTitle size={categorySize} margin={categoryMargin}>Events</SectionTitle>
                <ExecEntryList entryKey='Thomas' />
                <ExecEntryList entryKey='Pelin' right />
                <ExecEntryList entryKey='Joyce' />
                <ExecEntryList entryKey='Valentine' right />

                {/* Graphics */}
                <SectionTitle size={categorySize} margin={categoryMargin}>Graphics</SectionTitle>
                <ExecEntryList entryKey='BiewBiew' />
                <ExecEntryList entryKey='Angelia' right />
                <ExecEntryList entryKey='Christina' />
                <ExecEntryList entryKey='Rachel' right />

                {/* Marketing */}
                <SectionTitle size={categorySize} margin={categoryMargin}>Marketing</SectionTitle>
                <ExecEntryList entryKey='Jae' />
                <ExecEntryList entryKey='Nabneel' right />
                <ExecEntryList entryKey='Emilio' />
                <ExecEntryList entryKey='Kelvin' right />

                {/* Webmaster */}
                <SectionTitle size={categorySize} margin={categoryMargin}>Webmaster</SectionTitle>
                <ExecEntryList entryKey='Pirooz' />
                <ExecEntryList entryKey='Sunny' right />

                {/* Office Manager */}
                <SectionTitle size={categorySize} margin={categoryMargin}>Office Manager</SectionTitle>
                <ExecEntryList entryKey='Lydia' />
                <ExecEntryList entryKey='Alex' right />

            </div>
        </div>
    );
}
