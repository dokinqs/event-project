import React, { Component } from 'react';

export default class EditEvent extends Component {
  render() {
    console.log('this is editevent', this.props.event)
    return (
      <div>
        <h3>Edit Event</h3>
        <p>{this.props.event.id}</p>
        <p>{this.props.event.event}</p>
        <p>{this.props.event.text}</p>

      </div>
    )
  }
}
