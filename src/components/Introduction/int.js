import '../Introduction/introduction.css'
import finishedZebra from "../../images/finishedZebra.gif"
// import drawing from "../../images/intro/drawing.png"
import zebra from "../../images/intro/screnZeb.png"
import React, { useEffect, useState } from 'react';
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
                    <p className="paragraph">Contrary to popular belief, Lorem Ipsum is not simply random text.
                    It has roots in a piece of classical Latin literature from 45 BC,
                        making it over 2000 years old. Richard McClintock</p>
                    <a onClick={clickHandler} className={` button glow-on-hover butto ${animate ? "testt" : ""}`} href="#gallery">GALLERY</a>
                </div>
                <div className="backgroundFrame"> </div>
                <img src={zebra} className="zebraPainting" />
                <img src={finishedZebra} className={` ${open ? "zebraPaintingGif" : "dissapear"}`} />
            </div>
        </div>
    )
}

export default Introduction