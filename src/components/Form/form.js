import React from "react"
import "../Form/form.scss"
import FormSvg from "../Form/animation"
import Button from "../Button/button.js"

const Form = () => {
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
                    <form className="form">
                        <div className="box">
                            <label>NAME</label>
                            <input className="text" type="text" name="name"></input>
                        </div>
                        <div className="box">
                            <label>EMAIL</label>
                            <input className="text" type="email"></input>
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
                        <Button></Button>
                    </form>
                    <FormSvg></FormSvg>
                </div>
            </div>
        </div>
    )
}

export default Form