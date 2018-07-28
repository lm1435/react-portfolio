import React from 'react';

const NavigationItem = (props) => {
    var navigationData = props.navigation;
    return (
      <li>
        <a href={navigationData.url}>
          {navigationData.linkText}
        </a>
      </li>
    )
}

export default NavigationItem;