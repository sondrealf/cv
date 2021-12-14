import * as React from "react"
import Subtitle from "../Subtitle"
import { BsStars } from "react-icons/bs"
import { useInfo } from "../info-context"
import { techSection } from "../../../lib/types"
import TechSection from "./components/TechSection"
const Skills = () => {
  const { state } = useInfo()
  return (
    <div>
      <Subtitle
        Icon={BsStars}
        title={
          state.lang == "en"
            ? "My tech stack / Skills"
            : "Tech stack / Ferdigheter"
        }
      />
      {state.info.skills.map((techs: techSection, index: number) => (
        <TechSection key={index} title={techs.title} techs={techs.techs} />
      ))}
    </div>
  )
}

export default Skills
