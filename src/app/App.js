import React, { Component } from 'react';
import '../App.css';
import AppHeader from '../header/AppHeader'
import { Switch, Route } from 'react-router-dom'

import FoodList from '../food/FoodList'
import Login from '../auth/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <Switch>
          <Route exact path="/" component={FoodList}/>
          <Route exact path="/login" component={Login}/>
        </Switch>
      </div>
    );
  }
}

export default App;
