import { Nav, Navbar } from 'react-bootstrap';
import logo from '../logo.svg'

function NavMenu() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="/">
        <img 
          alt=""
          src={logo}
          width="42"
          height="42"
          className="mr-3"
        />
        TodoApp
      </Navbar.Brand>
      
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavMenu;
