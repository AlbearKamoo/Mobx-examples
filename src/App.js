import React, { Component } from 'react';
import { Provider } from 'mobx-react';

import AppMain from './AppMain';
import ExampleStore from './stores/ExampleStore'

class App extends Component {
  render() {
    return (
      <Provider ExampleStore={ExampleStore}>
        <AppMain />
      </Provider>
    );
  }
}

export default App;
