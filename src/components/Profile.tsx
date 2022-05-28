import React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import { useInfo } from "./info-context"
import Image from "next/image"

const Profile = ({ className }) => {
  const { state } = useInfo()
  return (
    <div className={`${className} text-center p-5`}>
      <StaticImage
        src="../images/meg.jpeg"
        alt="Profile"
        className="rounded-full"
        width={250}
        height={250}
        placeholder="blurred"
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
