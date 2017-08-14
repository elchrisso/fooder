import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Badge } from 'reactstrap'

class FoodDetails extends Component {
  render () {
    return (
      <div>
        <h1>Foodname</h1>
        <p>description of fooditem</p>
        <p>season</p>
        <p>nutritional info</p>
        <p>...other...</p>
        <ListGroup className="Recipe-List">
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

export default FoodDetails