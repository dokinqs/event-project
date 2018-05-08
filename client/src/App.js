import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Events from './components/Events';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Events} />
      </div>
    );
  }
}

export default App;
