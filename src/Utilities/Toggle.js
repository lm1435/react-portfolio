import { Component } from 'react';

export default class Toggle extends Component {
  state = {
    on: false,
  }

  toggle = () => {
    const { on } = this.state;
    this.setState({
      on: !on,
    });
  }

  render() {
    const { children } = this.props;
    return children({
      on: this.state.on,
      toggle: this.toggle,
    });
  }
}
