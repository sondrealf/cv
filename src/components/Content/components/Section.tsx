import React from "react"
import Span from "./Span"
import { MdLocationCity } from "react-icons/md"
import { BsCalendar4Week } from "react-icons/bs"
import { location } from "../../../../lib/types"

const Section = ({ title, location, positions = [] }: location) => {
  return (
    <div className="px-4 py-1 ml-12 print:py-0">
      <h2 className="text-xl print:text-lg my-2 font-medium">{title}</h2>
      <div className="">
        <Span icon={<MdLocationCity />} text={location} />
        {positions.map(
          (
            position: {
              timerange?: string
              description: string
              text?: string
            },
            index
          ) => (
            <div key={index}>
              {position.timerange ? (
                <Span icon={<BsCalendar4Week />} text={position.timerange} />
              ) : (
                ""
              )}
              <p className="print:text-sm mt-2 print:mt-1 text-gray-800 font-medium italic">
                {position.description}
              </p>
              {position.text ? (
                <p className="print:text-xs my-1 max-w-xl">{position.text}</p>
              ) : (
                ""
              )}
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default Section
