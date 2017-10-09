import { gql } from 'react-apollo'

class feederService {
  allFeedItems = gql`
    query {
      allFeedItems {
        id
        createdAt
        userId
        title
        description
      }
    }
  `
}

export default new feederService()