import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      filterString: '',
      array: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    }
  }

  handleChange = val => {
    this.setState({filterString: val})
  } 

  render() {
    let foodsToDisplay = this.state.array.filter(element => {
      return element.includes(this.state.filterString);
    }).map((element) => {
      return <h2>{element}</h2>
    });

    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)}></input>
        {foodsToDisplay}
      </div>
    );
  }
}

export default App;
