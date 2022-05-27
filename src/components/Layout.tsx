import React, { useRef } from "react"
import PropTypes from "prop-types"
import Langselector from "./Langselector"
import Footer from "./Footer"

const Layout = ({ children, className }) => {
  let cvRef = useRef<HTMLElement>(null)

  return (
    <div className=" min-h-full w-full bg-white flex flex-col items-center">
      <Langselector />
      <div className=" min-h-full max-w-6xl bg-gray-50 shadow-xl">
        <main className={className} ref={el => (cvRef.current = el)}>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Layout
