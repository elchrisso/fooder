import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'reactstrap'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class FooderFooter extends Component {

  render () {

    if (this.props.loading) {
      return (
        <p>loading</p>
      )
    }

    let createRecipeLink = "/fooders/login"
    if (this.props.userInfo !== null) {
      createRecipeLink = "/recipes/add/" + this.props.userInfo.id
    }

    return (
      <Navbar color="#5f5f5f" className="fixed-bottom navbar-header" light toggleable>
        <Nav>
          <NavItem>
            <NavLink className="nav-link" id="add-food-link" to="/foods/add">Add Food</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to={createRecipeLink}>Add Recipe</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.auth.userInfo
  }
}

const compWithRedux = connect(mapStateToProps)(FooderFooter)
const compWithRouter = withRouter(compWithRedux)
export default compWithRouter