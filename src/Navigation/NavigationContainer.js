import React from 'react';
import NavigationItems from './NavigationItems';
import './NavigationContainer.css';

const NavigationContainer = () => {
  const navigationItems = [
    {
      linkText: 'home',
      url: '#home'
    }, 
    {
      linkText: 'about',
      url: '#about'
    }, 
    {
      linkText: 'portfolio',
      url: '#portfolio'
    }, 
    {
      linkText: 'contact',
      url: '#contact-me'
    }];
  return (

    <ul className="navigation-header">
      <NavigationItems navigationItems={navigationItems}/>
    </ul>


  );
}

export default NavigationContainer
