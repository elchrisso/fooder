import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import PropTypes from 'prop-types'

import RecipesService from './service'

class RecipeListSmall extends Component {

  render () {
    let recipes = null

    if (this.props.data.loading) {
      return <p>Loading list of recipes...</p>
    }

    if (this.props.data.getRecipesByUserId) {
      recipes = this.props.data.getRecipesByUserId
    }

    return (
      <div>
        {recipes.map((recipe, key) => {
          return (<p key={key}>{recipe.name}, Time to prepare: {recipe.cookTime}</p>)
        })}
      </div>

    )
  }
}

RecipeListSmall.propTypes = {
  fooderId: PropTypes.number.isRequired
}

const withUserRecipes = graphql(RecipesService.getRecipesByUserId , {options: (ownProps) => ({
  variables: { id: ownProps.fooderId },
  fetchPolicy: 'network-only'
})})(RecipeListSmall)
export default withUserRecipes