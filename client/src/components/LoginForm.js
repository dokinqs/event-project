import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      pw_digest: '',
      redirectHome: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // will change the state as you type in the input box
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
      pw_digest: '',
      redirectHome: true
    });
  }

  render() {
    return (
      <div className="form"><h2>Member Login</h2>
        <form onSubmit={this.handleSubmit} className="login" method="post">
          {this.state.redirectHome && <Redirect to='/' />}
          <label htmlFor="username">
            <input 
              placeholder="Username"
              type="text" 
              onChange={this.handleInputChange}
              value={this.state.username}
              name="username" 
            />
          </label>
          <br />
          <label htmlFor="Email">
            <input 
              placeholder="Email"
              type="text" 
              onChange={this.handleInputChange}
              value={this.state.email}
              name="email" 
            />
          </label>
          <br />
          <label htmlFor="password">
            <input 
              placeholder="Password"
              type="password" 
              onChange={this.handleInputChange}
              value={this.state.pw_digest}
              name="pw_digest" 
            />
          </label>
          <br />
          <input 
            className="button"
            type="submit" 
            value="Log in" 
            onSubmit={this.handleSubmit}
          />
        </form>
      </div>
    )
  }
}