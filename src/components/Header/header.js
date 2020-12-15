import PropTypes from "prop-types"
import React from "react"
import { useState } from 'react';
import header from "./header.module.scss"
import styled from 'styled-components'
import RightNav from '../Burger/rightnav'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"


const StyledBurger = styled.div`
width: 2rem;
height: 2rem;
position: absolute;
top: 11px;
right: 20px;
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
    background-color: ${({ open }) => open ? '#ccc' : '#F5F5F5'};
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

  const data = useStaticQuery(graphql`{
    file(relativePath: {eq: "title.png"}) {
      id
      childImageSharp {
        fluid(maxWidth: 2000) {
       srcSet
        }
      }
    }
  }`)
  return (
    <header className={header.header}>
      <div className={header.wrapper}>
        <Img fluid={data.file.childImageSharp.fluid} fadeIn className={header.title} alt="title"></Img>
        <li className={header.nav}>
          <ul><a href="#gallery" className={`${header.navLink} ${header.orange}`}>GALLERY</a></ul>
          <ul><a href="#about" className={`${header.navLink} ${header.pink}`}>ABOUT</a></ul>
          <ul><a href="#form" className={`${header.navLink} ${header.blue}`}>CONTACT</a></ul>
        </li>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div></div>
          <div></div>
          <div></div>
          <RightNav open={open} />
        </StyledBurger>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
