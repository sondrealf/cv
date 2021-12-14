import React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import { useInfo } from "./info-context"

const Profile = ({ className }) => {
  const { state } = useInfo()
  return (
    <div className={`${className} text-center p-5`}>
      <StaticImage
        src="../images/meg.jpeg"
        alt="picture of me"
        className="rounded-full h-64 w-64 print:h-44 print:w-44"
      />
      <h1 className=" text-2xl print:text-xl">{state.profile.name}</h1>
      <p className=" text-lg print:text-base font-light">
        {state.profile.role}
      </p>
    </div>
  )
}

Profile.propTypes = {
  className: PropTypes.string,
}

export default Profile
