import React, { useState } from "react"
import Flag from "react-flagkit"
import { useInfo } from "./info-context"

const Langselector = () => {
  const [lang, setLang] = useState<"en" | "no">("no")
  const { dispatch } = useInfo()
  return (
    <div className="flex justify-end sm:justify-between items-center p-1 w-full max-w-6xl">
      <span className="hidden sm:block">
        {lang == "en"
          ? "Printing? See the bottom of the page"
          : "Printe? Se nederst på siden"}
      </span>
      <div className="flex fle-row">
        <span>{lang == "en" ? "Select language:" : "Velg språk:"}</span>
        <Flag
          country="NO"
          onClick={() => {
            setLang("no")

            dispatch({ type: "SETLANG", lang: "no" })
          }}
          className={
            (lang == "no" ? "bg-blue-400" : "") +
            ` ml-1 p-0.5 w-8 hover:bg-sky-800 hover:opacity-70`
          }
        />
        <Flag
          country="GB"
          onClick={() => {
            setLang("en")
            dispatch({ type: "SETLANG", lang: "en" })
          }}
          className={
            (lang == "en" ? "bg-blue-400" : "") +
            ` mr-1 p-0.5 w-8 hover:bg-sky-800 hover:opacity-70`
          }
        />
      </div>
    </div>
  )
}

export default Langselector
