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
        <Sidebar
          data={data.photo}
          isHome={isHome}
          resumeLink={data.resume.publicURL}
        />
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
      title: "Poetry",
      href: "/poetry",
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
      text: (
        <>
          <span>ilaana.chakma</span>
          <span>@gmail.com</span>
        </>
      ),
    },
    {
      title: "phone",
      text: "9538243621",
    },
  ]
  return (
    <section className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col flex-shrink-0">
      <div className="md:h-half bg-pink-100 text-gray-700 relative w-full">
        <a href="/">
          <div
            className={` flex ${
              isHome ? "lg:hidden" : "lg:flex"
            } absolute left-0 right-0 bottom-0 -mb-16 lg:-mb-20 sidebar-image-container`}
          >
            <Img
              fluid={data.childImageSharp.fluid}
              className="rounded-full border-4 border-gray-400 sidebar-image"
            />
          </div>
          {/* <img */}
          {/*   src="https://via.placeholder.com/200" */}
          {/*   alt="" */}
          {/*   className="absolute left-0 bottom-0 rounded-full h-40 w-40 border-4 border-gray-400 -mb-20 ml-20" */}
          {/* /> */}
        </a>
        <ul className="font-bold flex flex-col py-10 pb-32 md:py-10 px-10 xl:px-20 h-full justify-center items-center md:items-start">
          {links.map(link => (
            <li className="my-2 xl:my-1 link-item xl:text-xl">
              <Link
                to={link.href}
                activeClassName="border-b-2 border-gray-700 pb-1"
                className="border-b-2 border-transparent hover:border-gray-400"
              >
                {link.title}
              </Link>
            </li>
          ))}
          <li className="my-2 xl:my-1 link-item xl:text-xl">
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
      <div className="md:h-half bg-gray-200 text-gray-700">
        <ul className="font-bold flex flex-col px-10 xl:px-20 pt-24 md:pt-20 pb-10 justify-center h-full items-center text-center md:items-start md:text-left">
          {info.map(infoItem => (
            <li className="flex flex-col mb-3 md:w-full">
              <span className="uppercase text-red-500 text-xs">
                {infoItem.title}
              </span>
              <span className="flex flex-wrap">{infoItem.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Layout
