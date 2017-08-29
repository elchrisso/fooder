import React, { Component } from 'react'
import FeedItem from './FeedItem'

import './FooderFeed.css'

class FooderFeed extends Component {
  render () {
    return (
      <div className="Feed">
        <FeedItem/>
        <FeedItem/>
        <FeedItem/>
        <FeedItem/>
        <FeedItem/>
        <FeedItem/>
        <FeedItem/>
      </div>

    )
  }
}

export default FooderFeed