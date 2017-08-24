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
        Foods {
          id
          name
        }
      }
    }
  `

  addRecipe = gql`
    mutation ($name: String!, $description: String!, $cookTime: Int!) {
      createRecipe (name: $name, description: $description, cookTime: $cookTime, foodIds: [1, 2, 9]) {
        id
      }
    }
  `
}

export default new recipesService()