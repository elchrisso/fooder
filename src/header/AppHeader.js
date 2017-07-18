import React, { Component } from 'react'

import { Navbar, Nav, NavItem, NavbarBrand } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class AppHeader extends Component {
  render () {
    return (
      <Navbar color="dark">
        <NavbarBrand href="/">fooder</NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink to="/">home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="https://google.com">googleTillItsCreateARecipe</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="https://google.com">googleTillItsGroceries</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default AppHeader