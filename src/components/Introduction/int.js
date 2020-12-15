import '../Introduction/introduction.css'
import finishedZebra from "../../images/zits.mp4"
import React, { useState } from 'react';

const Introduction = () => {
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
                    <div className="backgroundFrame"></div>
                    <video src={finishedZebra} width="320px" height="240" autoPlay muted
                        className="zebraPaintingGif">
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Introduction