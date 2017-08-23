import { gql } from 'react-apollo'

class foodsService {
  allFoods = gql`
    query {
      allFoods {
        id
        name
        description
      }
    }
  `
  Food = gql`
    query ($id: Int!) {
      Food (id: $id) {
        id
        name
        description
        Recipes {
          name
        }
      }
    }
  `

  createFood = gql`
    mutation ($name: String!, $description: String!) {
      createFood (name: $name, description: $description) {
        id
        name
        description
      }
    }
  `
}

export default new foodsService()