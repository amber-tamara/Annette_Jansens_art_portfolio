import React from "react"
import "../Button/button.scss"
import { useState } from 'react';

// Styles

const Button = () => {
    const [animate, setAnimate] = useState(false);
    const [text, setText] = useState("SUBMIT");

    var clickHandler = function (e) {
        e.preventDefault()
        //reset animation
        // setAnimate(false)
        setAnimate(true)
    };

    return (
        <div className="button-wrapper">
            <button
                className={`glow-on-hover ${animate ? "testt" : ""}`}
                onClick={!setAnimate}>
                <span onClick={() => setText("SUBMITTED")}>{text}</span>
            </button>
        </div>
    )
}

export default Button