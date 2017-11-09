import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setValue } from '../actions/index.js';
import Slider from 'react-rangeslider'

class ExponentialInputs extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 0
    }
  }

  handleChangeStart = () => {
    console.log('Change event started')
  };

  handleChange = value => {
    this.setState({
      value: value
    });
  };

  handleChangeComplete = () => {
    console.log('Change event completed');
    this.props.setValue(this.state.value);
  };

  render () {
    console.log('ExponentialInputs props', this.props);
    const { value } = this.state
    return (
      <div>
        <div className="text-input">
          <label htmlFor="velocity">Velocity (km/s)</label>
          <input 
            id="velocity" 
            type="number" 
            placeholder="0.0"
            min="-100.00" 
            max="100.00"
            value={value}
            />
        </div>
        <div className='slider-input'>
          <Slider
            min={-100}
            max={100}
            step={5}
            value={value}
            onChangeStart={this.handleChangeStart}
            onChange={this.handleChange}
            onChangeComplete={this.handleChangeComplete}
          />
          <div className='value'></div>
        </div>
      </div>
    )
  }
}

export default connect(null, { setValue })(ExponentialInputs);
