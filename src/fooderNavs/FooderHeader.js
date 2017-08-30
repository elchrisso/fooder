import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withApollo } from 'react-apollo'

import { Navbar, Nav, NavItem, NavbarBrand } from 'reactstrap'
import { NavLink } from 'react-router-dom'

import './FooderNavs.css'

class FooderHeader extends Component {
  render () {
    let userLink = "/fooders/login"
    let userLinkText = "Login"

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
            <NavLink className="nav-link" to={userLink}>{userLinkText}</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    userInfo: state.auth.userInfo
  }
}

export default withApollo(connect(mapStateToProps)(FooderHeader))
