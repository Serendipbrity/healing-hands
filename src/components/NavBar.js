import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import icon from '../assets/images/icon.svg';

export default function NavBar() {
  const navbarRef = useRef(null);

  function handleLinkClick() {
    navbarRef.current.collapse();
  }
  return (
    <Navbar ref={navbarRef} collapseOnSelect expand="lg" className='nfBar' variant="light">
      <Container>
        <Nav.Link className='logoImgContainer' id='logoImgContainer'><img as={Link} to="/" className='logoImg' src={logo}></img>
        </Nav.Link>

        {/* ------- text version of logo ---------- */}
        {/* <Nav.Link className='logoImgContainer navHH' id='logoImg'>
        <img as={Link} to="/" className='logoImg navHH' src={icon}></img>
                <p id="title" className='navHH'>Healing Hands</p> 
          <p id='tagline' className='navHH'>Massage Therapy</p>
          </Nav.Link> */}
        {/* ----------------------------------------- */}
        

        {/* hamburger */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" id='hamburger' />
        
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end hamburger" >
          <Nav>
            <Nav.Link onClick={handleLinkClick} as={Link} to="/about" className='navLinkChild'>About</Nav.Link>
            <Nav.Link onClick={handleLinkClick} as={Link} to="/contact" className='navLinkChild'>Contact</Nav.Link>
            <Nav.Link onClick={handleLinkClick} as={Link} to="/services" className='navLinkChild'>Services</Nav.Link>
            <Nav.Link as={Link} to="/booknow" className='navLinkChild' href="" onClick={(event) => {
              handleLinkClick();
              window.Calendly.initPopupWidget({ url: 'https://calendly.com/bcourt95' });
            }} id='booknowNav'>Book Now</Nav.Link>
            {/* <Nav.Link as={Link} to="/signUp" className='navLinkChild'>Sign Up</Nav.Link>
            <Nav.Link as={Link} to="/signIn" className='navLinkChild'>Sign In</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
