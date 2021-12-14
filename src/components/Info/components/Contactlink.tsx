import React from "react"
import { IconType } from "react-icons/lib"
type Linkprops = {
  Icon: IconType
  link: string
  text: string
}

const Contactlink = ({ Icon, link, text }: Linkprops) => {
  return (
    <a href={link} className="flex items-center">
      <Icon className="w-8 h-8 print:w-6 print:h-6 p-1 mx-1 print:mx-4 my-1 bg-gray-300 text-gray-800 rounded-full" />
      <p className="hidden print:block text-sm">{text}</p>
    </a>
  )
}

export default Contactlink
