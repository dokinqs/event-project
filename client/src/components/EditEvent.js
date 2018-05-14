import React, { Component } from 'react';
import EventForm from './EventForm';

export default class EditEvent extends Component {
  render() {
    console.log(this.props.event);
    // const { event, text, id, img_url} = this.props.event
    return (
      <div>
        <h1>EditEvent # {this.props.event.id}</h1>
        <EventForm event={this.props.event} id='edit'
        func={this.props.onSubmit}
        />
      </div>
    )
  }
}
