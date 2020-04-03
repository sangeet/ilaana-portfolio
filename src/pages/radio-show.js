import React from "react"
import testMp3 from "../audio/test.mp3"
import Layout from "../components/layout"

const RadioShowPage = () => {
  return (
    <Layout>
      <div className="flex flex-wrap w-3/4 p-10 -mx-5 h-screen overflow-y-scroll">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(audio => (
          <AudioItem />
        ))}
      </div>
    </Layout>
  )
}

const AudioItem = () => {
  return (
    <div className="w-1/3 p-5">
      <div className="flex flex-col items-center text-center w-full bg-red-500 text-white p-5 shadow-md h-full justify-center">
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
