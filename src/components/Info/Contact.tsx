import * as React from "react"
import { BsAt, BsPhone } from "react-icons/bs"
import { MdLocationOn } from "react-icons/md"
import { link } from "../../../lib/types"
import Contactlink from "./components/Contactlink"
import { useInfo } from "../info-context"
import Subtitle from "../Subtitle"
const Contact = () => {
  const { state } = useInfo()
  return (
    <div className="mb-3">
      <Subtitle Icon={BsAt} title={state.info.contact.title} />
      <div className="flex flex-col print:flex-col-reverse mt-2 ml-8 print:ml-0">
        <div className="flex mx-3 mb-1 print:m-0 p-1 print:p-0 print:flex-col">
          {state.info.contact.links.map((link: link, index: number) => (
            <Contactlink
              key={index}
              Icon={link.Icon}
              link={link.link}
              text={link.text}
            />
          ))}
        </div>
        <div className="flex items-center">
          <MdLocationOn className="w-6 h-6 p-1 mx-4 bg-gray-300 text-gray-800 rounded-full" />
          <div className="text-sm">
            {state.info.contact.adress.map((p: string, index: number) => (
              <p key={index}>{p}</p>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <BsPhone className="w-6 h-6 p-1 mx-4 my-1 bg-gray-300 text-gray-800 rounded-full" />
          <p className="text-sm">{state.info.contact.phone}</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
