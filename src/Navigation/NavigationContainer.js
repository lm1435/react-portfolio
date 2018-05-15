import React from 'react';
import './NavigationContainer.css';
import NavigationItem from './NavigationItem';
import NavigationLogo from './NavigationLogo.js';
import navigationData from './NavigationData.json';

const NavigationContainer = () => {
  return (
    <header>
      <ul className="navigation-header">
        <NavigationLogo />
        {navigationData.data.map((navigationItem, i) => {
          return <NavigationItem key={i} navigation={navigationItem}/>
        })}
      </ul>
    </header>
  );
}

export default NavigationContainer
