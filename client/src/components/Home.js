import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class Home extends Component {

  render() {
    const greeting = this.props.name ? (this.props.name.username) : "Guest"
    //personalized greeting to each username
    const logedIn = (greeting === "Guest") ? (<h2>create an account</h2>)
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
      <div>

        <h2>Welcome {greeting}!</h2>
        {logedIn}
        <img src='https://files.slack.com/files-pri/T0351JZQ0-FAMD93QBG/logomakr_9ufv8t.png'/>

      </div>
    )
  }
}

export default Home;
