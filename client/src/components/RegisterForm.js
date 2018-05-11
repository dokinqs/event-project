import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectHome: false,
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
    this.props.handleRegister(this.state);
    this.setState({
      username: '',
      email: '',
      pw_digest: '',
      redirectHome: true
    });
  }

  render() {
    return (
      <div> Register Form 
      <form onSubmit={this.handleSubmit} className="login form" method="post">
        {this.state.redirectHome && <Redirect to='/api/auth/login' />}

        <label htmlFor="username">Create Username
          <input 
            type="text" 
            onChange={this.handleInputChange}
            value={this.state.username}
            name="username" 
          />
        </label>
        <label htmlFor="email">Enter Email
          <input 
            type="text" 
            onChange={this.handleInputChange}
            value={this.state.email}
            name="email" 
          />
        </label>
        <label htmlFor="password">Create Password
          <input 
            type="password" 
            onChange={this.handleInputChange}
            value={this.state.pw_digest}
            name="pw_digest" 
          />
        </label>
        <input 
          type="submit" 
          value="Register" 
          onSubmit={this.handleSubmit}
        />
      </form>
      </div>
    )
  }
}

export default RegisterForm;
