import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      pw_digest: ''
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
    this.props.handleLogin(this.state);
    this.setState({
      username: '',
      email: '',
      pw_digest: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="login form" method="post">
        <label htmlFor="username">Username
          <input 
            type="text" 
            onChange={this.handleInputChange}
            value={this.state.username}
            name="username" 
          />
        </label>
        <label htmlFor="Email">Email
          <input 
            type="text" 
            onChange={this.handleInputChange}
            value={this.state.email}
            name="email" 
          />
        </label>
        <label htmlFor="password">Password
          <input 
            type="password" 
            onChange={this.handleInputChange}
            value={this.state.pw_digest}
            name="pw_digest" 
          />
        </label>
        <input 
          type="submit" 
          value="Login" 
          onSubmit={this.handleSubmit}
        />
      </form>
    )
  }
}

export default LoginForm;
