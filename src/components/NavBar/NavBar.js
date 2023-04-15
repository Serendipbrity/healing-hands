import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo.svg';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className='navBar' variant="light">
      <Container>
        <Nav.Link className='logoImgContainer' ><img href='/' className='logoImg' src={logo}></img></Nav.Link>
        {/* hamburger */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link href="/about" className='navLinkChild'>About</Nav.Link>
            <Nav.Link href="/contact" className='navLinkChild'>Contact</Nav.Link>
            <Nav.Link href="/services" className='navLinkChild'>Services</Nav.Link>
            <Nav.Link href="/signUp" className='navLinkChild'>Sign Up</Nav.Link>
            <Nav.Link href="/signIn" className='navLinkChild'>Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
