import { Button, Dropdown, Nav, Navbar } from 'react-bootstrap';
import logo from '../logo.svg'
import { history } from "../App";
import { useDispatch, useSelector } from 'react-redux';
import { loggedUsernameSelector, loggedTokenSelector } from '../store/user/selectors'
import { logout } from '../store/user/actions';

function NavMenu() {

  const dispatch = useDispatch();
  const username = useSelector(loggedUsernameSelector);
  const token = useSelector(loggedTokenSelector);
  
  const handleLogout = () => {
    dispatch(
      logout({
        callback: () => {
          history.push("/");
        }
      })
    );
  }

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
      {!token &&
          <div>
            <Button className="mx-2" onClick={() => history.push("/signup")}>
              <i className="fa fa-user-plus"></i> Sign Up
            </Button>
            <Button className="mx-2" onClick={() => history.push("/signin")}>
              <i className="fa fa-sign-in"></i> Sign In
            </Button>
          </div>
       }
       {token &&
          <Dropdown className="mx-2 text-light" alignRight>
            <Dropdown.Toggle>
              <i className="fa fa-user mr-1"></i> { username }
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={ handleLogout }>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
       }
    </Navbar>
  );
}

export default NavMenu;
