import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class EventForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			redirectHome: false,
			event: Object.assign({
				event: '',
				text: '',
				img_url: ''
			}, props.event)
		}
	}
	handleChange(e) {
		const { name, value } = e.target;
		this.setState((prevState, props) => ({
			event: {
				...prevState.event,
				[name]: value
			}
		}))
	}
	handleSubmit(e) {
		e.preventDefault();
		this.props.func(this.state.event);
		window.location.reload();
		this.setState({
			redirectHome: true
		});
	}
	render() {
		console.log(this.state.event)
		const { event, text, id, img_url} = this.state.event
		return (
			<div>

				<form onSubmit={this.handleSubmit.bind(this)} className={id ? 'edit' : 'create'}>
					{this.state.redirectHome && <Redirect to='/api/events' />}

					<label>
						<h3>Text</h3>
						<textarea rows='8' colts='80'
							name='text'
							value={text}
							onChange={this.handleChange.bind(this)}
						/>
					</label><br/>
					<label>
						<h3>Event</h3>
						<textarea rows='8' colts ='80'
							name='event'
							value={event}
							onChange={this.handleChange.bind(this)}
						/>
					</label><br/>
					<label>
						<h3>image URL</h3>
						<textarea rows='8' colts ='80'
							name='img_url'
							value={img_url}
							onChange={this.handleChange.bind(this)}
						/>
					</label><br/>

					<button type='submit'>{id ? 'edit' : 'create'}</button>
				</form>

			</div>
		)
	}

}
