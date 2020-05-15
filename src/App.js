import React, { Component } from 'react'
import './App.css';
import Search from './component/Search';


export default class App extends Component {
  render() {
    return (
      <div>
        <h1>This should Render</h1>
        <Search />
      </div>
    )
  }
}

