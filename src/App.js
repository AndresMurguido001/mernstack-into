import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Main from './components/Main'


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path='/' component={SignUp} />
        <Route path='/login' component={Login} />
        <Route path='/main' component={Main} />
      </div>
      </Router>
    );
  }
}

export default App;
