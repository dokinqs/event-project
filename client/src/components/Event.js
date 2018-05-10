import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class EditEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: Object.assign({
        event: '',
        text: ''
      }, props.event)
    }
  }
  //test if the update event works
editEvent(id) {
  this.props.history.push(`/api/events/${id}`);
}
//this will be accessed with the onClick event on EditEvent.js

  render() {
    console.log('this is editevent', this.props.event)
    const { event, text, id } = this.state.event
    return (
      <div>
        <h3>Edit Event: {id}</h3>
        <p>{event}</p>
        <p>{text}</p>
        <Link to={`/api/event/${id}/edit`}><button>Edit Event</button></Link>
      </div>
    )
  }
}
