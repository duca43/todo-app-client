import { Button, Nav, Navbar } from 'react-bootstrap';
import logo from '../logo.svg'
import { history } from "../App";

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
      
      <Button className="mx-2" onClick={() => history.push("/registration")}>
        <i className="fa fa-user-plus"></i> Sign Up
      </Button>
      <Button className="mx-2">
        <i className="fa fa-sign-in"></i> Sign In
      </Button>
    </Navbar>
  );
}

export default NavMenu;
