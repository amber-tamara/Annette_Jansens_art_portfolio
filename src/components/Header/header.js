import PropTypes from "prop-types"
import React from "react"
import { useState } from 'react';
import header from "./header.module.css"
import Icon from "../../assets/facebook.svg"
import SecondIcon from "../../assets/instagram.svg"
import styled from 'styled-components'
import RightNav from '../Burger/rightnav'
// import Splat from "../../assets/splat.svg"

const StyledBurger = styled.div`
width: 2rem;
height: 2rem;
position: absolute;
top: 15px;
right: 40px;
display: flex;
justify-content: flex-end;;
flex-flow: column nowrap;
z-index: 10;
display: none;

@media (max-width: 1027px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
}

div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    z-index: 10;

&:nth-child(1) {
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
}
&:nth-child(2) {
    transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
    opacity: ${({ open }) => open ? 0 : 1}
}
&:nth-child(3) {
    transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
}
}
 `

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)
  return (
    <header className={header.header}>
      <div
        className={header.wrapper}
      >
        <li className={header.nav}>
          <ul><a className={header.navLink} href="#about">ABOUT</a></ul>
          <ul className={header.navList}><a className={header.navLink} href="#form">CONTACT</a></ul>
        </li>
        {/* <Splat className={header.brushImg} alt="paint"></Splat> */}
        <h1 className={header.title}>
          {siteTitle}</h1>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div></div>
          <div></div>
          <div></div>
          <RightNav open={open} />
        </StyledBurger>
        <div className={header.svgWrapper}>
          <a href="https://www.facebook.com/profile.php?id=100008144649274" target="_blanc"><Icon className={header.svg} /> </a>
          <a href="https://www.facebook.com/profile.php?id=100008144649274" target="_blanc"><SecondIcon className={header.secondSvg} /></a>
        </div>
      </div>
    </header >
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
