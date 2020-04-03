import React from "react"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout isHome={true}>
      <SEO title="Home" />
      <IntroBar />
      <Photo data={data.photo} />
    </Layout>
  )
}

const IntroBar = () => {
  const social = [
    {
      title: "Twitter",
      href: "https://twitter.com/IlaanaChakma",
    },
    {
      title: "LinkedIN",
      href: "https://www.linkedin.com/in/ilaana-chakma",
    },
    {
      title: "Quora",
      href: "https://www.quora.com/profile/Ilaana-Chakma",
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/ilaana.chakma/",
    },
  ]
  return (
    <section className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col justify-center px-12 py-20">
      <h1 className="text-4xl md:text-5xl font-bold leading-none text-red-500">
        Ilaana Chakma
      </h1>
      <p className="text-lg text-red-500 pt-10">
        A student at Indian Institute of Mass Communication pursuing Advertising
        and Public Relations. Interested in sub-altern perspectives in culture
        studies, psychology and research. Experienced professional in Internal
        Communications.
      </p>
      <div className="flex flex-wrap w-full text-gray-700 pt-20">
        {social.map(socialLink => (
          <a
            href={socialLink.href}
            className="uppercase pr-10 mb-3"
            target="_blank"
          >
            {socialLink.title}
          </a>
        ))}
      </div>
    </section>
  )
}

const Photo = ({ data }) => {
  return (
    <div className="hidden lg:block lg:w-1/3 xl:w-2/4 h-screen">
      <Img fluid={data.childImageSharp.fluid} className="h-full w-full" />
    </div>
  )
}

export const PageQuery = graphql`
  {
    photo: file(relativePath: { eq: "full2.jpg" }) {
      childImageSharp {
        fluid(quality:90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
