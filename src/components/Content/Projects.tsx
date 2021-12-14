import React from "react"
import { GiLightProjector } from "react-icons/gi"
import { project } from "../../../lib/types"
import { useInfo } from "../info-context"
import Title from "../Title"
import Project from "./components/Project"

const Projects = () => {
  const { state } = useInfo()
  return (
    <div className="">
      <Title
        Icon={GiLightProjector}
        title={state.lang == "en" ? "My projects" : "Mine prosjekter"}
      />
      <div className="w-full grid sm:grid-cols-2 sm:grid-rows-2 gap-2 mt-4 print:mt-2">
        {state.content.projects.map((project: project, index: number) => (
          <Project
            key={index}
            image={project.image}
            title={project.title}
            githubLink={project.githubLink}
            text={project.text}
            website={project.website}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
