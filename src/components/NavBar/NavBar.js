import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import icon from '../../assets/images/icon.svg';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className='nfBar' variant="light">
      <Container>
        <Nav.Link className='logoImgContainer' id='logoImgContainer'><img as={Link} to="/" className='logoImg' src={logo}></img>
        </Nav.Link>
                {/* <p>Healing Hands</p> */}
          {/* <p id='tagline'>Massage Therapy</p> */}
        {/* hamburger */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" id='hamburger'/>
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end hamburger" >
          <Nav basename="/healing-hands">
            <Nav.Link as={Link} to="/about" className='navLinkChild'>About</Nav.Link>
            <Nav.Link as={Link} to="/contact" className='navLinkChild'>Contact</Nav.Link>
            <Nav.Link as={Link} to="/services" className='navLinkChild'>Services</Nav.Link>
            <Nav.Link as={Link} to="/signUp" className='navLinkChild'>Sign Up</Nav.Link>
            <Nav.Link as={Link} to="/signIn" className='navLinkChild'>Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
