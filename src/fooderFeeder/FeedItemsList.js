import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Media } from 'reactstrap'

import './FooderFeed.css'
import feederService from './service'

class FeedItemsList extends Component {
  render () {
    let feedItems = null

    if (this.props.data.loading) {
      return <h1>Loading news...</h1>
    }

    if (this.props.data.allFeedItems) {}
    feedItems = this.props.data.allFeedItems

    return (
      <div>
        <h3>fooder feeder</h3>
        {feedItems.map((feedItem) => {
          return (
            <Media>
              <Media left>
                <Media object src={require('./concentrism.png')}/>
              </Media>
              <Media body>
                <Media heading className="comment-card">{feedItem.title}</Media>
                <Media>{feedItem.description}</Media>
              </Media>
            </Media>)
          })}
      </div>)
  }
}

const withFeedItemsQuery = graphql(feederService.allFeedItems, {options: {fetchPolicy: 'network-only'}})(FeedItemsList)

export default withFeedItemsQuery