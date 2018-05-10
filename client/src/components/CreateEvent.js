import React, { Component } from 'react';
import EventForm from './EventForm';

export default class CreateEvent extends Component {
		render(){

		return(
			<div>
				<h1>I am linked</h1>
				<EventForm
					id='create'
					func={this.props.onSubmit}

				/>

			</div>

		)
	}

}
