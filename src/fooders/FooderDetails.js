import React, { Component } from 'react'
import { Button, Row, Col, Label, Form, FormGroup, Input } from 'reactstrap'
import { graphql } from 'react-apollo'
import { Redirect } from 'react-router-dom'

import FooderService from './service'
import LogoutButton from '../auth/LogoutButton'
import RecipeListSmall from '../recipes/RecipeListSmall'

class FooderDetails extends Component {
  constructor() {
    super()
    this.state = {
      fullName: '',
      fullAddress: '',
      phoneNumber: ''
    }
  }

  handleSubmitAccountEdits = (evt) => {
    evt.preventDefault()
    this.props.mutate({
      variables: {
        userId: this.props.data.User.id,
        ...this.state
      },
      refetchQueries: [{
        query: FooderService.User,
        id: this.props.id
      }]
    }).then(() => {
      //alert('Account information edited!')
      window.location.reload()
    }).catch((err) => {
      window.location.reload()
      alert(err)
    })
  }

  render () {
    if (this.props.data.loading) {
      return (<p>loading...</p>)
    }

    if (localStorage.token === null || localStorage.token === undefined) {
      return (
        <Redirect to="/fooders/login"/>
      )
    }

    return (
      <div>
        <Row>
          <Col className="col-8">
            <h4>Fooder Account Info</h4>
            <Form onSubmit={this.handleSubmitAccountEdits}>
              <FormGroup>
                <Label to="fullName">Name</Label>
                <Input type="text" id="fullName" defaultValue={this.props.data.User.profile.fullName} onChange={(evt) => this.setState({ fullName: evt.target.value }) }/>
              </FormGroup>
              <FormGroup>
                <Label to="fullAddress">Address</Label>
                <Input type="text" defaultValue={this.props.data.User.profile.fullAddress} onChange={(evt) => this.setState({ fullAddress: evt.target.value }) }/>
              </FormGroup>
              <FormGroup>
                <Label to="phoneNumber">Phone Number</Label>
                <Input id="phoneNumber" type="text" defaultValue={this.props.data.User.profile.phoneNumber} onChange={(evt) => this.setState({ phoneNumber: evt.target.value }) }/>
              </FormGroup>
              <Button color="success">Submit Changes</Button>
            </Form>
          </Col>
          <Col className="col-4">
            <h4>Created Recipes</h4>
            <RecipeListSmall fooderId={this.props.data.User.id}/>
            <LogoutButton/>
          </Col>
        </Row>
      </div>
    )
  }
}

const withUser = graphql(FooderService.User,
  { options: (ownProps) => ({
    variables: {
      id: ownProps.match.params.id
    },
    fetchPolicy: 'network-only'
  })}
  )(FooderDetails)

export default graphql(FooderService.updateProfile)(withUser)