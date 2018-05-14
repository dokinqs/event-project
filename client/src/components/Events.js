import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class Events extends Component {  //this component shows the list of events

  render() {
    return (

      <div>
        <h2>This Is Events!</h2>
        {this.props.events.map(event => (

          <div className='event-list'>

              <Link to ={`events/${event.id}`}><div key={event.id} >
                  {event.id}
                  <p>{event.event}</p>
                  <p>{event.text}</p>
                  <p>{event.img_url}</p>
                </div>
              </Link>

            <button>like</button>

          </div>  //make the whole section of each event clickable
      ))}
    </div>
    )
  }
}

export default Events;
