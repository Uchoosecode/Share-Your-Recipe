import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './component/NavBar'
import Home from './component/Home'
import About from './component/About'
import NewChef from './component/NewChef';
import ChefContainer from './container/ChefContainer';
import RecipeContainer from './container/RecipeContainer'

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
          <Route exact path="/chefs/new" component={NewChef} />       
          <Route path="/chefs" component={ChefContainer} />
          <Route path="/about" component={About} /> 
          <Route path="/" component={Home} />     
          <Route path="/recipes" component={RecipeContainer} />      
        </Switch>
     </div>

    );
  }
}

export default connect(null, {fetchChefs, fetchRecipes})(App);