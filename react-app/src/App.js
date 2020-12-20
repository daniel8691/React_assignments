import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import other js files
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
import Validation from './ValidationComponent/Validation';
import Char from './Char/Char';

class App extends Component {
  // add property for the class (state)
  state = {
    // username: 'daniel8691'
    someUserInput : 'test '
    
  }

  // // create eventHandler
  // usernameChangeHandler = (someEvent) => {
  //   // add a method to manipulate the state based on the input we get
  //   // use .setState() instead of changing the state directly
  //   this.setState({username: someEvent.target.value})
  // }

  inputChangedHandler = (event) => {
    this.setState({someUserInput: event.target.value})
  };


  // create a deleteCharHandler
  deleteCharHandler = (index) => {
    const text = this.state.someUserInput.split('');
    // this removes the character from the array using the .splice() function
    text.splice(index,1);
    // turns the characters into a string again
    const updatedText = text.join('');
    this.setState({someUserInput: updatedText});

  }


  render() {
    // loop through the array (in this case, its a string)
    // .map() stores a new array instead of modifying the existing one
    // we have to split first before maping because its a string
    let charList = this.state.someUserInput.split("").map((char, index) => {
      // add a unique key to prevent the unique key warning
      return <Char 
      character={char} 
      key = {index}
      // this function will be executed when the click property is fired and then you call deleteCharHandler 
      clicked = {() => this.deleteCharHandler(index)}
      />;
    })


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <UserInput 
        // FROM ASSIGNMENT 1
        // changed={this.usernameChangeHandler} 
        // currentName = {this.state.username}
        // FROM ASSIGNMENT 2
        changed = {this.inputChangedHandler}
        currentValue = {this.state.someUserInput}
        />
        <p>{this.state.someUserInput}</p>
        {/* <UserOutput username = {this.state.username}/>
        <UserOutput username = {this.state.username}/>
        <UserOutput username= "Daniel"/> */}
        <Validation 
        inputLength = {this.state.someUserInput.length}/>
        {/* render list below the validation */}
        {charList}


      </div>
    );
  }
}

export default App;
