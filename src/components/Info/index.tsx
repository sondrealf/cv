import React from "react"
import PropTypes from "prop-types"
import About from "./About"
import Contact from "./Contact"
import Skills from "./Skills"

const Info = ({ className }) => {
  return (
    <div className={className}>
      <About />
      <Contact />
      <Skills />
    </div>
  )
}

Info.propTypes = {
  className: PropTypes.string,
}

export default Info
