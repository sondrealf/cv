import React, { useRef } from "react"
import PropTypes from "prop-types"
import ReactToPrint from "react-to-print"
import Langselector from "./Langselector"
import { useInfo } from "./info-context"
import { graphql, useStaticQuery } from "gatsby"

const Layout = ({ children, className }) => {
  let cvRef = useRef<HTMLElement>(null)
  const { state } = useInfo()
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)
  const files = data.allFile.edges.map(node => node.node)
  let file = files.filter(file => file.name == `CV-JohanAO-${state.lang}`)[0]
  console.log(file)

  return (
    <div className=" min-h-full w-full bg-white flex flex-col items-center">
      <Langselector />
      <div className=" min-h-full max-w-6xl bg-gray-50 shadow-xl">
        <main className={className} ref={el => (cvRef.current = el)}>
          {children}
        </main>
      </div>
      <footer className="flex flex-col sm:flex-row-reverse sm:justify-between items-center p-4 w-full max-w-6xl">
        <div>
          <ReactToPrint
            trigger={() => (
              <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-3 rounded-full print:hidden mr-2">
                Print CV
              </button>
            )}
            content={() => cvRef.current}
          />
          <a
            href={`${file.publicURL}`}
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-3 rounded-full print:hidden"
          >
            Download CV
          </a>
        </div>
        <p>{new Date().getFullYear()}, Built by Juan:)</p>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Layout
