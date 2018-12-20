import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: ''
    }
  }

  handleInput(val) {
    this.setState({text: val })
  }


  render() {
    return (
      <div className="App">
        <input onChange={e => this.handleInput(e.target.value)}></input>
        <p>{this.state.text}</p>
        
      </div>
    );
  }
}

export default App;
