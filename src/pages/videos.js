import React, { useState } from "react"
import Layout from "../components/layout"

const VideoPage = () => {
  const videos = [
    {
      link: "https://www.youtube.com/embed/zUttT67rkyM",
      category: "music",
    },
    {
      link: "https://www.youtube.com/embed/zUttT67rkyM",
      category: "project",
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
      <div className="w-3/4">
        <div className="bg-gray-800 text-white w-full py-5 px-10">
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
        <div className="flex flex-wrap p-10 -mx-5 max-h-screen overflow-y-scroll">
          {filteredVideos.map(video => (
            <VideoItem />
          ))}
        </div>
      </div>
    </Layout>
  )
}

const VideoItem = () => {
  return (
    <div className="w-1/3 px-5 pb-5">
      <div className="flex flex-col px-5 bg-red-500 text-white p-5 shadow-md">
        <span className="font-bold text-xl">Video Title</span>
        <iframe
          className="w-full h-64 py-5"
          src="https://www.youtube.com/embed/zUttT67rkyM"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti ad
          eum officia, facere iusto iste!
        </p>
      </div>
    </div>
  )
}

export default VideoPage
