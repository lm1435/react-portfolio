import React from 'react';
import './App.css';
import NavigationContainer from './Navigation/NavigationContainer';
import HeroImage from './Hero/HeroImage';
import Skills from './Skills/Skills';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import GoogleMap from './Contact/GoogleMap';

const App = () => (
  <div>
    <NavigationContainer />
    <HeroImage />
    <About />
    <Skills />
    <Portfolio />
    <GoogleMap />
  </div>
);

export default App;
