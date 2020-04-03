import React from "react"
import testMp3 from "../audio/test.mp3"

const VideoPage = () => {
  return (
    <section className="container py-20">
      <div className="flex flex-wrap">
        <AudioItem />
        <AudioItem />
        <AudioItem />
      </div>
    </section>
  )
}

const AudioItem = () => {
  return (
    <div className="w-1/3 px-5">
      <iframe
        className="w-full"
        src="https://www.youtube.com/embed/zUttT67rkyM"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  )
}

export default VideoPage
