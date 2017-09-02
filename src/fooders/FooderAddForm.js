import React, { Component } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class FooderAddForm extends Component {
  constructor () {
    super ()
    this.state = {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    if (this.state.password === this.state.confirmPassword) {
      this.props.onSubmit(this.state)
    } else {
      alert("Password and Confirm Password do not match, please try again.")
    }
  }

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="fullName">What's your name fooder?</Label>
          <Input type="text" id="fullName" onChange={(evt) => this.setState({ fullName: evt.target.value }) }/>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="text" id="email" onChange={(evt) => this.setState({ email: evt.target.value }) }/>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" id="password" onChange={(evt) => this.setState({ password: evt.target.value }) }/>
        </FormGroup>
        <FormGroup>
          <Label for="confirm-password">Confirm Password</Label>
          <Input type="password" id="confirm-password" onChange={(evt) => this.setState({ confirmPassword: evt.target.value }) }/>
        </FormGroup>
        <FormGroup>
          <Button type="submit" color="primary">Create Account</Button>
        </FormGroup>
        <Link to="/login">Back to Login</Link>
      </Form>
    )
  }
}

FooderAddForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default FooderAddForm