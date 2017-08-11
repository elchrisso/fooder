import React, { Component } from 'react'
import { CardGroup } from 'reactstrap'

import './Food.css'
import FoodItem from './FoodItem'

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
            return <FoodItem foodName={item.name} foodDescription={item.description}/>
          })}
        </CardGroup>
      </div>
    )
  }
}

export default FoodList