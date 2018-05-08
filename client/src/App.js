import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <h1>We are Live!!!!</h1>
      </div>
      </Router>
    );
  }
}

export default App;
