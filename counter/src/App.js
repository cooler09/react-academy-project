import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

class App extends Component {

  render() {
    var divStyle = {
      color: 'black'
    };
    return (
      <div style={divStyle} className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter initialNumber="10" name="Zach"  message="Foo"/>
        <Counter initialNumber="100" message="Bar" />
        <Counter initialNumber="1000" message="Foobar" />
      </div>
    );
  }
}

export default App;
