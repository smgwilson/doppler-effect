import React, { Component } from 'react';
import star from '../images/star-small.png';
import ExponentialInputs from './ExponentialInputs';

class App extends Component {
  constructor () {
    super();

    this.state = {
      value: 100
    }
  }

  onValueChange (newValue) {
    this.setState({
      value: newValue
    })
  }

  render() {
    const starColor = this.props.starColor ? 'doppler-color' : '';
    return (
      <div className="container">
        <h1>Doppler Effect</h1>
        <div className="wrapper">
          <div className="main-image">
            <img src={star} alt="Star"/>
            <div className="doppler doppler-blue"></div>
          </div>
        </div>
          <div className="inputs">
            <ExponentialInputs triggerChange={this.onValueChange.bind(this)}/>
          </div>
      </div>
    );
  }
}

export default App;