import React, { Component } from 'react';
import './App.css';
import NavigationContainer from './Navigation/NavigationContainer';
import HeroImage from './Hero/HeroImage';
import Skills from './Skills/Skills'

class App extends Component {
  render() {
    return (
      <div>
        <NavigationContainer />
        <HeroImage />
        <Skills />
      </div>
    );
  }
}

export default App;
