import React, { useState } from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Poetry = ({ data }) => {
  const images = data.allFile.edges.map(edge => edge.node)
  console.log(images)
  return (
    <Layout>
      <SEO title="Poetry" />
      <div className="w-full md:w-2/3 xl:w-3/4 h-screen md:h-auto md:overflow-y-auto flex flex-col">
        <Thumbs images={images} />
      </div>
    </Layout>
  )
}

const Thumbs = ({ images }) => {
  const [isPopupOpen, setPopupOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  return (
    <section className="flex flex-wrap justify-center relative">
      {images.map((image, index) => (
        <div
          className="w-full lg:w-1/2 xl:w-1/3 px-2 mb-3"
          onClick={() => {
            setPopupOpen(true)
            setCurrentImage(index)
          }}
        >
          <Img fluid={image.childImageSharp.fluid} className="w-full"></Img>
        </div>
      ))}
      {isPopupOpen && (
        <div className="sticky top-0 inset-0 bg-black-50 flex justify-center items-center w-full h-screen">
          <button
            className="absolute top-0 right-0 bg-white h-10 w-10 flex justify-center items-center rounded-full shadow m-5 z-30"
            onClick={() => setPopupOpen(false)}
          >
            <i class="fas fa-times"></i>
          </button>
          <div className="w-full h-full p-5 lg:p-10 xl:p-20 relative">
            {/* Previous Image */}
            <div className="ml-5 lg:ml-10 xl:ml-20 absolute top-0 bottom-0 left-0 z-20 flex items-center pl-5">
              <button
                className="carousel-button"
                onClick={() =>
                  setCurrentImage(
                    currentImage > 0
                      ? currentImage - (1 % images.length)
                      : images.length - 1
                  )
                }
              >
                <i class="fas fa-chevron-left"></i>
              </button>
            </div>
            <Img
              fluid={images[currentImage].childImageSharp.fluid}
              className="w-full h-full"
              imgStyle={{ objectFit: "contain" }}
            />
            {/* Next Image */}
            <div className="mr-5 lg:mr-10 xl:mr-20 absolute top-0 bottom-0 right-0 z-20 flex items-center pr-5">
              <button
                className="carousel-button"
                onClick={() =>
                  setCurrentImage((currentImage + 1) % images.length)
                }
              >
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

// const Carousel = () => {
//   return (
//     <section className="flex">
//       <div className="md:w-1/3 border-r-8 border-white flex flex-col max-h-screen overflow-y-auto">
//         {[1, 2, 3, 4, 5, 6, 7, 8].map(image => (
//           <img src="https://via.placeholder.com/500" alt="" className="mb-3" />
//         ))}
//       </div>
//       <div className="md:w-2/3">
//         <img src="https://via.placeholder.com/500" alt="" className="h-full w-full object-contain" />
//       </div>
//     </section>
//   )
// }

export const pageQuery = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "poetry" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Poetry
