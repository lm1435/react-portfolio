import React, { Component } from 'react';
import './App.css';
import NavigationContainer from './Navigation/NavigationContainer';
import HeroImage from './Hero/HeroImage';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationContainer />
        <HeroImage />
      </div>
    );
  }
}

export default App;
