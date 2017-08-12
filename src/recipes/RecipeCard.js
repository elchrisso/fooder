import React, { Component } from 'react'
import { Card, CardImg, CardBlock, CardSubtitle, Button, CardTitle, CardText } from 'reactstrap'
import { NavLink } from 'react-router-dom'

import './Recipes.css'

class RecipeCard extends Component {
  render () {
    return (
      <div className="Recipe-Card">
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBlock>
            <CardTitle>{this.props.foodName}</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>{this.props.foodDescription}</CardText>
            <Button color="success">
              <NavLink to="/recipedetails">Recipe Details</NavLink>
            </Button>
          </CardBlock>
        </Card>
      </div>
    )
  }
}

export default RecipeCard