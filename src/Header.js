import {Nav, Navbar, NavbarBrand, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import profileImage from './images/user.png';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <NavbarBrand href="\#">Blogging App</NavbarBrand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/newblog">Add New Blog</Link>
          <Link className="nav-link" to="/">Log Out</Link>
          <Link className="nav-link" to="/">
            <Image src={profileImage} width="30" roundedCircle />
          </Link>
        </Nav>
          
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Header;