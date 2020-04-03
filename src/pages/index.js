import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <IntroBar />
      <Photo />
    </Layout>
  )
}


const IntroBar = () => {
  const social = [
    {
      title: "Linkedin",
      href: "/",
    },
    {
      title: "Twitter",
      href: "/",
    },
    {
      title: "Instagram",
      href: "/",
    },
  ]
  return (
    <section className="w-1/4 flex flex-col justify-center px-12">
      <span className="text-2xl pb-10">Hello. My name is</span>
      <h1 className="text-6xl font-bold leading-none text-red-500">
        Ilaana Chakma
      </h1>
      <p className="text-lg text-red-500 pt-10">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt sit,
        delectus dolor dolore labore et saepe minus? Eligendi obcaecati eveniet
      </p>
      <div className="flex w-full text-gray-700 pt-20">
        {social.map(socialLink => (
          <a href={socialLink.href} className="uppercase pr-10">
            {socialLink.title}
          </a>
        ))}
      </div>
    </section>
  )
}

const Photo = () => {
  return (
    <div className="w-2/4 h-screen bg-blue-500">
      <img
        src="https://via.placeholder.com/1920x1080"
        alt=""
        className="h-full w-full object-cover"
      />
    </div>
  )
}

export default IndexPage
