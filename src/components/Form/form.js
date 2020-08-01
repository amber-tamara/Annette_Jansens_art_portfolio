import React from "react"
import form from "../Form/form.module.css"

const Form = () => {
    return (
        <div className={form.background}>
            <h1>CONTACT ME</h1>
            <p>Interested in a painting or Want to collab?
            Drop me a message
            </p>
            <p></p>
            <form>
                <div>
                    <label>NAME*</label>
                    <input type="text" name="name"></input>
                    <p>FIRSTNAME*</p>
                    <input type="text" name="name"></input>
                    <p>LASTNAME*</p>
                </div>
                <label>EMAIL*</label>
                <input type="email"></input>
                <label>MESSAGE*</label>
                <input type="message"></input>
            </form>
        </div>
    )
}

export default Form