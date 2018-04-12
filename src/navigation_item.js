import React, { Component } from 'react';

class NavigationItem extends Component {
  constructor(props) {
    super(props);

    this.state = { selected : false};
  }
  render() {
    return (
      <li>
        <a href="#blah">initial link</a>
      </li>
    );
  }
}

export default NavigationItem;
