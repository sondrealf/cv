import React from "react"
import { IconType } from "react-icons/lib"

const Title = ({
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
    case "2xl":
      iconSize = "w-10 h-10 print:w-8 print:h-8"
      break

    case "3xl":
      iconSize = "w-12 h-12 print:w-10 print:h-10"
      break

    case "4xl":
      iconSize = "w-14 h-14 print:w-12 print:h-12"
      break

    default:
      iconSize = "w-8 h-8 print:w-6 print:h-6"
      break
  }
  return (
    <div className="flex items-center">
      <Icon
        className={` ${iconSize} text-gray-100 print:text-gray-800 print:bg-gray-300 bg-gray-800 rounded-full p-1 mx-3`}
      />
      <h1
        className={`text-${size ? size : "xl"} print:text-${
          size ? (size == "xl" ? "lg" : size.substring(1)) : "lg"
        } uppercase font-medium`}
      >
        {title}
      </h1>
    </div>
  )
}

export default Title
