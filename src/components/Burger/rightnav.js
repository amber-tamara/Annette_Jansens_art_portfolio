import React from 'react';
import styled from 'styled-components'
import "../Burger/burger.css"
import Icon from "../../assets/facebook.svg"
import SecondIcon from "../../assets/instagram.svg"

const Ul = styled.ul` 
 list-style: none;
 display: flex;
 flex-flow: row nowrap

 li {
   padding: 18px 10px;
 }

@media (max-width: 768px) {
  flex-flow: column nowrap;
  background-color: #a7a6a6;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  
  li {
      color: #fff;
      font-weight: bold;
      margin-top: 10px;
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
        <Icon className="svg" />
        <SecondIcon className="svg" />
      </span>
    </Ul >
  )
}

export default RightNav;