import { Component } from 'react';
import './Text.css';

export default class Text extends Component {
  render() {
    const { children } = this.props;
    return children();
  }
}
