import React, { Component } from 'react';

import ExampleStore from '../stores/ExampleStore';

////// EXAMPLE OF ACTOR COMPONENT ////////////////////////////////////////
// Component does not need props from the ExampleStore, no store injection is performed
// However, component can fire an ExampleStore action that will change its observables
// In this case, store is imported directly from store directory and action is called
// like a regular function.
export default class ResetButton extends Component {
  render() {
    return (
      <div>
        <button onClick={ExampleStore.resetColors}>Reset</button>
      </div>
    )
  }
}
