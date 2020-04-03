import React from "react"
import testMp3 from "../audio/test.mp3"

const RadioShowPage = () => {
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
      <div className="flex flex-col items-center text-center w-full bg-gray-200 rounded-lg p-5 shadow-md">
        <span className="font-bold text-xl">Audio Title</span>
        <audio controls className="my-5">
          <source src={testMp3} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti ad
          eum officia, facere iusto iste!
        </p>
      </div>
    </div>
  )
}

export default RadioShowPage
