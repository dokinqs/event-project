import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Events extends Component {
  render() {
    console.log(this.props.events);
    return (
      // clicking inside an event goes to its single page
      <div>
        <h2>EVENTS LIST</h2>
        {this.props.events.map(event => (
          <Link to ={`events/${event.id}`}>
            <div key={event.id} className='event-list'>
              Event # {event.id}
              <p>{event.event}</p>
              <p>{event.text}</p>
              <img src={event.img_url} alt="img url" />
            </div>
          </Link>
        ))}
      </div>
    )
  }
}