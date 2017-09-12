import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import RecipesService from './service'

class RecipeListSmall extends Component {

  render () {
    let recipes = null

    if (this.props.data.loading) {
      return <p>Loading list of recipes...</p>
    }

    if (this.props.data.allRecipes) {
      recipes = this.props.data.allRecipes
    }

    return (
      <div>
        {recipes.map((recipe, key) => {
          return (
            <p key={key}>{recipe.name}, Time to prepare: {recipe.cookTime}</p>
          )
        })}
      </div>

    )
  }
}

const withUserRecipes = graphql(RecipesService.allRecipes)(RecipeListSmall)
export default withUserRecipes