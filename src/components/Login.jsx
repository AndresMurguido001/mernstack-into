import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      authenticated: false
    }
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleEmailChange(e){
    this.setState({
      email: e.target.value
    })
  }
  handlePasswordChange(e){
    this.setState({
      password: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault()
    axios.post('http://localhost:4200/login', this.state)
    .then(res => {
      if (res.status == 200){
        this.setState({
          authenticated: true
        })
      }
    })
    .catch(err => console.log(err))

  }
  render(){
    if (this.state.authenticated == true) {
      return(
        <Redirect to='/main' />
      )
  } else {
      return(
        <div>
          <Link to='/'>Sign Up!</Link>
          <form onSubmit={this.handleSubmit}>
            <p>Email</p>
            <input
              type="email"
              onChange={this.handleEmailChange}
              value={this.state.email}
              /><br />
            <input
              type="password"
              onChange={this.handlePasswordChange}
              value={this.state.password}
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
}
export default Login;
