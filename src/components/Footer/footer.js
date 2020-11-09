import React from "react"
import Foot from "../Footer/footer.module.css"
import Icon from "../../images/face.png"
import SecondIcon from "../../images/insta.png"

const Footer = () => {
    return (
        <div className={Foot.footer}>
            <div className={Foot.svgWrapper}>
                <p>Copyright ©2020 Annette's Art. Designed by Amber Jansen</p>
                <div class={Foot.iconWrapper}>
                    <img src={Icon} className={Foot.svg} />
                    <img src={SecondIcon} className={Foot.svg} />
                </div>
            </div>
        </div>
    )
}

export default Footer