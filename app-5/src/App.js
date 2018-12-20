import React, { Component } from 'react';
import Image from './Image'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      picture: 'https://http.cat/409'
    }

  }


  render() {
    return (
      <div className="App">
        <Image showImage={this.state.picture}/>
      </div>
    );
  }
}

export default App;
