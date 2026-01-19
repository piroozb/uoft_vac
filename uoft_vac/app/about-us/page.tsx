import OurMission from "./OurMission";
import WhatDoWeDo from "./WhatDoWeDo";
import FunFacts from "./FunFacts";

export default function About() {
  return (
    <>
      <div className="my-5">
        <OurMission />
        <WhatDoWeDo />
        <FunFacts />
      </div>
    </>
  )
}
