import React, { Component } from 'react'
import { Media } from 'reactstrap'

class FeedItem extends Component {
  render () {
    return (
      <div>
        <Media>
          <Media left top href="#">
            <Media object src={require('./concentrism.png')} alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>
              Top aligned media
            </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
      </div>
    )
  }
}

export default FeedItem