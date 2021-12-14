import React from "react"
import { IconType } from "react-icons"

const Subtitle = ({
  Icon,
  title,
  size,
}: {
  Icon: IconType
  title: string
  size?: string
}) => {
  let iconSize = ""
  switch (size) {
    case "xl":
      iconSize = "w-10 h-10 print:w-8 print:h-8"
      break

    case "2xl":
      iconSize = "w-12 h-12 print:w-10 print:h-10"
      break

    case "3xl":
      iconSize = "w-14 h-14 print:w-12 print:h-12"
      break

    default:
      iconSize = "w-8 h-8 print:w-6 print:h-6"
      break
  }
  const map = {
    lg: "sm",
    xl: "base",
    "2xl": "lg",
    "3xl": "xl",
  }
  return (
    <div className="flex items-center">
      <Icon
        className={` ${iconSize} p-1 mr-4 ml-1 my-1 bg-gray-300 text-gray-800 rounded-full`}
      />
      <h1
        className={`text-${size ? size : "lg"} print:text-${
          size ? map[size] : "base"
        } capitalize`}
      >
        {title}
      </h1>
    </div>
  )
}

export default Subtitle
