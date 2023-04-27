import React from "react";
import {
  CDBModalFooter,
  CDBBtn,
  CDBIcon,
  CDBBox,

} from "cdbreact";
import logo from "../assets/images/customSVG.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
// import icon from "../assets/images/icon.svg";

const Footer = () => {
  return (
    <CDBModalFooter className="shadow nfBar">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: "80%" }}
      >
   

        {/* --------------- text version of logo ----------- */}
        {/* <CDBBox display="flex" alignItems="center">
          <a href="/" className="text-dark footerImg ">
            <a className="footerImg">
              <img href="/" className="logoImg" id="logoImg" src={icon}></img>
               <p id="title">Healing Hands</p> 
          <p id='tagline'>Massage Therapy</p>
            </a>
          </a>
        </CDBBox> */}
        {/* ----------------------------------------------- */}

        <CDBBox className="footer-content" >
        <CDBBox alignItems="center" className="each">
          <a href="/" className="align-items-center  text-dark">
            <a className="logoImgContainer">
              <img href="/" className="logoImg" id="logoImg" src={logo}></img>
            </a>
            </a>
            </CDBBox>
    
  
          
          <CDBBox id="fBtn" className="each">
          <CDBBtn href="https://www.facebook.com/barbara.turbin" flat color="dark" className="p-2 fBtn">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>

          <CDBBtn as={Link} to="/contact" flat color="dark" className=" fBtn ">
            <FontAwesomeIcon  icon={faLocationDot} className="fa-thin" />
          </CDBBtn>
          <CDBBtn href="tel:+12408080933" flat color="dark" className=" fBtn ">
            <FontAwesomeIcon  icon={faPhone} className="fa-thin" />
          </CDBBtn>
          </CDBBox>
          <CDBBox className="each">
          <small id="fText">
            &copy; Healing Hands, 2023. All rights reserved.
          </small>
        </CDBBox>
          </CDBBox>
  
      </CDBBox>
    </CDBModalFooter>
  );
};

export default Footer;
