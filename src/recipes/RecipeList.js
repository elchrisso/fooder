import React, { Component } from 'react'
import { CardGroup } from 'reactstrap'
import { graphql } from 'react-apollo'

import RecipeCard from '../recipes/RecipeCard'
import './Recipes.css'

import recipesService from './service'

class RecipesList extends Component {
  render () {
    let recipes = null

    if (this.props.data.loading) {
      return <h1>Loading recipes...</h1>
    }

    if (this.props.data.allRecipes) {
      recipes = this.props.data.allRecipes
    }

    return (
      <div>
        <CardGroup>
          {recipes.map((recipe) => {
            return <RecipeCard recipeName={recipe.name} recipeDescription={recipe.description} recipeId={recipe.id}/>
          })}
        </CardGroup>
      </div>
    )
  }
}

const withRecipeQuery = graphql(recipesService.allRecipes, {options: { fetchPolicy: 'network-only' }})(RecipesList)

export default withRecipeQuery