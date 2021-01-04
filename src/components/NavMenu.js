import { Nav, Navbar, DropdownButton, Dropdown } from 'react-bootstrap';
import logo from '../logo.svg'
import ReactCountryFlag from "react-country-flag"
import { useEffect, useState } from 'react';
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

  const { t, i18n } = useTranslation(['navmenu']);

  const [value, setValue] = useState();
  const handleSelect = lng => {
    setValue(languages[lng])
    i18n.changeLanguage(lng);
  }

  useEffect(() => {
    setValue(languages[i18n.language])
  }, [i18n.language])

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
      </Nav>

      { value ?
        <DropdownButton 
          title={<ReactCountryFlag countryCode={value.country_code} svg style={styles.flag} title={value.title} className="mr-2"/>}
          onSelect={handleSelect} 
          alignRight
          variant="outline-primary">
          <Dropdown.Item eventKey="en">
            <ReactCountryFlag 
              countryCode={languages['en'].country_code} 
              svg 
              style={styles.flag} title={languages['en'].title} 
              className="mr-2"/> 
              {languages['en'].title}
          </Dropdown.Item>
          <Dropdown.Item eventKey="sr">
          <ReactCountryFlag 
              countryCode={languages['sr'].country_code} 
              svg 
              style={styles.flag} title={languages['sr'].title} 
              className="mr-2"/> 
              {languages['sr'].title}
          </Dropdown.Item>
        </DropdownButton>
      : undefined }
    </Navbar>
  );
}

export default NavMenu;
