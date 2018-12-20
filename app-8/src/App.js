import React, { Component } from 'react';
import Add from './Add'

class App extends Component {
  constructor () {
    super();

    this.state = {
      num: 0
    }
  }

  inputHandler = val => {
    this.setState({num: val})
  }  


  render() {
    return (
      <div>
       <input onChange={e => this.inputHandler(e.target.value)}></input>
       <span>
         Add 10: <Add thisWillAdd10={this.state.num}/>
       </span>
      </div>
    );
  }
}

export default App;
