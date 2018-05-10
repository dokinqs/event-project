import React, { Component } from 'react';

export default class EditEvent extends Component {
  // contructor(props){
  //   super(props);
  //   this.state = {
  //     event: Object.assign({
  //       event: '',
  //       text: ''
  //     }, props.event)
  //   }
  // }
  handleChange(e) {
    const { name, value} = e.target;
    this.setState((prevState, props) => ({
      event: {
        ...prevState.event,
        [name]: value
      }
    }))
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.event);
    // window.location.reload();
  }

  render() {
    // const { event, text, id, img_url} = this.state.event
    return (
      <div>
        <h1>EditEvent works!</h1>

      </div>
    )
  }
}
