import React, { Component } from 'react';
import EventForm from './EventForm';

export default class CreateEvent extends Component {
		render(){
			const loggedIn = this.props.user;
			const logConfirm = loggedIn ? (

				<EventForm
					id='create'
					func={this.props.onSubmit}
					user={this.props.user} />
			) : (<h1>Please log in!</h1>);
			//if the user is logged in the form shows up when when clicking on "new" to create an event othersise it asks the user to log in

		return(
			<div>
				{logConfirm}
			</div>
		)
	}
}
	