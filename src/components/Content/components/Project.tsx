import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { project } from "../../../../lib/types"

const Project = ({
  image,
  title,
  githubLink,
  website = undefined,
  text,
}: project) => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "svg" } }) {
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
  let imagesrc = files.filter(file => file.name == image.src)[0]["publicURL"]
  console.log(imagesrc)

  return (
    <div className="flex bg-gray-100 rounded-lg p-2">
      <img src={imagesrc} alt={image.alt} className=" w-1/3 print:hidden" />
      <div className="w-2/3 ml-2 print:w-full">
        <h1 className="text-lg print:text-base">{title}</h1>
        <div className="flex flex-row">
          <a
            href={githubLink}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-3 rounded-full print:hidden mr-2"
          >
            github
          </a>
          {website ? (
            <>
              <a
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-3 rounded-full print:hidden"
                href={website.link}
              >
                Website
              </a>
              <a href={website.link} className="hidden print:block text-sm">
                {website.link}
              </a>
            </>
          ) : (
            <a href={githubLink} className="hidden print:block text-sm">
              {githubLink}
            </a>
          )}
        </div>
        <p className="text-sm print:text-xs">{text}</p>
      </div>
    </div>
  )
}

export default Project
