import React, { Component } from 'react';
import './App.css';
import NavigationContainer from './Navigation/NavigationContainer';
import HeroImage from './Hero/HeroImage';
import Skills from './Skills/Skills';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import GoogleMap from './Contact/GoogleMap';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationContainer />
        <HeroImage />
        <About />
        <Skills />
        <Portfolio />
        <GoogleMap />
      </div>
    );
  }
}

export default App;
