import React, { Component } from 'react';

import PalettePicker from './components/PalettePicker';
import ResetButton from './components/ResetButton';
import TextDisplayContainer from './containers/TextDisplayContainer';

import './App.css';

export default class AppMain extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <PalettePicker />
        </div>
        <TextDisplayContainer />
        <ResetButton />
      </div>
    );
  }
}
