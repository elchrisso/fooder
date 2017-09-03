import React, { Component } from 'react'
import { Button, Row, Col, Label, Form, FormGroup, Input } from 'reactstrap'
import { graphql } from 'react-apollo'

import FooderService from './service'

class FooderEdit extends Component {
  constructor() {
    super()
    this.state = {
      fullName: ''
    }
  }

  handleSubmitAccountEdits = (evt) => {
    evt.preventDefault()
    this.props.mutate({
      variables: {
        id: this.props.data.User.id,
        ...this.state
      }
    }).then(() => {
      alert('Account information edited!')
    }).catch((err) => {
      alert(err)
    })
  }

  handleLogout = () => {
    alert("Loggin out yo!")
  }

  render () {
    if (this.props.data.loading) {
      return (<p>loading...</p>)
    }
    return (
      <div>
        <Row>
          <Col className="col-9">
            <Form onSubmit={this.handleSubmitAccountEdits}>
              <FormGroup>
                <Label to="fullName">Name</Label>
                <Input type="text" id="fullName" defaultValue={this.props.data.User.profile.fullName} onChange={(evt) => this.setState({ fullName: evt.target.value }) }/>
              </FormGroup>
              <Button color="success">Submit Changes</Button>
            </Form>
          </Col>
          <Col className="col-3">
            <Form onSubmit={this.handleLogout}>
              <Button type="submit" color="danger">Log Out</Button>
            </Form>
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
    }
  })}
  )(FooderEdit)

export default graphql(FooderService.updateProfile)(withUser)