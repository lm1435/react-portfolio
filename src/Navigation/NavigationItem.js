import React from 'react';
import './NavigationItem.css';

export default function NavigationItem (props) {
    var navigationData = props.navigation;
    return (
      <li>
        <a href={navigationData.url}>
          {navigationData.linkText}
        </a>
      </li>
    )
}