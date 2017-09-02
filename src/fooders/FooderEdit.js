import React, { Component } from 'react'
import { Button, Row, Col, Label, Form, FormGroup, Input } from 'reactstrap'

class FooderEdit extends Component {

  handleSubmitAccountEdits = () => {
    alert("editing your account...")
  }

  handleLogout = () => {
    alert("Loggin out yo!")
  }

  render () {
    return (
      <div>
        <Row>
          <Col className="col-9">
            <Form onSubmit={this.handleSubmitAccountEdits}>
              <FormGroup>
                <Label to="name">Name</Label>
                <Input/>
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

export default FooderEdit