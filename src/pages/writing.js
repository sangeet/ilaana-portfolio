import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Writing = ({ data }) => {
  const directories = ["Articles", "Poetry", "Projects"]
  const files = data.allFile.edges
    .map(edge => edge.node)
    .filter(file => directories.indexOf(file.relativeDirectory) > -1)
  console.log(files)
  return (
    <Layout>
      <div className="lg:w-2/3 xl:w-3/4 flex flex-wrap h-screen md:overflow-y-auto lg:overflow-y-visible">
        {directories.map(directory => (
          <SubSection
            title={directory}
            files={files.filter(file => file.relativeDirectory === directory)}
          />
        ))}
      </div>
    </Layout>
  )
}

const SubSection = ({ title, files }) => {
  return (
    <div className="w-full xl:w-1/3 border flex flex-col items-center p-10 border-white max-h-screen lg:overflow-y-auto">
      <h2 className="text-3xl font-bold uppercase mb-10">{title}</h2>
      {files.map(file => (
        <DocumentLink data={file} />
      ))}
    </div>
  )
}

const DocumentLink = ({ data }) => {
  console.log(data)
  return (
    <>
      <a
        href={data.publicURL}
        className="block w-full bg-white border-l-8 border border-indigo-200 rounded shadow-md hover:shadow-lg px-3 py-3 w-full my-5 min-h-32 flex items-center justify-center text-center"
        target="_blank"
      >
        {data.name}
      </a>
    </>
  )
}

export const PageQuery = graphql`
  {
    allFile {
      edges {
        node {
          name
          publicURL
          relativeDirectory
          extension
        }
      }
    }
  }
`

export default Writing
