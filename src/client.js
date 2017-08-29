import { ApolloClient, createNetworkInterface } from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql'
})

networkInterface.use([
  {
    applyMiddleware (req, next) {
      if (!req.options.headers) {
        req.options.headers = {}
      }

      const token = localStorage.getItem('token')

      req.options.headers.authorization = (token) ? `Bearer ${token}` : null

      next()
    }
  }
])

export default new ApolloClient({
  networkInterface
})