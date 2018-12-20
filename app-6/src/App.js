import React, { Component } from 'react';
import Todo from './Todo'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
      list: []
    }

    this.addToList = this.addToList.bind(this);
  }

  inputHandler = val => {
    this.setState({input: val})
  }

  addToList() {
    this.setState({
      list: [...this.state.list, this.state.input ], 
      input: ''               
    })
  }

  render() {
      let list = this.state.list.map( ( element, index ) => {
        return (
          <Todo key={ index } task={ element } />
        )
      })

      return (

      <div>
        <h1>My to-do list:</h1>
        <input onChange={e => this.inputHandler(e.target.value)}></input>
        <button onClick={this.addToList}></button>
        {list}
      </div>
    );
  }
}

export default App;
