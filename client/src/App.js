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
    console.log(this.state.events)
    return (
      <div className="App">
        <Events events={this.state.events} />
      </div>
    );
  }
}

export default App;
