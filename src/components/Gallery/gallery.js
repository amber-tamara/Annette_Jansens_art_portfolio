import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import "../Gallery/gallery.css"
import Img from "gatsby-image"

const Gallery = () => {
  const data = useStaticQuery(graphql`
   {
    allFile(filter: {sourceInstanceName: {eq: "paintings"}}) {
        edges {
          node {
            id
            childImageSharp {
              id
              fluid(traceSVG: {blackOnWhite: false}, sizes: "") {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
                sizes
                src
                srcSet
                presentationWidth
                presentationWidth
              }
            }
          }
        }
      }
    }
  `)

  // console.log(data)
  return (
    <div className="background">
      <h1 className="title">GALLERY</h1>
      <div className="imageGallery">
        {data.allFile.edges.map((image, i) => (

          <Img
            className={"image image-" + i}
            key={image.node.id}
            fluid={image.node.childImageSharp.fluid}
            alt={image.node.name} />
        ))}
      </div>
    </div>
  )
}

export default Gallery