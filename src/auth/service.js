import { gql } from 'react-apollo'

class AuthService {
  loginUser = gql`
    mutation($email: String!, $password: String!) {
      loginUser(email: $email, password: $password) {
        token
      }
    }
  `

  loggedInUser = gql`
    query {
      loggedInUser {
        id
        profile {
          fullName
        }
      }
    }
  `
}

export default new AuthService()