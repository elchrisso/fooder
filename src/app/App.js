import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import FooderHeader from '../fooderNavs/FooderHeader'
import FooderFooter from '../fooderNavs/FooderFooter'
import FooderFeed from '../fooders/FooderFeed'
import FoodList from '../foods/FoodList'
import FoodAdd from '../foods/FoodAdd'
import RecipeList from '../recipes/RecipeList'
import RecipeDetails from '../recipes/RecipeDetails'
import RecipeAdd from '../recipes/RecipeAdd'
import Login from '../auth/Login'
import FoodDetails from '../foods/FoodDetails'

class App extends Component {
  render() {
    return (
      <div>
        <FooderHeader/>
        <div className="App">
          <Switch className="App-content">
            <Route exact path="/" component={FooderFeed}/>
            <Route exact path="/foods/add" component={FoodAdd}/>
            <Route exact path="/foods/details" component={FoodDetails}/>
            <Route path="/foods" component={FoodList}/>

            <Route exact path="/recipes/add" component={RecipeAdd}/>
            <Route exact path="/recipes/details" component={RecipeDetails}/>
            <Route path="/recipes" component={RecipeList}/>
            <Route exact path="/login" component={Login}/>
          </Switch>
        </div>
        <FooderFooter/>
      </div>
    );
  }
}

export default App;
