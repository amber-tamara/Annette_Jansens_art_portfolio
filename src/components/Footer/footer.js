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
                    <a href="https://www.facebook.com/profile.php?id=100008144649274" target="_blank" rel="noreferrer"><img src={Icon} className={Foot.svg} alt="facebook Icons" /></a>
                    <a href="https://www.instagram.com/annettes_arts/ " target="_blank" rel="noreferrer"><img src={SecondIcon} className={Foot.svg} alt="instagram Icons" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer