import React, { Component } from 'react'
import { Row, Col, ListGroupItem, Badge } from 'reactstrap'
import { graphql } from 'react-apollo'
import { NavLink } from 'react-router-dom'

import recipesService from './service'

import './Recipes.css'

class RecipeDetails extends Component {
  render () {
    if (this.props.data.loading) {
      return <h1>Loading Recipes...</h1>
    }

    return (
      <div>
        <Row>
          <Col className="col-9">
            <h1>{this.props.data.Recipe.name}</h1>
            <p>Time to prepare: {this.props.data.Recipe.cookTime} minutes.</p>
            <p>Created by: {this.props.data.Recipe.User.profile.fullName}</p>
            <p>{this.props.data.Recipe.description}</p>
            {this.props.data.Recipe.Foods.map((food) => {
              return (
                <ListGroupItem className="justify-content-between">
                  <NavLink className="nav-link" to={`/foods/details/${food.id}`}>{food.name}</NavLink>
                  <Badge pill>14</Badge>
                </ListGroupItem>
              )
            })}
            <NavLink className="nav-link" to={`/recipes/edit/${this.props.data.Recipe.id}`}>Edit {this.props.data.Recipe.name}</NavLink>
          </Col>
          <Col className="col-3">
            <img src={require('./veg-curry.jpeg')} className="foodImage-medium"/>
          </Col>
        </Row>
      </div>
    )
  }
}

const withFetchedRecipe = graphql(recipesService.Recipe, {
  options: (ownProps) => ({
    variables: { id: ownProps.match.params.id },
    fetchPolicy: 'network-only'
  })
})(RecipeDetails)

export default withFetchedRecipe