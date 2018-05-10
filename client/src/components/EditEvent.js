import React, { Component } from 'react';

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
  render() {
    console.log('this is editevent', this.props.event)
    const { event, text, id } = this.state.event
    return (
      <div>
        <h3>Edit Event: {id}</h3>
        <p>{event}</p>
        <p>{text}</p>

      </div>
    )
  }
}
