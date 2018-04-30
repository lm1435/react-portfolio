import React from 'react';
import './NavigationItems.css';


const NavigationItems = (props) => {
  return (
    props.navigationItems.map(function(item){
      return <li><a href={item.url}>{item.linkText}</a></li>
    })
  )
}

export default NavigationItems;
