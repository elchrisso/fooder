import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { graphql } from 'react-apollo'

import foodsService from './service'

class FoodAdd extends Component {
  constructor () {
    super ()
    this.state = {
      name: '',
      description: ''
    }
  }

  handleAddFood = (evt) => {
    evt.preventDefault()
    this.props.mutate({
      variables: {
        name: this.state.name,
        description: this.state.description
      }
    }).then(() => {
      alert("Food Added!")
    }).catch(() => {
      alert("Looks like that food already exists!  You can either use the one that already exists, or else create a food with a different name.")
    })
  }

  render () {
    return (
      <div>
        <Form onSubmit={this.handleAddFood}>
          <FormGroup>
            <Label for="food-name">Food Name</Label>
            <Input id="food-name" type="text" onChange={(evt) => this.setState({ name: evt.target.value })}/>
          </FormGroup>
          <FormGroup>
            <Label for="food-description">Food Description</Label>
            <Input id="food-description" type="textarea" onChange={(evt) => this.setState({ description: evt.target.value })}/>
          </FormGroup>
          <Button type="submit" id="add-food-button" color="success">Create Food</Button>
        </Form>
      </div>
    )
  }
}

export default graphql(foodsService.createFood)(FoodAdd)