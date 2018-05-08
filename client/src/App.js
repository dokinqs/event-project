import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Events from './components/Events';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    }
  }

  fetchEvents() {
    fetch('/event')
      .then(resp => {
        if (!resp.ok) {
          throw Error('oops: ', resp.message);
        }

        return resp.json();
      }).then(data => this.setState ({
          events: data.data
      })).catch(err => console.log(`error: ${err}`))
  }

  componentDidMount() {
    this.fetchEvents();
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/event" component={Events} />
      </div>
    );
  }
}

export default App;
