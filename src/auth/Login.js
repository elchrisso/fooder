import './Login.css'
import React, { Component } from 'react'
import { Container, Row, Col, Card, CardHeader, CardBlock, Alert } from 'reactstrap'
import { connect } from 'react-redux'

import LoginForm from './LoginForm'

class Login extends Component {

  handleLoginAttempt = (data) => {
    this.props.mutate({
      variables: data
    }).then((response) => {
      console.log("login success!")
    }).catch((error) => {
      console.log("login failure")
    })
  }

  render () {
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

export default Login