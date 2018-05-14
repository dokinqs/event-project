import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcome!</h2>
        <Link to='/api/events'>
          <h3>Let's Hackup!</h3>
        </Link>
        <img src="https://securecdn.pymnts.com/wp-content/uploads/2017/08/russsiahacker-1.jpg" alt="fellow hacker says hi" />
      </div>
    )
  }
}