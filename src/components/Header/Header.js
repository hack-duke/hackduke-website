import React from 'react'
import Scroll from 'react-scroll'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import classes from './Header.scss'

// <Nav pullRight>
//   <a className={classes.applyButton} eventKey={1} href={'http://my.hackduke.org/login'}>Login</a>
// </Nav>

class Header extends React.Component {

  // scrollToElement() {
  //   Scroll.scroller.scrollTo('aboutScrollPoint',{
  //     duration: 850,
  //     delay: 100,
  //     smooth: true,
  //   });
  // }

  render () {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem className={classes.navItem} onClick={function () {
                Scroll.scroller.scrollTo('aboutScrollPoint', {
                  duration: 850,
                  delay: 100,
                  smooth: true
                })
              }}>ABOUT</NavItem>
              <NavItem className={classes.navItem} onClick={function () {
                Scroll.scroller.scrollTo('tracksScrollPoint', {
                  duration: 850,
                  delay: 100,
                  smooth: true
                })
              }}>TRACKS</NavItem>
              <NavItem className={classes.navItem} onClick={function () {
                Scroll.scroller.scrollTo('faqScrollPoint', {
                  duration: 850,
                  delay: 100,
                  smooth: true
                })
              }}>FAQS</NavItem>
              <NavItem className={classes.navItem} onClick={function () {
                Scroll.scroller.scrollTo('sponsorsScrollPoint', {
                  duration: 850,
                  delay: 100,
                  smooth: true
                })
              }}>SPONSORS</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
