import React, {useState} from "react"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

import ghosties from "../public/images/ghosties.png"
import alien from "../public/images/alien.png"
import grapes from "../public/images/grapes.png"
import henry from "../public/images/henry.png"


const IMAGES = [
  {
    title: "Ghosties",
    src: ghosties
  },
  {
    title: "Alien",
    src: alien
  },
  {
    title: "Grapes",
    src: grapes
  },
  {
    title: "Henry",
    src: henry
  }
]


export default function Home() {
  return (
    <>
      <Head>
        <title>Scott McDonald Artwork</title>
      </Head>

      <div className="flex flex-col mt-12 items-center w-full h-screen">
        
        <Banner />

        <Gallery imageData={IMAGES} />

      </div>
    </>
  )
}

function Banner() {
  return (
    <div className="flex flex-col items-center border-b border-vert59/50 px-20 py-6 mb-4">
      <h1 className="font-bebasNeue text-6xl text-ombreNaturelle31">
      SM<span className="text-orangeVif">ART</span>
      </h1>
      <p className="font-montserrat text-ombreNaturelle31/70">scott mcdonald art</p>
    </div>
  )
}

function GalleryImage(props) {
  return (
    <div className="flex flex-col w-full m-4">
      <div className="relative w-full h-48 border-orangeVif/50 border-x px-4 ">
        <Image 
          src={props.src} 
          layout="fill" 
          objectFit="contain"
          // width="100%"
          // height="100%"
        />
      </div>
      <div className="flex flex-col w-full items-center">
        <h2 className="font-montserrat text-ombreNaturelle31">{props.title}</h2>
      </div>
    </div>
  )

}

function Gallery(props) {

  const [galleryFilter, setGalleryFilter] = useState("all");
  
  const images = props.imageData.map(image => {
    return (
      <GalleryImage 
      src={image.src} 
      title={image.title}
      />
    )
  })

  return (

    <div className="w-full grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 border-t border-vert59/50 px-3 py-6 mt-4">
    {images}
    </div>

  )  

}
