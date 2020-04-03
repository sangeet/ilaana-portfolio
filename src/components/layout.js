/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "@fortawesome/fontawesome-free/css/all.css"
import "./tailwind.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <section className="flex flex-wrap h-screen">
        <Sidebar />
        {children}
      </section>
    </>
  )
}

const Sidebar = () => {
  const links = [
    {
      title: "Music",
      href: "/radio-show",
    },
    {
      title: "Videos",
      href: "/videos",
    },
    {
      title: "Reports",
      href: "/writing",
    },
    {
      title: "Radio Show",
      href: "/radio-show",
    },
  ]

  const info = [
    {
      title: "name",
      text: "Amy Stone",
    },
    {
      title: "role",
      text: "Designer",
    },
    {
      title: "email",
      text: "test@example.com",
    },
    {
      title: "phone",
      text: "9999999999",
    },
  ]
  return (
    <section className="w-1/4 flex flex-col">
      <div className="h-half bg-red-500 text-white">
        <ul className="font-bold flex flex-col px-20 justify-center h-full">
          {links.map(link => (
            <li className="text-4xl">
              <a href={link.href}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-half bg-teal-900 text-white">
        <ul className="font-bold flex flex-col px-20 justify-center h-full">
          {info.map(infoItem => (
            <li className="flex flex-col mb-5">
              <span className="uppercase text-red-500 text-sm">
                {infoItem.title}
              </span>
              <span className="text-lg">{infoItem.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
