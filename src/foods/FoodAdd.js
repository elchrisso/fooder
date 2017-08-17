import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

class FoodAdd extends Component {
  constructor () {
    super ()
    this.state = {
      name: '',
      description: ''
    }
  }
  render () {
    return (
      <div>
        <Form onSubmit={console.log("Submitted!")}>
          <FormGroup>
            <Label for="food-name">Food Name</Label>
            <Input id="food-name" type="text" onChange={(evt) => this.setState({ name: evt.target.value })}/>
          </FormGroup>
          <FormGroup>
            <Label for="food-description">Food Description</Label>
            <Input id="food-description" type="textarea" onChange={(evt) => this.setState({ description: evt.target.value })}/>
          </FormGroup>
          <Button type="submit" color="success">Create Food</Button>
        </Form>
      </div>
    )
  }
}

export default FoodAdd