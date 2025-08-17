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
                <ExecEntryList personKey='Sy' />
                <ExecEntryList personKey='Allison' right />
                <ExecEntryList personKey='Jackie' />
                <ExecEntryList personKey='Emily' right />
                <ExecEntryList personKey='Jaiz' />

                {/* Events */}
                <SectionTitle size={categorySize} margin={categoryMargin}>Events</SectionTitle>
                <ExecEntryList personKey='Thomas' />
                <ExecEntryList personKey='Pelin' right />
                <ExecEntryList personKey='Joyce' />
                <ExecEntryList personKey='Valentine' right />

                {/* Graphics */}
                <SectionTitle size={categorySize} margin={categoryMargin}>Graphics</SectionTitle>
                <ExecEntryList personKey='BiewBiew' />
                <ExecEntryList personKey='Angelia' right />
                <ExecEntryList personKey='Christina' />
                <ExecEntryList personKey='Rachel' right />

                {/* Marketing */}
                <SectionTitle size={categorySize} margin={categoryMargin}>Marketing</SectionTitle>
                <ExecEntryList personKey='Jae' />
                <ExecEntryList personKey='Nabneel' right />
                <ExecEntryList personKey='Emilio' />
                <ExecEntryList personKey='Kelvin' right />

                {/* Webmaster */}
                <SectionTitle size={categorySize} margin={categoryMargin}>Webmaster</SectionTitle>
                <ExecEntryList personKey='Pirooz' />
                <ExecEntryList personKey='Sunny' right />

                {/* Office Manager */}
                <SectionTitle size={categorySize} margin={categoryMargin}>Office Manager</SectionTitle>
                <ExecEntryList personKey='Lydia' />
                <ExecEntryList personKey='Alex' right />

            </div>
        </div>
    );
}
