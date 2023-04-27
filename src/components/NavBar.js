import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/customSVG.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function NavBar() {
  const [expanded, setExpanded] = useState(false);

  function handleLinkClick() {
    setExpanded(false);
  }

  return (
    <Navbar
      expanded={expanded}
      onToggle={setExpanded}
      collapseOnSelect
      expand="lg"
      className='nfBar'
      variant="light"
    >
      <Container>
        <Navbar.Brand>
          <Nav.Link as={Link} to="/" className='logoImgContainer'><img className='logoImg' src={logo} alt="Logo" /></Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='hamburger' />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/about" className='navLinkChild' onClick={handleLinkClick}>About</Nav.Link>
            <Nav.Link as={Link} to="/contact" className='navLinkChild' onClick={handleLinkClick}>Contact</Nav.Link>
            <Nav.Link as={Link} to="/services" className='navLinkChild' onClick={handleLinkClick}>Services</Nav.Link>
            <Nav.Link as={Link} to="/bookNow" className='navLinkChild' id='booknowNav' onClick={(event) => {
              event.preventDefault();
              handleLinkClick();
              window.Calendly.initPopupWidget({ url: 'https://calendly.com/bcourt95' });
            }}>Book Now</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
