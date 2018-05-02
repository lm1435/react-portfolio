import React, { Component } from 'react';
import './NavigationItem.css';

export default class NavigationItem extends Component {
  constructor(props) {
    super(props)
   
  }

  render() {
    var navigationData = this.props.navigation;
    return (
      <li>
        <a href={navigationData.url}>
          {navigationData.linkText}
        </a>
      </li>
    )
  }
}