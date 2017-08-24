import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { graphql } from 'react-apollo'

import recipesService from './service'

class RecipeAdd extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      description: '',
      cookTime: '',
      foods: ''
    }
  }

  handleAddRecipe = (evt) => {
    evt.preventDefault()
    this.props.mutate({
      variables: {
        name: this.state.name,
        description: this.state.description,
        cookTime: this.state.cookTime,
        foods: this.state.foods
      }
    })
  }

  render () {
    return (
      <div>
        <Form onSubmit={this.handleAddRecipe}>
          <FormGroup>
            <Label for="recipe-name">Recipe Name</Label>
            <Input id="recipe-name" type="text" onChange={(evt) => this.setState({ name: evt.target.value }) }/>
          </FormGroup>
          <FormGroup>
            <Label for="recipe-description">Recipe Description</Label>
            <Input id="recipe-description" type="textarea" onChange={(evt) => this.setState({ description: evt.target.value }) }/>
          </FormGroup>
          <FormGroup>
            <Label for="cook-time">CookTime in Minutes</Label>
            <Input id="cook-time" type="number" onChange={(evt) => this.setState({ cookTime: evt.target.value }) }/>
          </FormGroup>
          <FormGroup>
            <Label for="required-foods">Required Foods</Label>
            <Input id="required-foods" type="text"/>
          </FormGroup>
          <Button color="success">Add Recipe</Button>
        </Form>
      </div>

    )
  }
}

export default graphql(recipesService.addRecipe)(RecipeAdd)