import React, { Component } from 'react';

export default class EditEvent extends Component {
  render() {
    return (
      <div>
        <h3>Edit Event</h3>
				{this.props.event}
      </div>
    )
  }
}
