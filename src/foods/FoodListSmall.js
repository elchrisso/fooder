import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import FoodsService from './service'

class FoodListSmall extends Component {
  render () {
    if (this.props.data.loading) {
      return (
        <p>loading list of foods...</p>
      )
    }
    return (
      <ul>
        List of Existing Foods:
        {this.props.data.allFoods.map((food) => {
          return (
            <li>{food.name} , {food.id}</li>
          )
        })}
      </ul>
    )
  }
}

export default graphql(FoodsService.allFoods)(FoodListSmall)