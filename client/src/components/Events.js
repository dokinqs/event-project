import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class Events extends Component {

  render() {
    console.log(this.props.events);
    return (
      <div>
      <h2>This Is Events!</h2>
      {this.props.events.map(event => (
        <div key={event.id} className='event-list'>
          <Link to ={`events/${event.id}`}>{event.id}</Link>
          <p>{event.event}</p>
          <p>{event.text}</p>
        </div>
      ))}
    </div>
    )
  }
}

export default Events;
