import * as React from "react"
import { MdOutlineSchool } from "react-icons/md"
import { location } from "../../../lib/types"
import { useInfo } from "../info-context"
import Title from "../Title"
import Section from "./components/Section"

const Education = () => {
  const { state } = useInfo()
  return (
    <div>
      <Title
        Icon={MdOutlineSchool}
        title={state.lang == "en" ? "Education" : "Utdanning"}
        size="2xl"
      />
      {state.content.education.map((edu: location, index: number) => (
        <Section
          key={index}
          title={edu.title}
          location={edu.location}
          positions={edu.positions}
        />
      ))}
    </div>
  )
}

export default Education
