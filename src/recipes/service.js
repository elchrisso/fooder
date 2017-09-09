import { gql } from 'react-apollo'

class recipesService {
  allRecipes = gql`
    query {
      allRecipes {
        id
        name
        description
        cookTime
        User {
          profile {
            fullName
          }
        }
      }
    }
  `

  Recipe = gql`
    query ($id: Int!) {
      Recipe (id: $id) {
        id
        name
        User {
          profile {
            fullName
          }
        }
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
    mutation ($name: String!, $createdByUserId: Int! $description: String!, $cookTime: Int!, $foodIds: [Int!]!) {
      createRecipe (name: $name, createdByUserId: $createdByUserId, description: $description, cookTime: $cookTime, foodIds: $foodIds) {
        id
      }
    }
  `

  updateRecipe = gql`
    mutation ($id: Int!, $name: String, $description: String, $cookTime: Int) {
      updateRecipe (id: $id, name: $name, description: $description, cookTime: $cookTime) {
        id
      }
    }
  `
}

export default new recipesService()