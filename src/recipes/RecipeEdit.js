import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { graphql } from 'react-apollo'

import RecipesService from './service'

class RecipeEdit extends Component {
  constructor () {
    super ()
    this.state = {
      name: '',
      description: '',
      cookTime: '',
      Foods: ''
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.mutate({
      variables: {
        id: this.props.data.Recipe.id,
        ...this.state
      },
      refetchQueries: [{
        query: RecipesService.Recipe
      }]
    }).then(() => {
      alert('Recipe Edited!')
    }).catch((err) => {
      alert(err)
    })
  }

  render () {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="name"/>
            <Input id="name" type="text" onChange={(evt) => this.setState({ name: evt.target.value }) }/>
          </FormGroup>
          <FormGroup>
            <Label for="description"/>
            <Input id="description" type="textarea" onChange={(evt) => this.setState({ description: evt.target.value }) }/>
          </FormGroup>
          <FormGroup>
            <Label for="cookTime">Cook Time (Some Number in Minutes)</Label>
            <Input id="cookTime" type="number" onChange={(evt) => this.setState({ cookTime: evt.target.value }) }/>
          </FormGroup>
          <Button type="submit" color="success">Submit Recipe Changes</Button>
        </Form>
      </div>
    )
  }
}

const withRecipe = graphql(RecipesService.Recipe,
  { options: (ownProps) => ({
    variables: {
      id: ownProps.match.params.id
    }
  })}
)(RecipeEdit)

export default graphql(RecipesService.updateRecipe)(withRecipe)