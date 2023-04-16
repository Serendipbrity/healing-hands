import React from 'react';
import { CDB, CDBModalFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBBox, CDBContainer } from 'cdbreact';
import logo from '../assets/images/logo.svg';

const Footer = () => {
  return (
    <CDBModalFooter className="shadow navBar">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
          <a className='logoImgContainer' ><img href='/' className='logoImg' src={logo}></img></a>
            
          </a>
        </CDBBox>
        <CDBBox id='fText'>
          <small className="ms-2">&copy; Healing Hands, 2023. All rights reserved.</small>
        </CDBBox>
        <CDBBox display="flex" id='fBtn'>
          <CDBBtn flat color="dark" className="p-2 fBtn">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2 fBtn">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2 fBtn">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBModalFooter>
  );
};

export default Footer;