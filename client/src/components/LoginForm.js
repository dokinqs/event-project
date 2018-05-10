import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class LoginForm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     username: '',
  //     email: '',
  //     password: ''
  //   }
  // }

  // // when you start to type in the input box it will change the state
  // handleInputChange(e) {
  //   cont { name, value } = e.target;
  //   this.setState({
  //     [name]: value
  //   });
  // }

  // //
  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.
  // }

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
