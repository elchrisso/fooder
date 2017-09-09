import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button, InputGroup, Row, Col } from 'reactstrap'
import { graphql } from 'react-apollo'

import recipesService from './service'
import FoodersService from '../fooders/service'

class RecipeAdd extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      description: '',
      cookTime: '',
      newIngredientId: '',
      userId: '',
      foodIds: []
    }
  }

  componentWillMount() {
    this.setState({ userId: this.props.match.params.id })
  }

  handleAddIngredient = (evt) => {
    this.setState({
      foodIds: [
        ...this.state.foodIds,
        this.state.newIngredientId
      ]
    })
  }

  handleAddRecipe = (evt) => {
    //this.setState({ userId: this.props.match.params.id })
    evt.preventDefault()
    console.log(this.props.match.params.id)
    console.log(this.state.userId)
    this.props.mutate({
      variables: {
        name: this.state.name,
        description: this.state.description,
        userId: this.state.userId,
        cookTime: this.state.cookTime,
        foodIds: this.state.foodIds
      }
    })
  }

  render () {
    if (this.props.data.loading) {
      return (<p>loading...</p>)
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-8">
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
                <Button type="submit" color="success">Add Recipe</Button>
              </FormGroup>
            </Form>
          </div>
          <div className="col-4">
            <FormGroup>
              <Label for="food-to-add">Type an ingredient's Id and click Add</Label>
              <Input id="food-to-add" type="number" onChange={(evt) => this.setState({ newIngredientId: evt.target.value }) }/>
              <Button type="button" onClick={this.handleAddIngredient}>Add It</Button>
            </FormGroup>
          </div>
        </div>
      </div>
    )
  }
}

const withUser = graphql(FoodersService.User,
  { options: (ownProps) => ({
    variables: {
      id: ownProps.match.params.id
    },
    fetchPolicy: 'network-only'
  })})(RecipeAdd)

export default graphql(recipesService.addRecipe)(withUser)