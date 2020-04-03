import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <div className="flex flex-col items-center font-sans text-gray-700">
            <h1 className="text-2xl mt-10 font-bold">
                Gatsby Tailwind PurgeCSS Starter
            </h1>
            <ul className="bg-blue-100 p-6 rounded my-5">
                <li className="mb-3">
                    <i className="far fa-check-circle mr-2 text-blue-400"></i>
                    <a
                        href="https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-postcss"
                        className="text-blue-500"
                    >
                        PostCSS
                    </a>
                    <ul className="mt-2 ml-6 text-blue-500 text-sm">
                        <a href="https://github.com/postcss/autoprefixer"><li><i className="fas fa-caret-right mr-2"></i>Autoprefixer</li></a>
                        <a href="https://github.com/anantoghosh/gatsby-plugin-purgecss"><li><i className="fas fa-caret-right mr-2"></i>PurgeCSS</li></a>
                    </ul>
                </li>
                <li className="mb-3">
                    <i className="far fa-check-circle mr-2 text-blue-400"></i>
                    <a
                        href="https://fontawesome.com/"
                        className="text-blue-500"
                    >
                        FontAwesome <i className="fab fa-font-awesome"></i>
                    </a>
                </li>
                <li className="mb-3">
                    <i className="far fa-check-circle mr-2 text-blue-400"></i>
                    <a
                        href="https://tailwindcss.com/"
                        className="text-blue-500"
                    >
                        TailwindCSS
                    </a>
                </li>
            </ul>
            <span className="text-blue-600 font-bold p-2 border border-gray-400 rounded hover:bg-blue-600 hover:text-white">
                <i className="fab fa-github mr-2"></i>
                <a href="https://github.com/sangeet/gatsby-tailwind-purgecss-starter">
                    View on Github
                </a>
            </span>
        </div>
    </Layout>
)

export default IndexPage
