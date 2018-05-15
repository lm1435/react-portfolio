import React from 'react';
import './NavigationContainer.css';
import NavigationItem from './NavigationItem';
import NavigationIcon from './NavigationIcon.js';
import navigationData from './NavigationData.json';

const NavigationContainer = () => {
  return (
    <header>
      <ul className="navigation-header">
        <NavigationIcon />
        {navigationData.data.map((navigationItem, i) => {
          return <NavigationItem key={i} navigation={navigationItem}/>
        })}
      </ul>
    </header>
  );
}

export default NavigationContainer
