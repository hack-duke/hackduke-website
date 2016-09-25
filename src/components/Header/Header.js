import React from 'react'
import Scroll from 'react-scroll'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import classes from './Header.scss'

// <Nav pullRight>
//   <a className={classes.applyButton} eventKey={1} href={'http://my.hackduke.org/login'}>Login</a>
// </Nav>

export const Header = () => (
  <div>
    <Navbar inverse fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem className={classes.navItem} eventKey={1} href={'#about'}>ABOUT</NavItem>
          <NavItem className={classes.navItem} eventKey={2} href={'#tracks'}>TRACKS</NavItem>
          <NavItem className={classes.navItem} onClick={function() {
            Scroll.scroller.scrollTo('faqScrollPoint',{
              duration: 850,
              delay: 100,
              smooth: true,
            }); }}>FAQS</NavItem>
          <NavItem className={classes.navItem} eventKey={4} href={'#sponsors'}>SPONSORS</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

export default Header
