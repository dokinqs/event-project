import React, { Component } from 'react';

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
  handleChange(e) {
    const { name, value} = e.target;
    this.setState((prevState, props) => ({
      event: {
        ...prevState.event,
        [name]: value
      }
    }))
    // console.log(name, "with value: ", value) checking if state changes.
  }// onchange this function sets state to the new value
  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.event);
    window.location.reload();
  }

  render() {
    console.log(this.state.event)
    const { event, text, id, img_url} = this.state.event
    return (
      <div>
        <h1>EditEvent nr: {this.state.event.id}</h1>


        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            <h3>Text</h3>
            <textarea rows='8' colts ='80'
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

          <button type='submit'>CHANGE</button>
        </form>

      </div>
    )
  }
}
