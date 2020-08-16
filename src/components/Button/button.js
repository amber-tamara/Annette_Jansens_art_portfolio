import React from "react"
import "../Button/button.scss"
import { useState } from 'react';
import Recaptcha from "react-recaptcha";

// Styles

const Button = () => {
    const [animate, setAnimate] = useState(false);
    const [click, setClick] = useState(false)

    function recaptchaLoaded() {
        console.log("loaded")
    }

    function handlSubcribe() {
        if (click === true) {
            console.log("you have done it!")
        }
        else {
            console.log("please baby")
        }
    }

    var clickHandler = function (e) {
        e.preventDefault()
        //reset animation
        // setAnimate(false)
        setAnimate(true)
        handlSubcribe()
    };

    function verifyCallback(response) {
        if (response) {
            setClick(true)
            console.log("bob")
        }
    }
    return (
        <div className="button-wrapper">
            <div>
                <button
                    type="submit"
                    className={`glow-on-hover butto ${animate ? "testt" : ""}`}
                    onClick={clickHandler}>
                    <span>SUBMIT</span>
                </button>
            </div>
            <div>
                <Recaptcha
                    sitekey="6LdBo78ZAAAAAAzjitoDMESb856n3M_KvXqyKmfE"
                    render="explicit"
                    onloadCallback={recaptchaLoaded}
                    verifyCallback={verifyCallback}
                />
            </div>
        </div>
    )
}

export default Button

const [animate, setAnimate] = useState(false);
const [click, setClick] = useState(false)
const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
})

function recaptchaLoaded() {
    console.log("loaded")
}

function handlSubcribe() {
    if (click === true) {
        console.log("you have done it!")
    }
    else {
        console.log("please baby")
    }
}

var clickHandler = function (e) {
    e.preventDefault()
    //reset animation
    // setAnimate(false)
    setAnimate(true)
    handlSubcribe()
};

function verifyCallback(response) {
    if (response) {
        setClick(true)
        console.log("bob")
    }
}

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
            handleServerResponse(true, "Thanks!", form)
        })
        .catch(r => {
            handleServerResponse(false, r.response.data.error, form)
        })
}
return (
    <div className="backgroundForm" id="form">
        <div className="form-box">
            <div className="title">
                <h1>CONTACT ME</h1>
                <p>Interested in a painting or Want to collab?
                Drop me a message
        </p>
            </div>
            <div className="form-wrapper">
                <form className="form" onSubmit={handleOnSubmit}>
                    <div className="box">
                        <label>NAME</label>
                        <input className="text" type="text" name="name"></input>
                    </div>
                    <div className="box">
                        <label>EMAIL</label>
                        <input className="text" type="email" name="email"></input>
                    </div>
                    <div className="box">
                        <label>MESSAGE</label>
                        <textarea
                            className="text"
                            name="message"
                            cols="18"
                            rows="4"
                            required></textarea>
                    </div>
                    <div className="button-wrapper">
                        <div>
                            <button
                                type="submit"
                                className={`glow-on-hover butto ${animate ? "testt" : ""}`}
                                onClick={clickHandler}
                                disabled={serverState.submitting}>

                                <span>SUBMIT</span>
                            </button>
                            {serverState.status && (
                                <p className={!serverState.status.ok ? "errorMsg" : ""}>
                                    {serverState.status.msg}
                                </p>
                            )}
                        </div>
                        <Recaptcha
                            sitekey="6LdBo78ZAAAAAAzjitoDMESb856n3M_KvXqyKmfE"
                            render="explicit"
                            onloadCallback={recaptchaLoaded}
                            verifyCallback={verifyCallback}
                        />
                    </div>
                </form>
                <FormSvg></FormSvg>
            </div>
        </div>
    </div>