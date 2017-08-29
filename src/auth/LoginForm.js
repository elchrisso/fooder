import React, { Component } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.onSubmit(this.state)
  }

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input id="email" type="text" onChange={(evt) => this.setState({ email: evt.target.value }) }/>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input id="password" type="password" onChange={(evt) => this.setState({ password: evt.target.value }) }/>
        </FormGroup>
        <Button type="submit" color="primary">Log In</Button>
        <FormGroup>
          <Link to="/fooders/add">Need to create a new account?</Link>
        </FormGroup>
      </Form>
    )
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default LoginForm