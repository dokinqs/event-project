import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Mapbox from './Mapbox';

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.likes,
      likeId: '',
      event: Object.assign({
        event: '',
        text: '',
        img_url: ''
      }, props.event)
    }
    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
    this.checkiIfLike = this.checkiIfLike.bind(this);
  }

  // handleLike() {
  //   // clicked like
  //   if (!this.state.liked) {
  //     this.state.likedarray.push(this.state.event.id);
  //     console.log('likedarray: ', this.state.likedarray);
  //     console.log('liked: ', !this.state.liked);
  //   // clicked unlike
  //   } else {
  //     let larray = this.state.likedarray;
  //     let indexxx = larray.indexOf(this.props.events);
  //     this.state.likedarray.splice(indexxx, 1);
  //     console.log('likedarray: ', this.state.likedarray);
  //     console.log('liked: ', !this.state.liked);
  //   }
  //   this.setState({
  //     liked: !this.state.liked,
  //     likedarray: this.state.likedarray
  //   });
  // }
  handleLike() {
    const like = {
      "liker_id": this.props.user.id,
      "events_id": this.props.event.id
    }
    this.props.handleLike(like)
  }
  handleDislike() {
    this.props.handledisLike(this.state.likeId)
  }
  editEvent(id) {
    this.props.history.push(`/api/events/${id}`);
  }
  //this will be accessed with the onClick event on EditEvent.js
  checkiIfLike() {
    const likeIdVar = (this.state.likes).filter(t => (t.liker_id === this.props.user.id));
    const likeIdVarCheck = (!likeIdVar[0]) ? null : likeIdVar[0].id;
    console.log('likeIdVarcheck', likeIdVarCheck);
    (likeIdVarCheck === null) ? console.log('no change') : (this.setState({ likeId : likeIdVarCheck }))
    console.log(this.state.likeId)
  }

  componentDidMount() {

    this.checkiIfLike();

  }

  render() {

    // console.log('render curr user :', this.props.user)
    const { event, text, id, img_url } = this.state.event;

    // const likeIdVarCheck = !likeIdVar ? '' : likeIdVar[0].id
    // this.setState({
    //   likeId : likeIdVarCheck
    // });

    const likedByMe = (this.state.likeId > 0) ? "Dislike" : "like";
    console.log()
    // console.log('liked by me variable = ', this.state.likeId)
    // const likeHandle = (likedByMe === "Dislike") ? this.handleDislike() : this.handleLike();
    const loaded = this.state.likes ? (
      <div>
        <div className='form text-event'>
          <img src={img_url} className='img-event'/>
          <p className="text-event">{event}</p>
          <p className="text-event">{text}</p>
        </div>
        <hr />

        <button className="button" onClick={(likedByMe === "Dislike") ? this.handleDislike : this.handleLike}>{likedByMe}({this.state.likes.length})</button>

        <Link to={`/api/events/${id}/edit`}>
        <button className='button'>Edit Event</button>
        </Link>
        <Link to="/api/events">
        <button className='button' onClick={this.props.del} > DELETE</button>
        </Link>
        <hr />
        <br />
      </div>
    ) : (
      <div>
        <h1>Loading . . . </h1>
      </div>
    );
    return (
      <div>
      {loaded}

        <Link to={`/api/events/${id}/edit`}><button>Edit Event</button></Link>
        <Link to="/api/events"> <button onClick={this.props.del} > DELETE</button> </Link>
        <Mapbox />

      </div>
    )
  }
}


// onClick={this.handleLike}
