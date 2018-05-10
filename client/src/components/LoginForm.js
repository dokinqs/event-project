import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class LoginForm extends Component {
  render() {
    return (
      <div>
        <h2>Login Form</h2>
        <form class="login form" method="post">
          <div>
            <label for="username">Username</label>
            <input type="text" name="username" id="username" required />
          </div>
          <div>
            <label for="Email">Email</label>
            <input type="text" name="Email" id="Email" required />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" required />
          </div>
          <input id="submit" type="submit" value="Login" />
       </form>
      </div>
    )
  }
}

export default LoginForm;