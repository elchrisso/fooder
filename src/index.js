import 'bootstrap/dist/css/bootstrap.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'

import './index.css'
import App from './app/App'
import client from './client'
import store from './store'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ApolloProvider>
  , document.getElementById('root')
)
registerServiceWorker();
