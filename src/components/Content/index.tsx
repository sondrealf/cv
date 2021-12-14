import React from "react"
import PropTypes from "prop-types"
import Education from "./Education"
import Experience from "./Experience"
import Projects from "./Projects"

const Content = ({ className }) => {
  return (
    <div className={className}>
      <Education />
      <Experience />
      <Projects />
    </div>
  )
}

Content.propTypes = {
  className: PropTypes.string,
}

export default Content
