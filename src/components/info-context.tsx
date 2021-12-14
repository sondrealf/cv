import React, { createContext, useReducer } from "react"
import { langInfo } from "../../lib/types"
import info from "../info"

type Action = { type: "SETLANG"; lang: "en" | "no" }
type Dispatch = (action: Action) => void
type State = langInfo

const InfoContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined)

const infoReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SETLANG": {
      if (action.lang == "en") {
        return info[action.lang]
      } else {
        return info.no
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`)
    }
  }
}

const InfoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(infoReducer, info.no)
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch }
  return <InfoContext.Provider value={value}>{children}</InfoContext.Provider>
}

export const useInfo = () => {
  const context = React.useContext(InfoContext)
  if (context === undefined) {
    throw new Error("useCount must be used within a InfoProvider")
  }
  return context
}

export default InfoProvider
