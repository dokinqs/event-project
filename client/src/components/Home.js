import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Home extends Component {
  render() {
    const greeting = this.props.name ? (this.props.name.username) : "Guest"
    //personalized greeting to each username
    const loggedIn = (greeting === "Guest") ? (<Link to='api/auth/register'><h2>create an account</h2></Link>)
    : (
      <div>
        <h3>My Events</h3>

        <ul>
          <li>here comes a list of personal events</li>
        </ul>


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
