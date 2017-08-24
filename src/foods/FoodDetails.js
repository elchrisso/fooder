import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Badge, Row, Col } from 'reactstrap'
import { graphql } from 'react-apollo'
import { NavLink } from 'react-router-dom'

import foodsService from './service'

import './Foods.css'

class FoodDetails extends Component {
  render () {
    if (this.props.data.loading) {
      return <h1>Loading foods</h1>
    }

    return (
      <div className="foodDetails-container">
        <Row>
          <Col className="col-9">
            <h1>{this.props.data.Food.name}</h1>
            <p>{this.props.data.Food.description}</p>
            <p>season</p>
            <p>nutritional info</p>
            <p>...other...</p>
          </Col>
          <Col className="col-3">
            <img src={require('./anApple.jpg')} className="foodImage-medium"/>
          </Col>
        </Row>

        <ListGroup className="Food-recipes-list">
          {this.props.data.Food.Recipes.map((recipe) => {
            return (
              <ListGroupItem className="justify-content-between">
                <NavLink className="nav-link" to={`/recipes/details/${recipe.id}`}>{recipe.name}</NavLink>
                <Badge pill>14</Badge>
              </ListGroupItem>
            )
          })}
        </ListGroup>
      </div>
    )
  }
}

const fetchedFood = graphql(foodsService.Food, {
  options: (ownProps) => ({
    variables: { id: ownProps.match.params.id },
    fetchPolicy: 'network-only'
  })
})(FoodDetails)

export default fetchedFood