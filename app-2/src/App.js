import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: ['hi', 'hello', 'howdy', 'hey']
    }
  }


  
  render() {
    return (
      <div className="App">
        <span>{this.state.list.map(item => {
          return (
            <div>
              <h1>{item}</h1>
            </div>
          )
        })}</span>
      </div>
    );
  }
}

export default App;
