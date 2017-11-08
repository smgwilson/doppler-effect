import React from 'react';
import Main from './Main';
import ExponentialSlider from './ExponentialSlider';

const App = () => {
  return (
    <div className="container">
      <h1>Doppler Effect</h1>
      <Main />
      <ExponentialSlider />
    </div>
  );
}

export default App;