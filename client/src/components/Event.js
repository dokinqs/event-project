import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class EditEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: Object.assign({
        event: '',
        text: '',
        img_url: ''
      }, props.event)
    }
  }

editEvent(id) {
  this.props.history.push(`/api/events/${id}`);
}
//this will be accessed with the onClick event on EditEvent.js

  render() {
    const { event, text, id, img_url } = this.state.event
    return (
      <div>
        <div className='form text-event'>
          <h3>Edit Event: {id}</h3>
          <img src={img_url} className='img-event'/>
          <p className="text-event">{event}</p>
          <p className="text-event">{text}</p>
        </div>
        <hr />

        <Link to={`/api/events/${id}/edit`}><button className='button'>Edit Event</button></Link>
        <Link to="/api/events"> <button onClick={this.props.del} className='button'> DELETE</button> </Link>
        <hr />
        <br />
      </div>
    )
  }
}
