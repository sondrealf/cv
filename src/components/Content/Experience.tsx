import * as React from "react"
import { useInfo } from "../info-context"
import Title from "../Title"
import Section from "./components/Section"

const Experience = () => {
  const { state } = useInfo()

  return (
    <>
      {/* <Title Icon={MdAssignmentTurnedIn} title="Experience" size="2xl" /> */}
      {state.content.experience.map((experience, index: number) => (
        <div key={index}>
          <Title Icon={experience.Icon} title={experience.title} size="2xl" />
          {experience.locations.map((location, index: number) => (
            <Section
              key={index}
              title={location.title}
              location={location.location}
              positions={location.positions}
            />
          ))}
        </div>
      ))}
    </>
  )
}

export default Experience
