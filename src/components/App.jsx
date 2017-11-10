import React, { Component } from 'react';
import { connect } from 'react-redux';
import star from '../images/star-small.png';
import ExponentialInputs from './ExponentialInputs';

class App extends Component {
  constructor () {
    super();
    this.state = {
      color: " "
    }
    this.setColor = this.setColor.bind(this);
  }

  // use lifecycle hook to set new color when slider value changes
  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps.appValue);
    if (this.props.appValue !== nextProps.appValue) {
      this.setColor(nextProps.appValue);
    }
  }

  setColor (val) {
    console.log('val', val);
    let newColor;
    if (val < 0 && val >= -25){
      newColor = 'violet';
    }  else if (val < -25 && val >= -75){
      newColor = 'indigo';
    } else if (val < -75){
      newColor = 'blue';
    } else if (val > 0 && val <= 75){
      newColor = 'magenta';
    } else if (val > 75){
      newColor = 'red';
    } else {
      newColor = '';
    }
    this.setState({
      color: newColor
    })
  }

  render() {
    const color = this.state.color;
    return (
      <div className="container">
        <h1>Doppler Effect</h1>
        <div className="wrapper">
          <div className="main-image">
            <img src={star} alt="Star"/>
            <div className={`doppler doppler-${color}`}></div>
          </div>
        </div>
          <div className="inputs">
            <ExponentialInputs/>
          </div>
      </div>
    );
  }
}

// use component state from slider to set app state
const mapStateToProps = state => {
  return {
    appValue: state
  };
};

export default connect(mapStateToProps, null)(App);