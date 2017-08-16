import React, { Component } from 'react'
import { CardGroup } from 'reactstrap'
import { graphql } from 'react-apollo'

import './Foods.css'
import FoodCard from './FoodCard'

import foodsService from './service'

class FoodList extends Component {
  constructor () {
    super ()
    this.state = {
      foodItems: [
        {name: "apple", description: "mmm i like apples"},
        {name: "orange", description: "orange you glad..."},
        {name: "banana", description: "banana chips are the worst"},
        {name: "bread", description: "fancy europeans"},
        {name: "bananas", description: "good for the bananas, bad for the bread"},
        {name: "beer", description: "carbload"},
        {name: "bologna", description: "what a bunch of bologna"}
      ]
    }
  }

  render () {
    return (
      <div className="Food">
        <CardGroup>
          {this.state.foodItems.map((item) => {
            return <FoodCard foodName={item.name} foodDescription={item.description}/>
          })}
        </CardGroup>
      </div>
    )
  }
}

const withFoodQuery = graphql(foodsService.allFoods, {options:
  {fetchPolicy: 'network-only' }})(FoodList)

export default withFoodQuery