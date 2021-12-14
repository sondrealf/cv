import * as React from "react"
import { BsFillPersonFill } from "@react-icons/all-files/bs/BsFillPersonFill"
import { useInfo } from "../info-context"
import Subtitle from "../Subtitle"
const About = () => {
  const { state } = useInfo()
  return (
    <div className="mb-3">
      <Subtitle Icon={BsFillPersonFill} title={state.info.about.title} />
      <p className=" pl-14 pr-4 text-sm">{state.info.about.text}</p>
    </div>
  )
}

export default About
