import React from "react"
import { IconType } from "react-icons"
import { techSection } from "../../../../lib/types"

const TechSection = ({ title, techs = [] }: techSection) => {
  return (
    <div className="px-4 py-1 ml-10 print:py-0">
      <h2 className="text-base print:text-sm mt-2 mb-1 font-medium">{title}</h2>
      <div className="flex max-w-[17rem] flex-wrap">
        {techs.map((Tech: IconType, index: number) => (
          <div
            key={index}
            className="w-8 h-8 print:w-6 print:h-6 p-1 mr-0.5 mb-0.5 bg-gray-300 text-gray-800 rounded-full"
          >
            <Tech className="w-6 h-6 print:w-4 print:h-4" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechSection
