import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { connect } from 'react-redux'
import { withApollo } from 'react-apollo'

import { logout } from './actions'

class LogoutButton extends Component {

  handleLogout = () => {
    this.props.dispatch(logout())
  }

  render () {
    return (
      <div>
        <Button color="danger" onClick={this.handleLogout}>Log Out</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token
  }
}

export default withApollo(connect(mapStateToProps)(LogoutButton))