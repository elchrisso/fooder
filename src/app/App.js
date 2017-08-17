import React, { Component } from 'react';
import './App.css';
import AppHeader from '../header/AppHeader'
import { Switch, Route } from 'react-router-dom'

import FooderFeed from '../fooders/FooderFeed'
import FoodList from '../foods/FoodList'
import FoodAdd from '../foods/FoodAdd'
import RecipeList from '../recipes/RecipeList'
import RecipeDetails from '../recipes/RecipeDetails'
import Login from '../auth/Login'
import FoodDetails from '../foods/FoodDetails'

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader/>
        <div className="App">
          <Switch className="App-content">
            <Route exact path="/" component={FooderFeed}/>
            <Route exact path="/foods/add" component={FoodAdd}/>
            <Route path="/foods" component={FoodList}/>
            <Route exact path="/fooddetails" component={FoodDetails}/>
            <Route exact path="/recipes" component={RecipeList}/>
            <Route exact path="/recipes/details" component={RecipeDetails}/>
            <Route exact path="/login" component={Login}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
