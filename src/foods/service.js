import { gql } from 'react-apollo'

class foodsService {
  allFoods = gql`
    query {
      allFoods {
        name
        description
      }
    }
  `
}

export default new foodsService()