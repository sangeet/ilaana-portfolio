import React from "react"
import testMp3 from "../audio/test.mp3"
import SEO from "../components/seo"
import Layout from "../components/layout"

const RadioShowPage = ({ data }) => {
  console.log(data)
  const audioItems = [
    {
      title: "Radio Show",
      href: data.radio1.publicURL,
      description: `Radio show scriped, edited and voiceovered by me as part of a project at Mount Carmel College under the paper titled 'Writing for Radio'`,
    },
    {
      title: "Folk Ad - Ramayan",
      href: data.ramayan.publicURL,
      description: `This folk ad was performed and recorded at the Indian Institute of Mass Communication, Delhi as part of Swachata Pakhwada. The recording was aired live on Apna Radio, 96.9 FM. The folk ad raises awareness about cleanliness and hygiene in the outside world and more importantly on the inside.`,
    },
  ]
  return (
    <Layout>
      <SEO title="Audio Work" />
      <div className="flex flex-wrap w-full md:w-2/3 xl:w-3/4 p-10 md:-mx-5 h-screen md:overflow-y-auto">
        {audioItems.map(audio => (
          <AudioItem data={audio} />
        ))}
      </div>
    </Layout>
  )
}

const AudioItem = ({ data }) => {
  return (
    <div className="w-full lg:w-1/2 xl:w-1/3 p-5">
      <div className="flex flex-col items-center text-center w-full bg-white text-gray-700 p-5 shadow-md hover:shadow-lg  justify-center border">
        <span className="font-bold text-xl">{data.title}</span>
        <audio controls className="my-5 w-full">
          <source src={data.href} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p>{data.description}</p>
      </div>
    </div>
  )
}

export const PageQuery = graphql`
  {
    ramayan: file(name: { eq: "Folk Ad - Ramayan" }) {
      name
      publicURL
    }
    radio1: file(name: { eq: "radio part 1_mixdown (1)" }) {
      name
      publicURL
    }
  }
`

export default RadioShowPage
