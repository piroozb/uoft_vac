import OurMission from "./OurMission";
import WhatDoWeDo from "./WhatDoWeDo";
import FunFacts from "./FunFacts";

export default function About() {
  return (
    <>
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-40">
      <OurMission />
      <WhatDoWeDo />
      <FunFacts />
    </div>
    </>
  )
}