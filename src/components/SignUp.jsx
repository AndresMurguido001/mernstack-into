import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      passwordConf: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordConfChange = this.handlePasswordConfChange.bind(this);
  }
  handlePasswordChange(e){
    e.preventDefault();
    this.setState({
      password: e.target.value
    })
  }
  handleEmailChange(e){
    this.setState({
      email: e.target.value
    })
  }
  handleUsernameChange(e){
    e.preventDefault();
    this.setState({
      username: e.target.value
    })
  }
  handlePasswordConfChange(e){
    e.preventDefault();
    this.setState({
      passwordConf: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    axios.post('http://localhost:4200/sign_up', this.state)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    this.setState({
      email: '',
      username: '',
      password: '',
      passwordConf: ''
    })
  }
  render(){
    return(
      <div>
        <Link to='/login'>Login</Link>
        <form onSubmit={this.handleSubmit}>
          <p>Email</p>
          <input
            type="email"
            onChange={this.handleEmailChange}
            value={this.state.email}
            /><br />
          <p>Username</p>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
            /><br />
          <p>Password</p>
          <input
            type='password'
            value={this.state.password}
            onChange={this.handlePasswordChange}
            /><br />
          <p>Confirm Password</p>
          <input
            type='password'
            value={this.state.passwordConf}
            onChange={this.handlePasswordConfChange}
            /><br /><br />
          <input
            type="submit"
            defaultValue="Submit"
            />

        </form>
      </div>
    )
  }
}
export default SignUp;
