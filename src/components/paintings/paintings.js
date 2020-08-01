import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap';
// import { useStaticQuery, graphql } from "gatsby"
import { useState } from 'react';
import image from "../paintings/paintings.module.css"

import slide1 from '../../images/cat.jpg'
import slide2 from '../../images/cat.jpg'
import slide3 from '../../images/cat.jpg'

const Paintings = function ControlledCarousel() {
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
                        <img
                            className={image.image}
                            src={slide1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className={image.image}
                            src={slide2}
                            alt="Second slide" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className={image.image}
                            src={slide3}
                            alt="Third slide" />
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