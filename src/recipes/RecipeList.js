import React, { Component } from 'react'
import { CardGroup } from 'reactstrap'

import RecipeCard from '../recipes/RecipeCard'
import './Recipes.css'

class RecipesList extends Component {
  render () {
    return (
      <div className="Recipe">
        <CardGroup>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
        </CardGroup>
      </div>
    )
  }
}

export default RecipesList