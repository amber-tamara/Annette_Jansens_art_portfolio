import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap';
// import { useStaticQuery, graphql } from "gatsby"
import { useState } from 'react';
import image from "../Carousel/carousel.module.css"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Paintings = function ControlledCarousel() {
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
    console.log(data);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className={image.background}>
            <h3 className={image.title}>ART I'M CURRENTLY WORKING ON</h3>
            <div className={image.content}>
                <Carousel className={image.wrapper} activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <Img
                            className={image.image}
                            fluid={data.allFile.edges[0].node.childImageSharp.fluid}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Img
                            className={image.image}
                            fluid={data.allFile.edges[6].node.childImageSharp.fluid}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Img
                            className={image.image}
                            fluid={data.allFile.edges[2].node.childImageSharp.fluid}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}


export default Paintings