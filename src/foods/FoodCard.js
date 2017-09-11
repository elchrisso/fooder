import React, { Component } from 'react'
import  { Card, CardImg, CardBlock, CardSubtitle, Button, CardTitle, CardText } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

class FoodCard extends Component {
  render () {
    return (
      <div className="Food-Card">
        <Card>
          <CardImg top width="100%" src={require('./anApple.jpg')} className="foodImage-medium" alt="Card image cap" />
          <CardBlock>
            <CardTitle>{this.props.foodName}</CardTitle>
            <CardText>{this.props.foodDescription}</CardText>
            <Button color="success">
              <NavLink to={`/foods/details/${this.props.foodId}`}>Food Details</NavLink>
            </Button>
          </CardBlock>
        </Card>
      </div>
    )
  }
}

FoodCard.propTypes = {
  foodId: PropTypes.number.isRequired,
  foodName: PropTypes.string.isRequired,
  foodDescription: PropTypes.string.isRequired
}

export default FoodCard