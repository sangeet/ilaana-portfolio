import React from "react"
import Layout from "../components/layout"

const VideoPage = () => {
  return (
    <Layout>
      <div className="flex flex-wrap w-3/4 p-10 -mx-5 h-screen overflow-y-scroll">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(video => (
          <VideoItem />
        ))}
      </div>
    </Layout>
  )
}

const VideoItem = () => {
  return (
    <div className="w-1/3 p-5">
      <div className="flex flex-col px-5 bg-red-500 text-white p-5 shadow-md h-full">
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
