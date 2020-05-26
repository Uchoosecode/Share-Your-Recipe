import React, { Component } from 'react';
import './App.css';
import NavBar from './component/NavBar'
import About from './component/About'
import NewChef from './component/NewChef';
import NewRecipe from './component/NewRecipe';
import Chef from './container/ChefContainer';
import { Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchChefs } from './action/chefs';
import { fetchRecipes } from './action/recipes'


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
          <Route path="/about" component={About} />       
        </Switch>
     </div>

    );
  }
}

export default connect(null, { fetchChefs, fetchRecipes})(App);