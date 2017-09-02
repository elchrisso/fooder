import React, { Component } from 'react'
import { CardGroup } from 'reactstrap'
import { graphql } from 'react-apollo'

import './Foods.css'
import FoodCard from './FoodCard'

import foodsService from './service'

class FoodList extends Component {

  render () {
    let foods = null

    if (this.props.data.loading) {
      return <h1>Loading foods</h1>
    }

    if (this.props.data.allFoods) {
      foods = this.props.data.allFoods
    }

    return (
      <div>
        <CardGroup className="foodList-container">
          {foods.map((item) => {
            return <FoodCard foodName={item.name} foodDescription={item.description} foodId={item.id} key={item.id}/>
          })}
        </CardGroup>
      </div>
    )
  }
}

const withFoodQuery = graphql(foodsService.allFoods, {options:
  {fetchPolicy: 'network-only' }})(FoodList)

export default withFoodQuery