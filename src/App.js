import React, { Component } from 'react';
import './App.css';
import NavBar from './component/NavBar'
import About from './component/About'
import NewChef from './component/NewChef';
import NewRecipe from './component/NewRecipe';
import ChefContainer from './container/ChefContainer';
import RecipeContainer from './container/RecipeContainer'
import { Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchChefs } from './action/chefs';
import { fetchRecipes } from './action/recipes';


class App extends Component {

  componentDidMount() {
   
    this.props.fetchChefs()
    this.props.fetchRecipes()
  }

  render() {
    return (
     <div className="App">
      <NavBar />
        <Switch>
          <Route path="/chefs" component={ChefContainer} />
          <Route exact path="/chefs/new" component={NewChef} />       
          <Route path="/about" component={About} /> 
          <Route path="/recipes" component={RecipeContainer} />      
          <Route exact path="recipes/new" component={NewRecipe} />     
        </Switch>
     </div>

    );
  }
}

export default connect(null, {fetchChefs, fetchRecipes})(App);