import React from 'react';
import './NavigationContainer.css';
import NavigationItem from './NavigationItem';
import navigationData from './NavigationData.json';

const NavigationContainer = () => {
  return (
    <ul className="navigation-header">
      {navigationData.data.map((navigationItem, i) => {
        return <NavigationItem key={i} navigation={navigationItem}/>
      })}
    </ul>
  );
}

export default NavigationContainer
