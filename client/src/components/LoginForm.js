import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // when you start to type in the input box it will change the state
  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  //
  handleSubmit(e) {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.setState({
      username: '',
      email: '',
      password: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} class="login form" method="post">
        <label htmlFor="username">Username
          <input 
            type="text" 
            name="username" 
            id="username" 
          />
        </label>
        <label htmlFor="Email">Email
          <input 
            type="text" 
            name="Email" 
            id="Email" 
          />
        </label>
        <label htmlFor="password">Password
          <input 
            type="password" 
            name="password" 
            id="password" 
          />
        </label>
        <input id="submit" type="submit" value="Login" />
      </form>
    )
  }
}

export default LoginForm;
