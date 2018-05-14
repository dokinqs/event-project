import React, { Component } from 'react';
import EventForm from './EventForm';

export default class CreateEvent extends Component {
	render() {
		return (
			<div>
				<h2 class="green">Create an Event</h2>
				<EventForm
					id='create'
					func={this.props.onSubmit}
				/>
			</div>
		)
	}
}
	