import React from 'react';

const NavigationItem = ({ 
  navigation: {
    url,
    linkText
  } 
}) =>
  <li>
    <a href={url}>
      {linkText}
    </a>
  </li>

export default NavigationItem;
