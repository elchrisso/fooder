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
        profile {
          fullName
          fullAddress
          phoneNumber
        }
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

  updateProfile = gql`
    mutation ($userId: Int!, $fullName: String, $fullAddress: String, $phoneNumber: String) {
      updateProfile (userId: $userId, fullName: $fullName, fullAddress: $fullAddress, phoneNumber: $phoneNumber) {
        id
        fullName
        fullAddress
        phoneNumber
      }
    }
  `
}

export default new foodersService()