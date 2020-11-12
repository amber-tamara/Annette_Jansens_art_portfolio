import '../Introduction/introduction.css'
import finishedZebra from "../../images/finishedZebra.gif"
// import drawing from "../../images/intro/drawing.png"
import zebra from "../../images/intro/screnZeb.png"
import React, { useState } from 'react';
// import backgroundPattern from "../../images/intro/drawing_cloudy.png"

const Introduction = () => {
    const [open, isOpen] = useState(true)
    setTimeout(() => {
        isOpen(false)
    }, 10100);

    const [animate, setAnimate] = useState(false);


    const clickHandler = function (e) {
        setAnimate(true)
    };

    return (
        <div className="introBackground">
            <div className="backgroundColor">
            </div>
            <div className="wrapper">
                <div className="textBox">
                    <h2 className="paragraph">I paint a variety of vibrant Art work</h2>
                    <p>Artist from Sheffield, UK</p>
                    <a onClick={clickHandler} className={` button glow-on-hover butto ${animate ? "testt" : ""}`} href="#gallery">GALLERY</a>
                </div>
                <div className="pictureWrapper">
                    <div className="backgroundFrame"> </div>
                    <img src={zebra} className="zebraPainting" alt="zebra painting" />
                    <img src={finishedZebra} className={` ${open ? "zebraPaintingGif" : "dissapear"}`} alt="gif" />
                </div>
            </div>
        </div>
    )
}

export default Introduction