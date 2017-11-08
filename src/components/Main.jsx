import React, { Component } from 'react';
import star from '../images/star-small.png';

class Main extends Component {
  render () {
    return (
      <div className="container">
        <div>
          <img src={star} alt="Star"/>
        </div>
      </div>
    );

  }
}
export default Main;