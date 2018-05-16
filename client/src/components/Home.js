import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Home extends Component {
  render() {
    const filter = this.props.name ? (this.props.events.filter(event => event.user_id === this.props.name.id)) : ['No events'];
    const filterLikes = this.props.name ? (this.props.likes.filter(likes => likes.liker_id === this.props.name.id)) : ['No likes'];
    const greeting = this.props.name ? (this.props.name.username) : "Guest"
    //personalized greeting to each username
    const loggedIn = (greeting === "Guest") ? (<Link to='api/auth/register'><h2>create an account</h2></Link>)
    : (
      <div className='home-container'>
        <div className='home-left'>
          <p><b>My Events:</b></p>
          {filter.map(event => (
            <div className='my-event'>

              <Link to={`api/events/${event.id}`}>
                <div key={event.id}>
                  <p className='my-event'>{event.event}</p>
                </div>
              </Link>

            </div>

          ))}

        </div>
        <div className='home-right'>
          <p><b>I Am Going To:</b></p>
          {filterLikes.map(like => (
            <div className='my-event'>

              <Link to={`api/events/${like.events_id}`}>
                <div key={like.events_id}>
                  <p className='my-event'>{like.events_id}</p>
                </div>
              </Link>

            </div>

          ))}

        </div>


      </div>
    )
    //if the user is logged in the events that the user created will be displayed on the home page

    return (
      <div className="homepage">
        <h2>Welcome {greeting}!</h2>
        {loggedIn}
        <Link to='/api/events'>
          <h3>Let's Hackup!</h3>
        </Link>
        <img src="https://securecdn.pymnts.com/wp-content/uploads/2017/08/russsiahacker-1.jpg" alt="fellow hacker says hi" />
      </div>
    )
  }
}
