import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: parseInt(this.props.initialNumber),
      dragonballs: 7
    };
    this.Increment = this.Increment.bind(this);
  }
    Increment()
    {
      this.setState({
        count: this.state.count + 1
      });
    }
    render() {
      console.log(this.state);
      return (<div>
          <h1>{this.state.count}</h1>
          <button className="btn btn-default" color="primary" onClick={this.Increment} >Increment</button>
      </div>);
    }
  }
  
  export default Counter;