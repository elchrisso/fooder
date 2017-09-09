import './Login.css'
import React, { Component } from 'react'
import { Container, Row, Col, Card, CardHeader, CardBlock, Alert } from 'reactstrap'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import LoginForm from './LoginForm'
import AuthService from './service'
import { loginSuccess, loginError } from './actions'

class Login extends Component {

  handleLoginAttempt = (data) => {
    this.props.mutate({
      variables: data
    }).then((response) => {
      this.props.dispatch(loginSuccess(response.data.loginUser.token))
      console.log("login success!")
      window.location.reload()
    }).catch((error) => {
      this.props.dispatch(loginError(error.message))
      alert("Account not found, maybe you need to create one?")
    })
  }

  render () {
    if (localStorage.token !== null && localStorage.token !== undefined) {
      return (
        <Redirect to="/"/>
      )
    }

    return (
      <Container className="login-container">
        <Row>
          <Col>
            <Card>
              <CardHeader>Welcome fooder dooder!</CardHeader>
              <CardBlock>
                <LoginForm onSubmit={this.handleLoginAttempt}/>
              </CardBlock>
            </Card>
          </Col>
        </Row>

      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token
  }
}

const withLoginUserMutation = graphql(AuthService.loginUser)(Login)
const withReduxConnection = connect(mapStateToProps)(withLoginUserMutation)

export default withReduxConnection