import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Events from './components/Events';
import Navbar from './components/Header';
import Home from './components/Home'
import Footer from './components/Footer'


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
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/events' component={(props) => (
              <Events
                {...props}
                events={this.state.events}
              />
          )} />

        </Switch>
        <Footer/>

      </div>
    );
  }
}

export default App;
