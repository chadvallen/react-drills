import React, { Component } from 'react';
import Todo from './components/Todo.js';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
      list: []
    }
  }

  inputHandler = val => {
    this.setState({input: val})
  } 

  addToList = () => {
    let str = this.state.input;
    let newArr = this.state.list.slice();

    newArr.push(str);
    this.setState({list: newArr})
    console.log(this.state.list)
  } 

  render() {
    return (
      <div className="App">
        <h1>ToDo List</h1>
        <input value={this.state.input} onChange={e => this.inputHandler(e.target.value)}></input>
        <button onClick={this.addToList}>Add</button>
        <Todo adder={this.state.list}/>
      </div>
    );
  }
}

export default App;
