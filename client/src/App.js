import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import jwt from 'jwt-js';
import Events from './components/Events';
import Navbar from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import EditEvent from './components/EditEvent';
import Event from './components/Event';
import LoginForm from './components/LoginForm';
import CreateEvent from './components/CreateEvent';
import EventForm from './components/EventForm';
import RegisterForm from './components/RegisterForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      currentUser: null
    }
    this.findEvent = this.findEvent.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
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
    const event = (this.state.events).filter(t => (t.id === parseInt(id, 10)));
    return event[0]
  }

  createEvent(event) {
    fetch('/api/events/new', {
      method: 'POST',
      body: JSON.stringify(event),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(resBody => {
      this.setState((prevState, props) => {
        return {
          events: prevState.event.concat(resBody.data)
        }
      })
    })
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

  deleteEvent(id) {
    fetch(`/api/events/${id}`, {
      method: 'DELETE'
    })
    .then(resp => {
      if (!resp.ok) throw new Error(resp.statusMessage);
      return resp.json();
    })
    .then(respBody => {
      this.setState((prevState, props) => {
        return {
          events: prevState.events.filter(event => event.id !== id)
        }
      })
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
        console.log('logged in with creds!', creds);
        console.log('WARNING CHECK!!!!: ', this.state.currentUser)
      })
  }


  registerRequest(creds) {
    console.log('trying to register with creds', creds);
    fetch('/api/auth/register', {
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
        console.log('registered with creds!', creds);
      })
  }

  handleLogin(creds) {
    this.loginRequest(creds);
  }

  handleRegister(creds) {
    this.registerRequest(creds);
  }

  // handleSubmit(event) {
  //   this.createEvent(event);
  // }

  handleDelete(id) {
    this.deleteEvent(id);
    window.location.reload();
    // this.props.history.push(`/api/events`);
  }

  // handleEdit(event, id) {
  //   this.updateEvent(event, id);
  // }
  handleLogout() {
    this.setState({currentUser: null});
    console.log("handle logout connection works");
  }

  componentDidMount() {
    this.fetchEvents();
    this.checkToken();
  }


  render() {
    console.log(this.state.currentUser)
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/api/events/new'
          component={() => (
            <CreateEvent
              onSubmit={this.createEvent.bind(this)}
              user={this.state.currentUser}

            />
            )}
          />
          <Route exact path='/api/events/:id/edit' component={(props) => (
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
              del={() => this.handleDelete(props.match.params.id)}
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
                handleLogOut={this.handleLogout}
                currentUser={this.state.currentUser}
            />
          )} />
          <Route exact path='/api/auth/register' component={(props) => (
            <RegisterForm
              {...props}
                handleRegister={this.handleRegister}
            />
          )} />
        <Route path='/' component={(props) => (
          <Home
            {...props}
            name={this.state.currentUser}
          />
        )} />

        </Switch>
        <Footer />

      </div>
    );
  }
}

export default App;
