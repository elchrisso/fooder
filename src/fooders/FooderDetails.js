import React, { Component } from 'react'
import { Button, Row, Col, Label, Form, FormGroup, Input } from 'reactstrap'
import { graphql } from 'react-apollo'

import FooderService from './service'
import { logout } from '../auth/actions'
import LogoutButton from '../auth/LogoutButton'

class FooderDetails extends Component {
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

  handleLogout = () => {
    this.props.dispatch(logout())
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