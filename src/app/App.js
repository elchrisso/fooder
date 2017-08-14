import React, { Component } from 'react';
import './App.css';
import AppHeader from '../header/AppHeader'
import { Switch, Route } from 'react-router-dom'

import FooderFeed from '../fooders/FooderFeed'
import FoodList from '../foods/FoodList'
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
            <Route exact path="/foods" component={FoodList}/>
            <Route path="/fooddetails" component={FoodDetails}/>
            <Route exact path="/recipes" component={RecipeList}/>
            <Route exact path="/recipedetails" component={RecipeDetails}/>
            <Route exact path="/login" component={Login}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
