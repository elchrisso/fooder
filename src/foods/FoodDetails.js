import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Badge, Row, Col } from 'reactstrap'
import { graphql } from 'react-apollo'

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

        {/*this will be replaced with components generated from data retrieved by a recipesByIngredient recipesService query*/}
        <ListGroup className="Food-recipes-list">
          <ListGroupItem className="justify-content-between">recipe 1, cooked up by...
            <Badge pill>14</Badge>
          </ListGroupItem>
          <ListGroupItem className="justify-content-between">recipe 2
            <Badge pill>13</Badge>
          </ListGroupItem>
          <ListGroupItem className="justify-content-between">recipe 3
            <Badge pill>3</Badge>
          </ListGroupItem>
          <ListGroupItem className="justify-content-between">recipe 4
            <Badge pill>1</Badge>
          </ListGroupItem>
          <ListGroupItem className="justify-content-between">and so on
            <Badge pill>1</Badge>
          </ListGroupItem>
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