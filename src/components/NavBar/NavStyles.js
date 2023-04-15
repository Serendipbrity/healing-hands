import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// entire nav bar
// export const Nav = styled.nav`
//   background: #fff;
//   height: 80px;
//   display: flex;
//   justify-content: space-between;
//   padding: 0.5rem calc((100vw - 1000px) / 2);
//   z-index: 10;
//   `;

  // each link in the nav bar
export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  flex-wrap: nowrap;
  &.active {
    color: #15cdfc;
  }`;


  // hamburger menu icon
export const Bars = styled(FaBars)`
  display: none;
  color: #000;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

// everything in the nav bar except the hamburger menu icon
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }`;

  // Sign In button
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }`;

  // Sign In button link
export const NavBtnLink = styled.nav(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #000;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }`;