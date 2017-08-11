import React, { Component } from 'react'

import { Navbar, Nav, NavItem, NavbarBrand } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class AppHeader extends Component {
  render () {
    return (
      <Navbar color="faded" light toggleable>
        <NavbarBrand href="/">fooder</NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink className="nav-link" to="/">foods</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/google.com">recipes</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto">
          <NavItem>
            <NavLink classname="nav-link" to="/google.com">login</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default AppHeader