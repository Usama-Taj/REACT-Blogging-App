import {Nav, Navbar, NavbarBrand, Image} from 'react-bootstrap';

import profileImage from './images/user.png';
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <NavbarBrand href="\#">Blogging App</NavbarBrand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="\#">Home</Nav.Link>
          <Nav.Link href="\#1">Notifications</Nav.Link>
          <Nav.Link href="\#2">Log Out</Nav.Link>
          <Nav.Link href="\#3">
            <Image src={profileImage} width="30" roundedCircle />
          </Nav.Link>
        </Nav>
          
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Header;