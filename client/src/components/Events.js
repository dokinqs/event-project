import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class Events extends Component {

  render() {
    console.log(this.props.events);
    return (
      <div>
      <h2>Welcome Home!</h2>
      {this.props.events.map(event => (
            <div key={event.id}>
              <p>{event.text}</p>
              <p>{event.id}</p>
              <p>{event.event}</p>
            </div>
          ))}
    </div>
    )
  }
}

export default Events;
