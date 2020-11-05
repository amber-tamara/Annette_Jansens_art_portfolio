import '../Introduction/introduction.css'
import finishedZebra from "../../images/finishedZebra.gif"
import drawing from "../../images/intro/drawing.png"
import zebra from "../../images/intro/zebraa.png"
import React, { useEffect, useState } from 'react';

const Introduction = () => {
    const [open, isOpen] = useState(true)
    setTimeout(() => {
        isOpen(false)
    }, 10000);

    return (
        <div className="introBackground">
            <div className="backgroundColor"></div>
            <div className="wrapper">
                <div className="draw">
                    {/* <Img fluid={data.image.childImageSharp.fluid} class="radiel" alt="" srcset="" /> */}
                    {/* <img src={drawing} className="radiel" alt="" srcset="" /> */}

                    <p className="paragraph">Contrary to popular belief, Lorem Ipsum is not simply random text.
                    It has roots in a piece of classical Latin literature from 45 BC,
                        making it over 2000 years old. Richard McClintock</p>

                </div>
                <img src={zebra} className="zebraPainting" />
                <img src={finishedZebra} className={` ${open ? "zebraPaintingGif" : "dissapear"}`} />
            </div>
        </div>
    )
}

export default Introduction