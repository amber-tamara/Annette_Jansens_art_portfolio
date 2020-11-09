import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import "../Gallery/gallery.css"
import Img from "gatsby-image"
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react"
import galleryTitleUnderline from "../../images/intro/whiteString.png"

const Gallery = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const data = useStaticQuery(graphql`
   {
    allFile(filter: {sourceInstanceName: {eq: "paintings"}}, sort: {order: ASC, fields: name}) {
      edges {
        node {
          id
          childImageSharp {
            fluid(traceSVG: {blackOnWhite: false}) {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
            }
          }
        }
      }
    }
  }
  `)
  return (
    <div className="background" id="gallery">
      <div className="titleBox">
        <h1 className="galleryTitle">GALLERY</h1>
        <img src={galleryTitleUnderline} className="underlineStroke" alt="underline"></img>
      </div>
      <div className="imageGallery">
        {data.allFile.edges.map((image, i) => (
          < Img
            className={"image image-" + i}
            key={image.node.id}
            fluid={image.node.childImageSharp.fluid}
            alt={image.node.name}
          />

        ))}
      </div>
    </div>
  )
}

export default Gallery