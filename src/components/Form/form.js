import React from "react"
import form from "../Form/form.module.css"

const Form = () => {
    return (
        <div className={form.background} id="form">
            <div className={form.title}>
                <h1>CONTACT ME</h1>
                <p>Interested in a painting or Want to collab?
                Drop me a message
            </p>
            </div>
            <form className={form.form}>
                <div className={form.box}>
                    <label>NAME*</label>
                    <input type="text" name="name"></input>
                </div>
                <div className={form.box}>
                    <label>EMAIL*</label>
                    <input type="email"></input>
                </div>
                <div className={form.box}>
                    <label>MESSAGE*</label>
                    <textarea
                        name="message"
                        cols="23"
                        rows="4"
                        required></textarea>
                </div>
                <button input="text" type="sumbit" className={form.btn}>
                    <span className={form.btnPaint}></span>
                    <span className={form.btnPaint}></span>
                    <span className={form.btnPaint}></span>
                    <span className={form.btnPaint}></span>
                    <span className={form.btnLabel}>SUBMIT</span>
                </button>
            </form>
        </div>
    )
}

export default Form