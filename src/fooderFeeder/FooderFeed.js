import React, { Component } from 'react'
import FeedItem from './FeedItem'

import './FooderFeed.css'
import FeedItemsList from './FeedItemsList'

class FooderFeed extends Component {
  render () {
    return (
      <div className="Feed">
        <FeedItemsList/>
      </div>

    )
  }
}

export default FooderFeed