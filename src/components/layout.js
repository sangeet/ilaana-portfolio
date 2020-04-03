/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "@fortawesome/fontawesome-free/css/all.css"
import "./tailwind.css"

const Layout = ({ children, isHome = false }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      photo: file(relativePath: { eq: "full2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      resume: file(name: { eq: "Ilaana - CV 2020 PDF" }) {
        name
        publicURL
      }
    }
  `)

  return (
    <>
      <section className="flex flex-wrap md:flex-no-wrap h-screen">
        <Sidebar data={data.photo} isHome={isHome} resumeLink={data.resume.publicURL}/>
        {children}
      </section>
    </>
  )
}

const Sidebar = ({ data, isHome, resumeLink }) => {
  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Writing Samples",
      href: "/writing",
    },
    {
      title: "Videos",
      href: "/videos",
    },
    {
      title: "Audio Work",
      href: "/audio-work",
    },
  ]

  const info = [
    {
      title: "name",
      text: "Ilaana Chakma",
    },
    {
      title: "designation",
      text: "Communication Studies Graduate",
    },
    {
      title: "email",
      text: "ilaana.chakma@gmail.com",
    },
    {
      title: "phone",
      text: "9538243621",
    },
  ]
  return (
    <section className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col">
      <div className="py-20 md:h-half bg-pink-100 text-gray-700 relative w-full">
        <a href="/">
          {!isHome && (
            <div className="absolute left-0 right-0 bottom-0 -mb-16 lg:-mb-20 flex justify-center">
              <Img
                fluid={data.childImageSharp.fluid}
                className="rounded-full w-32 h-32 lg:h-40 lg:w-40 border-4 border-gray-400 "
              />
            </div>
          )}
          {/* <img */}
          {/*   src="https://via.placeholder.com/200" */}
          {/*   alt="" */}
          {/*   className="absolute left-0 bottom-0 rounded-full h-40 w-40 border-4 border-gray-400 -mb-20 ml-20" */}
          {/* /> */}
        </a>
        <ul className="font-bold flex flex-col px-20 justify-center h-full items-center md:items-start">
          {links.map(link => (
            <li className="text-2xl my-2 xl:my-1">
              <Link
                to={link.href}
                activeClassName="border-b-2 border-gray-700 pb-1"
                className="border-b-2 border-transparent hover:border-gray-400"
              >
                {link.title}
              </Link>
            </li>
          ))}
            <li className="text-2xl my-2 xl:my-1">
              <a
                href={resumeLink}
                activeClassName="border-b-2 border-gray-700 pb-1"
                className="border-b-2 border-transparent hover:border-gray-400"
                target="_blank"
              >
                Resume
              </a>
            </li>
        </ul>
      </div>
      <div className="py-20 md:h-half bg-gray-200 text-gray-700">
        <ul className="font-bold flex flex-col px-20 justify-center h-full items-center text-center md:items-start md:text-left">
          {info.map(infoItem => (
            <li className="flex flex-col mb-5">
              <span className="uppercase text-red-500 text-sm">
                {infoItem.title}
              </span>
              <span>{infoItem.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Layout
