import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import FooderHeader from '../fooderNavs/FooderHeader'
import FooderFooter from '../fooderNavs/FooderFooter'
import FooderFeed from '../fooderFeeder/FooderFeed'
import FoodList from '../foods/FoodList'
import FoodAdd from '../foods/FoodAdd'
import FoodDetails from '../foods/FoodDetails'
import FoodEdit from '../foods/FoodDetails'
import RecipeList from '../recipes/RecipeList'
import RecipeDetails from '../recipes/RecipeDetails'
import RecipeAdd from '../recipes/RecipeAdd'
import RecipeEdit from '../recipes/RecipeEdit'

import Login from '../auth/Login'

import FooderAdd from '../fooders/FooderAdd'
import FooderEdit from '../fooders/FooderEdit'

class App extends Component {

  add = (a, b) => {
    const sum = a + b
    return sum
  }

  handleClick = () => {
  this.props.onButtonClick()
}

  render() {

    return (
      <div>
        <FooderHeader/>
        <div className="App">
          <Switch className="App-content">

            <Route exact path="/" component={FooderFeed}/>

            <Route exact path="/foods/add" component={FoodAdd}/>
            <Route exact path="/foods/details/:id" component={FoodDetails}/>
            <Route exact path="/foods/edit/:id" component={FoodEdit}/>
            <Route path="/foods" component={FoodList}/>

            <Route exact path="/recipes/add" component={RecipeAdd}/>
            <Route exact path="/recipes/details/:id" component={RecipeDetails}/>
            <Route exact path="/recipes/edit/:id" component={RecipeEdit}/>
            <Route path="/recipes" component={RecipeList}/>

            <Route exact path="/fooders/login" component={Login}/>
            <Route exact path="/fooders/add" component={FooderAdd}/>
            <Route exact path="/fooders/edit/:id" component={FooderEdit}/>

          </Switch>

          {/*<button onClick={this.handleClick}>click me</button>*/}

        </div>
        <FooderFooter/>
      </div>
    );
  }
}

export default App;
