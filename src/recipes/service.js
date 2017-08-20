import { gql } from 'react-apollo'

class recipesService {
  allRecipes = gql`
    query {
      allRecipes {
        id
        name
        description
        cookTime
      }
    }
  `

  Recipe = gql`
    query ($id: Int!) {
      Recipe (id: $id) {
        id
        name
        description
        cookTime
      }
    }
  `
}

export default new recipesService()