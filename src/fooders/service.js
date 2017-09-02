import { gql } from 'react-apollo'

class foodersService {
  allUsers = gql`
    query {
      allUsers {
        id
        email
        createdAt
        updatedAt
      }
    }
  `

  User = gql`
    query ($id: Int!) {
      User (id: $id) {
        id
        email
        createdAt
        updatedAt
      }
    }
  `

  createUser = gql`
    mutation ($email: String!, $password: String!, $fullName: String!) {
      createUser (email: $email, password: $password, profile: {
        fullName: $fullName
      }) {
        id
      }
    }
  `
}

export default new foodersService()