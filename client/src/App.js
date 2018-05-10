import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Events from './components/Events';
import Navbar from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import EditEvent from './components/EditEvent';
import Event from './components/Event';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    }
    this.findEvent = this.findEvent.bind(this);
  }

  componentDidMount() {
    this.fetchEvents();
  }

  fetchEvents() {
    fetch('/api/events')
      .then(resp => {
        if (!resp.ok) {
          throw Error('oops: ', resp.message);
        }

        return resp.json();
      }).then(data => this.setState ({
          events: data.data
      })).catch(err => console.log(`error: ${err}`))
  }

  findEvent(id) {
    // id = parseInt(id, 10)
    // console.log(this.state.events[0].id)
    const event = (this.state.events).filter(t => (t.id === parseInt(id, 10)));
    console.log(event)
    return event[0]
  }

  updateEvent(event) {
    const options = {
      method: 'PUT',
      headers: {
        'Accept': 'application/jason',
        'Content-Type': 'application/json'
      },
      body: JSON.stringfy(event)
    };
    const URL = `/api/events/${event.id}`;
    fetch(URL, options).then(resp => {
      if (!resp.ok) throw new Error(resp.statusMessage);
      return resp.json();
    })
  }

  render() {
    console.log(this.state.events)
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/api/event/:id/edit' component={(props) => (
            <EditEvent
              {...props}
              event={this.findEvent(props.match.params.id)}
              onSubmit={this.updateEvent.bind(this)}
            />
          )} />
          <Route path='/api/events/:id' component={(props) => (
            <Event
              {...props}
              event={this.findEvent(props.match.params.id)}
              // onSubmit={this.updateEvent.bind(this)}
            />
          )}
        />
          <Route exact path='/api/events' component={(props) => (
              <Events
                {...props}
                events={this.state.events}
              />
          )} />
          <Route exact path='/api/auth/login' component={LoginForm} />
        <Route path='/' component={Home}/>

        </Switch>
        <Footer />

      </div>
    );
  }
}

export default App;
