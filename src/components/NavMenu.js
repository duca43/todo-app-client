import { Button, Dropdown, DropdownButton, Nav, Navbar } from 'react-bootstrap';
import logo from '../logo.svg'
import ReactCountryFlag from "react-country-flag"
import { history } from "../App";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { loggedUsernameSelector, loggedTokenSelector } from '../store/user/selectors'
import { logout } from '../store/user/actions';
import { useTranslation } from 'react-i18next';

const styles = {
  flag: {
    width: '1.5em',
    height: '1.5em'
  }
};

const languages = {
  en: {
    country_code: "GB",
    title: "English"
  },
  sr: {
    country_code: "RS",
    title: "Srpski"
  }
}
  
function NavMenu() {

  const dispatch = useDispatch();
  const username = useSelector(loggedUsernameSelector);
  const token = useSelector(loggedTokenSelector);
  const { t, i18n } = useTranslation(['navmenu']);
  const [value, setValue] = useState();
  
  useEffect(() => {
    setValue(languages[i18n.language])
  }, [i18n.language])
  
  const handleSelect = lng => {
    setValue(languages[lng])
    i18n.changeLanguage(lng);
  }
  
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
        <Nav.Link href="/">{ t('home_link') }</Nav.Link>
        {token && <Nav.Link href="/todo">To do</Nav.Link>}
      </Nav>

      { value &&
        <DropdownButton 
          title={ <ReactCountryFlag 
                 countryCode={ value.country_code }
                 svg 
                 style={styles.flag}
                 title={value.title}
                 className="mr-2"
                  /> }
          onSelect={handleSelect} 
          alignRight
          variant="outline-primary">
          <Dropdown.Item eventKey="en">
            <ReactCountryFlag 
              countryCode={ languages['en'].country_code } 
              svg 
              style={ styles.flag } title={ languages['en'].title } 
              className="mr-2"/> 
              { languages['en'].title }
          </Dropdown.Item>
          <Dropdown.Item eventKey="sr">
          <ReactCountryFlag 
              countryCode={languages['sr'].country_code} 
              svg 
              style={ styles.flag } title={ languages['sr'].title } 
              className="mr-2"/> 
              { languages['sr'].title }
          </Dropdown.Item>
        </DropdownButton>
      }

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
