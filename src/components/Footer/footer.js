import React from "react"
import Foot from "../Footer/footer.module.css"
import Icon from "../../assets/facebook.svg"
import SecondIcon from "../../assets/instagram.svg"

const Footer = () => {
    return (
        <div className={Foot.footer}>
            <div className={Foot.svgWrapper}>
                <Icon className={Foot.svg} />
                <SecondIcon className={Foot.svg} />
            </div>
        </div>
    )
}

export default Footer