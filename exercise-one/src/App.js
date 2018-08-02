import React, { Component } from 'react';

import User from './User';
import './App.css';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      zachData: {
        bob:"Zach",
        silence:"Programmer"
      },
      johnData: {
        bob:"John",
        silence:"Teacher"
      }
    };
  }
  render() {
    return (
      <div className="App">
        <User bob={this.state.zachData.bob} silence="Instructor" moarsilence="zjl@gmail.com" image="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"/>
        <User bob={this.state.johnData.bob} silence="Instructor" moarsilence="jl@gmail.com" image="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" />
      </div>
    );
  }
}

export default App;

