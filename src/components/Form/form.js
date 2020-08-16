import React from "react"
import "../Form/form.scss"
import FormSvg from "../Form/animation"
// import Button from "../Button/button.js"
import "../Button/button.scss"
import { useState } from 'react';
// import Recaptcha from "react-recaptcha";
import axios from "axios"

const Form = () => {
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null,
    })
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
        <div>
            <div >
                <div>
                </div>
                <h2 >GET IN TOUCH!</h2>
                <p >
                    Whether you have an idea for a project or just want to chat, feel free
              to shoot me an email!{" "}
                </p>{" "}
                <div >
                    <form onSubmit={handleOnSubmit}>
                        <div>
                            <h2>Contact Form</h2>
                            <label

                                for="exampleInputEmail1"
                                required="required"
                            >
                                Name*
                  </label>
                            <input

                                type="text"
                                name="name"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputName">
                                Email*
                  </label>
                            <input

                                type="email"
                                name="email"
                                id="exampleInputName"
                                required="required"
                            />
                        </div>
                        <div >
                            <label>Message*</label>
                            <textarea

                                name="message"
                                cols="29"
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={serverState.submitting}
                        >
                            Submit
                </button>
                        {serverState.status && (
                            <p className={!serverState.status.ok ? "errorMsg" : ""}>
                                {serverState.status.msg}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form