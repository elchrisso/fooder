import './FooderNavs.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withApollo } from 'react-apollo'

import { Navbar, Nav, NavItem, NavbarBrand, Button } from 'reactstrap'
import { NavLink, withRouter } from 'react-router-dom'

import AuthService from '../auth/service'
import { getAuthUser, getAuthUserSuccess, getAuthUserFail } from '../auth/actions'

class FooderHeader extends Component {
  constructor () {
    super()
    this.state= {
      bitOState: ''
    }
  }

  componentWillMount () {
    this.props.dispatch(getAuthUser())

    this.props.client.query({
      query: AuthService.loggedInUser
    }).then((resp) => {
      this.props.dispatch(getAuthUserSuccess((resp.data.loggedInUser)))
    }).catch(((err) => {
      this.props.dispatch(getAuthUserFail(err))
    }))
  }

  render () {
    console.log("rendering header nav")
    let userLink = "/fooders/login"
    let userLinkText = "Login"
    console.log("userInfo: " + this.props.userInfo)
    if (this.props.userInfo !== null) {
      userLinkText = this.props.userInfo.profile.fullName + "'s Account"
      userLink = "/fooders/edit/" + this.props.userInfo.id
    }

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
    userInfo: state.auth.userInfo,
    userInfoError: state.auth.userInfoError
  }
}

const compWithRedux = connect(mapStateToProps)(FooderHeader)
const compWithRouter = withRouter(compWithRedux)
export default withApollo(compWithRouter)