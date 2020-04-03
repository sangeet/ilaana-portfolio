import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const VideoPage = () => {
  const videos = [
    {
      title: "Tareefan",
      link: "https://www.youtube.com/embed/YmC5itbSJWA",
      category: "music",
    },
    {
      title: "Havana",
      link: "https://www.youtube.com/embed/hbo7sz29RGg",
      category: "music",
    },
    {
      title: "Shaam",
      link: "https://www.youtube.com/embed/dgpPbtaydPI",
      category: "music",
    },
    {
      title: "We Don't Talk Anymore",
      link: "https://www.youtube.com/embed/c6Wdyjtx91E",
      category: "music",
    },
    {
      title: "Attention",
      link: "https://www.youtube.com/embed/MEw1e8wkqkY",
      category: "music",
    },
    {
      title: "Documentary on Adoption Dogs",
      link: "https://www.youtube.com/embed/0jpsxCSZZ9Q",
      category: "project",
    },
    {
      title: "Short Film",
      link: "https://www.youtube.com/embed/h9hGyZombuQ",
      category: "project",
    },
    {
      title: "Greening with Goethe",
      link: "https://www.youtube.com/embed/MbjfH8lMIGE",
      category: "project",
      description: "Start at 6:27",
    },
  ]
  const categories = [
    { name: "all", index: 0 },
    { name: "music", index: 1 },
    { name: "project", index: 2 },
  ]
  const [activeCategory, setActiveCategory] = useState(0)
  const filteredVideos = videos.filter(
    video =>
      video.category === categories[activeCategory].name || activeCategory === 0
  )
  return (
    <Layout>
      <SEO title="Videos" />
      <div className="w-full md:w-2/3 xl:w-3/4 h-screen md:h-auto md:overflow-y-auto flex flex-col">
        <div className="bg-white text-white w-full py-5 px-10 border-b">
          {categories.map((category, index) => (
            <button
              className={`font-bold px-5 py-2 shadow rounded mr-5 capitalize ${
                activeCategory === index ? "bg-red-500" : "bg-gray-600"
              }`}
              key={index}
              onClick={() => setActiveCategory(index)}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap p-10 md:-mx-5 md:max-h-screen md:overflow-y-auto">
          {filteredVideos.map(video => (
            <VideoItem data={video} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

const VideoItem = ({ data }) => {
  return (
    <div className="w-full lg:w-1/2 xl:w-1/3 px-5 pb-5">
      <div className="flex flex-col px-5 bg-white text-gray-700 p-5 shadow-md hover:shadow-lg border">
        <span className="font-bold text-xl">{data.title}</span>
        <iframe
          className="w-full h-64 py-5"
          src={data.link}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        {data.description && <p>{data.description}</p>}
      </div>
    </div>
  )
}

export default VideoPage
