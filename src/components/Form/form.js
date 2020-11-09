import React from "react"
import "../Form/form.scss"
// import FormSvg from "../Form/animation"
// import Button from "../Button/button.js"
import "../Button/button.scss"
import { useState } from 'react';
import Recaptcha from "react-recaptcha";
import axios from "axios";
// import Img from "gatsby-image"
// import FormSvg from "./animation";
import painting from "../../images/giraff.png"
import formTitleUnderline from "../../images/intro/blackString.png"

const Form = () => {
    const [animate, setAnimate] = useState(false);
    const [none, setNone] = useState(false);
    const [toggled, setToggled] = useState(false);
    const [click, setClick] = useState(false)
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null,
    })


    function handlSubcribe() {
        if (click === true) {
            console.log("you have done it!")
        }
        else {
            console.log("please baby")
        }
    }

    const clickHandler = function (e) {
        // e.preventDefault()
        setAnimate(true)
        handlSubcribe()
    };

    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg },
        })
        if (ok) {
            form.reset()
        }
    }

    const handleOnSubmit = e => {
        e.preventDefault()
        const form = e.target
        setServerState({ submitting: true })
        axios({
            method: "post",
            url: "https://getform.io/f/644f0023-19dc-46ae-8e1b-73abf25484fe",
            data: new FormData(form),
        })
            .then(r => {
                if (click === true) {
                    handleServerResponse(true, "Thanks!", form)
                    setClick(false)
                    setNone(true)
                    setToggled(true)
                }
            })
            .then(r => {
                if (click === false) {
                    handleServerResponse(false, "No", form)
                }
            })
            .catch(r => {
                if (click === false) {
                    handleServerResponse(false, "Please click reCaptcha", form)
                    console.log(r)
                }
            })
    }

    // r.response.data.error

    function recaptchaLoaded() {
        console.log("loaded")
    }

    function verifyCallback(response) {
        if (response) {
            setClick(true)
            console.log(click)
        }
    }

    return (
        <div className="backgroundForm" id="form">
            <div className="form-box">
                <div className={`form-wrapper ${none ? "dissapear" : ""}`}>
                    <form className="form" onSubmit={handleOnSubmit}>
                        <div className="titleWrapper">
                            <h1>CONTACT ME</h1>
                            <img src={formTitleUnderline} className="underlineStrokeForm" alt="underline"></img>
                            <p>Interested in a painting or want to collab?
                            Drop me a message...
                      </p>
                        </div>
                        <div className="box">
                            <label htmlFor="name"
                                required="required">
                                Name</label>
                            <input
                                className="text"
                                type="text"
                                name="name"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div className="box">
                            <label htmlFor="email">
                                Email</label>
                            <input
                                className="text"
                                type="email"
                                name="email"
                                id="exampleInputName"
                                required="required"
                            />
                        </div>
                        <div className="box">
                            <label htmlFor="message">Message</label>
                            <textarea
                                className="text"
                                name="message"
                                cols="29"
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        <div className="recaptcha">
                            <Recaptcha
                                sitekey="6LdBo78ZAAAAAAzjitoDMESb856n3M_KvXqyKmfE"
                                render="explicit"
                                onloadCallback={recaptchaLoaded}
                                verifyCallback={verifyCallback}
                            />
                        </div>
                        <button
                            type="submit"
                            className={`glow-on-hover butto ${animate ? "testt" : ""}`}
                            onClick={clickHandler}
                            disabled={serverState.submitting}
                        >
                            Submit
                  </button>
                    </form>
                    {/* <FormSvg></FormSvg> */}
                    <img src={painting} className="tropicalPainting" alt="giraffe"></img>

                </div>
                <div className="messageBox">
                    <div className="message">
                        {serverState.status && (
                            <p className={!serverState.status.ok ? "errorMsg" : ""}>
                                {serverState.status.msg}
                            </p>
                        )}
                    </div>
                    <img src={require("../../images/splat.jpg")} alt="Cat" className={` ${toggled ? "appear" : "dissapear"}`} />
                </div>
            </div>
        </div>
    )
}

export default Form