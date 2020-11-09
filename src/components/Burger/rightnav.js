import React from 'react';
import styled from 'styled-components'
import "../Burger/burger.css"
import Icon from "../../assets/facebook.svg"
import SecondIcon from "../../assets/instagram.svg"

const Ul = styled.ul` 
 list-style: none;
 display: flex;
 flex-flow: row nowrap;
 align-items: center;

 li {
   padding: 18px 10px;
 }

@media (max-width: 1027px) {
  flex-flow: column nowrap;
  background-color: #a7a6a6;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  top: 0;
  right: 0;
  height: 60vh;
  width: 300px;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  
  li {
      color: #fff;
      font-weight: bold;
      text-align: center;
  }
  a{
    font-weight: bold;
    text-decoration: none;
    color: #fff
  }
 a,
a:after,
a:before {
  transition: all .5s;
}
a:hover {
  color: #555;
}

}
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li className="gallery-burger"><a href="#gallery">GALLERY</a></li>
      <li><a href="#about">ABOUT</a></li>
      <li><a href="#form">CONTACT</a></li>
      <span className="svgWrapper">
        <a href="https://www.facebook.com/profile.php?id=100008144649274" target="_blanc" aria-label="facebook" htmlFor="facebook"><Icon className="svg" /></a>
        <a href="https://www.instagram.com/annettes_arts/" target="_blanc" aria-label="instagram" htmlFor="instagram"><SecondIcon className="svg" /></a>
      </span>
    </Ul >
  )
}

export default RightNav;