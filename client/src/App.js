import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Events from './components/Events';
import Navbar from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Event from './components/Event';
import EditEvent from './components/EditEvent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    }
    this.findEvent = this.findEvent.bind(this);
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
    console.log(id)
    console.log(this.state.events[0].id)
    const event = (this.state.events).filter(t => (t.id === parseInt(id, 10)));
    console.log(event)
    return event[0]
  }

  componentDidMount() {
    this.fetchEvents();
  }

  render() {
    console.log(this.state.events)
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path={`/api/events/:id`} component={(props) => (
            <EditEvent
              {...props}
              event={this.findEvent(props.match.params.id)}
              // onSubmit={this.updateEven t.bind(this)}
            />
          )}
        />
          <Route exact path='/api/events' component={(props) => (
              <Events
                {...props}
                events={this.state.events}
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
