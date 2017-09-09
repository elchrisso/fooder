import React, { Component } from 'react'
import { Card, CardImg, CardBlock, CardSubtitle, Button, CardTitle, CardText } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import './Recipes.css'

class RecipeCard extends Component {
  render () {
    return (
      <div className="Recipe-Card">
        <Card>
          <CardImg top width="100%" src={require('./veg-curry.jpeg')} alt="Card image cap" />
          <CardBlock>
            <CardTitle>{this.props.recipeName}</CardTitle>
            <CardSubtitle>{this.props.recipeCreator}</CardSubtitle>
            <CardText/>
            <CardText>{this.props.recipeDescription}</CardText>
            <Button color="success">
              <NavLink to={`/recipes/details/${this.props.recipeId}`}>Recipe Details</NavLink>
            </Button>
          </CardBlock>
        </Card>
      </div>
    )
  }
}

RecipeCard.propTypes = {
  recipeId: PropTypes.number.isRequired,
  recipeName: PropTypes.string.isRequired,
  recipeDescription: PropTypes.string.isRequired,
  recipeCreator: PropTypes.string.isRequired,
  recipeCookTime: PropTypes.number.isRequired
}

export default RecipeCard