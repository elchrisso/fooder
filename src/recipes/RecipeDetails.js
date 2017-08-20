import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import { graphql } from 'react-apollo'

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
            <p>{this.props.data.Recipe.description}</p>
            {/*<ul>*/}
              {/*this is where the list of foods goes*/}
            {/*</ul>*/}
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