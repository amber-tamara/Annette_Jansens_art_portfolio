import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap';
import { useState } from 'react';
import image from "../Carousel/carousel.module.css"
import Img from "gatsby-image/withIEPolyfill"
import { useStaticQuery, graphql } from "gatsby"

const Paintings = function ControlledCarousel() {
    const data = useStaticQuery(graphql`
   {
    allFile(filter: {relativeDirectory: {eq: "carousel"}}) {
        edges {
          node {
            id
            childImageSharp {
              original {
                width
                height
                src
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
                    <Carousel.Item className={image.item}>
                        <Img
                            className={image.image}
                            fluid={data.allFile.edges[0].node.childImageSharp.original}
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
                            fluid={data.allFile.edges[1].node.childImageSharp.original}
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
                            fluid={data.allFile.edges[2].node.childImageSharp.original}
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