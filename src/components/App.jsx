import React, { Component } from 'react';
import { connect } from 'react-redux';
import star from '../images/star-small.png';
import ExponentialInputs from './ExponentialInputs';

class App extends Component {
  render() {
    console.log('App state', this.state)
    const starColor = this.props.starColor ? 'doppler-color' : '';
    return (
      <div className="container">
        <h1>Doppler Effect</h1>
        <div className="wrapper">
          <div className="main-image">
            <img src={star} alt="Star"/>
            <div className="doppler doppler-indigo"></div>
          </div>
        </div>
          <div className="inputs">
            <ExponentialInputs/>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    appValue: state
  };
};

export default connect(mapStateToProps, null)(App);