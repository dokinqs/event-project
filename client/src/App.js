import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import jwt from 'jwt-js';
import Events from './components/Events';
import Navbar from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import EditEvent from './components/EditEvent';
import Event from './components/Event';
import LoginForm from './components/LoginForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      currentUser: null
    }
    this.findEvent = this.findEvent.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
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
      body: JSON.stringify(event)
    };
    const URL = `/api/events/${event.id}`;
    fetch(URL, options).then(resp => {
      if (!resp.ok) throw new Error(resp.statusMessage);
      return resp.json();
    })
  }

  checkToken() {
    const authToken = localStorage.getItem('authToken');
    fetch('/api/auth', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      }
    })
    .then(resp => {
      if (!resp.ok) throw new Error(resp.mesage);
      return resp.json();
    })
    .then(respBody => {
      this.setState({
        currentUser: respBody.user
      })
    })
    .catch(err => {
      console.log('not logged in');
      localStorage.removeItem('authToken');
      this.setState({
        currentUser: null
      })
    })
  }

  loginRequest(creds) {
    console.log('trying to log in with creds', creds);
    fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(creds),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(resp => {
        if (!resp.ok) throw new Error(resp.statusMessage);
        return resp.json();
      })
      .then(respBody => {
        console.log(respBody);
        localStorage.setItem('authToken', respBody.token);
        this.setState({
          currentUser: jwt.decodeToken(respBody.token).payload
        })
      })
  }
  
  handleLogin(creds) {
    this.loginRequest(creds);
  }

  // handleSubmit(quote) {
  //   this.createEvent(event);
  // }

  // handleDelete(id) {
  //   this.deleteEvent(id);
  // }

  // handleEdit(event, id) {
  //   this.updateEvent(quote, id);
  // }

  componentDidMount() {
    this.fetchEvents();
    this.checkToken();
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
          <Route exact path='/api/auth/login' component={(props) => ( 
            <LoginForm
              {...props}
                handleLogin={this.handleLogin}
            />
          )} />
        <Route path='/' component={Home}/>

        </Switch>
        <Footer />

      </div>
    );
  }
}

export default App;
