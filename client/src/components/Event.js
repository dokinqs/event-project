import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class EditEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      likedarray: [],
      event: Object.assign({
        event: '',
        text: '',
        img_url: ''
      }, props.event)
    }
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike() {
    // clicked like
    if (!this.state.liked) {
      this.state.likedarray.push(this.state.event.id);
      console.log('likedarray: ', this.state.likedarray);
      console.log('liked: ', !this.state.liked);
    // clicked unlike
    } else {
      let larray = this.state.likedarray;
      let indexxx = larray.indexOf(this.props.events);
      this.state.likedarray.splice(indexxx, 1);
      console.log('likedarray: ', this.state.likedarray);
      console.log('liked: ', !this.state.liked);
    }
    this.setState({
      liked: !this.state.liked,
      likedarray: this.state.likedarray
    });
  }

  editEvent(id) {
    this.props.history.push(`/api/events/${id}`);
  }
  //this will be accessed with the onClick event on EditEvent.js

  render() {
    const likebutton = this.state.liked ? "Unlike" : "Like";
    const { event, text, id, img_url } = this.state.event
    return (
      <div>
        <div className='form text-event'>
          <img src={img_url} className='img-event'/>
          <p className="text-event">{event}</p>
          <p className="text-event">{text}</p>
        </div>
        <hr />

        <button className="button" onClick={this.handleLike}>{likebutton}</button>
            
        <Link to={`/api/events/${id}/edit`}>
        <button className='button'>Edit Event</button>
        </Link>
        <Link to="/api/events"> 
        <button className='button' onClick={this.props.del} > DELETE</button> 
        </Link>
        <hr />
        <br />
      </div>
    )
  }
}
