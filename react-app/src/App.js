import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import other js files
import UserInput from "./UserInput/UserInput"
import UserOutput from "./UserOutput/UserOutput"

class App extends Component {
  // add property for the class (state)
  state = {
    username: 'daniel8691'

  }

  // create eventHandler
  usernameChangeHandler = (someEvent) => {
    // add a method to manipulate the state based on the input we get
    // use .setState() instead of changing the state directly
    this.setState({username: someEvent.target.value})
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <UserInput changed={this.usernameChangeHandler} someValue = {this.state.username}/>
        <UserOutput username = {this.state.username}/>
        <UserOutput username = {this.state.username}/>
        <UserOutput username= {this.state.username}/>

      </div>
    );
  }
}

export default App;
