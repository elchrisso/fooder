import React, { Component } from 'react'

import { Navbar, Nav, NavItem, NavbarBrand } from 'reactstrap'
import { NavLink } from 'react-router-dom'

import './AppHeader.css'

class AppHeader extends Component {
  render () {
    return (
      <Navbar color="#5f5f5f" className="fixed-top navbar-header" light toggleable>
        <NavbarBrand href="/">fooder</NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink className="nav-link" to="/foods" activeClassName="active">foods</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/recipes">recipes</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto">
          <NavItem>
            <NavLink classname="nav-link" to="/login">login</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default AppHeader