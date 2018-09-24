import React, { Component } from 'react';

////// DUMB (Not connected) component /////////////////////////////////////
// Receives props and displays data
// Demonstrates usage of shouldComponentUpdate with props passed down from Mobx container component
export default class TextDisplay extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.background !== '#000000'
  }

  render() {
    const { background, heading, text } = this.props;
    return (
      <div style={{ backgroundColor: background }}>
        <h3 style={{ color: heading }}>De Labore et Dolore</h3>
        <div style={{ color: text }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </div>
      </div>
    )
  }
}
