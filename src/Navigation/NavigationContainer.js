import React from 'react';
import './Navigation.css';
import NavigationItem from './NavigationItem';
import NavigationIcon from './NavigationIcon';
import navigationData from './NavigationData.json';

const NavigationContainer = () => (
  <nav>
    <ul className="navigation-header">
      <NavigationIcon />
      {navigationData.data.map(navigationItem => (
        <NavigationItem key={navigationItem.linkText} navigation={navigationItem} />
      ))}
    </ul>
  </nav>
);

export default NavigationContainer;
