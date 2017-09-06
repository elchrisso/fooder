import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button, InputGroup } from 'reactstrap'
import { graphql } from 'react-apollo'

import recipesService from './service'

class RecipeAdd extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      description: '',
      cookTime: '',
      newIngredientId: '',
      foodIds: []
    }
  }

  handleAddIngredient = (evt) => {
    this.setState({
      foodIds: [...this.state.foodIds, this.state.newIngredientId]
    })
  }

  handleAddRecipe = (evt) => {
    evt.preventDefault()
    this.props.mutate({
      variables: {
        name: this.state.name,
        description: this.state.description,
        userId: '',
        cookTime: this.state.cookTime,
        foodIds: this.state.foodIds
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
          <Form onSubmit={this.handleAddIngredient}>
            <InputGroup>
              <Input id="food-to-add" type="number" onChange={(evt) => this.setState({ newIngredientId: evt.target.value }) }/>
              <Button type="submit">Add It</Button>
            </InputGroup>
          </Form>
          <FormGroup>
            <Button color="success">Add Recipe</Button>
          </FormGroup>
        </Form>
      </div>

    )
  }
}

export default graphql(recipesService.addRecipe)(RecipeAdd)