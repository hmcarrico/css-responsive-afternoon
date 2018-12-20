import React, { Component } from 'react';
import Header from './components/header';
import Body from './components/body';
import './App.css';
import './reset.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className='headhead'/>
        <Body className='bodybody'/>
      </div>
    );
  }
}

export default App;
