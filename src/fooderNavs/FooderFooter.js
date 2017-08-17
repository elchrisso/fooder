import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class FooderFooter extends Component {
  render () {
    return (
      <Navbar color="#5f5f5f" className="fixed-bottom navbar-header" light toggleable>
        <Nav>
          <NavItem>
            <NavLink className="nav-link" to="/foods/add">Add Food</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/recipes/add">Add Recipe</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default FooderFooter