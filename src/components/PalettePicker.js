import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import '../App.css';

const PALETTES = [{
  id: 'green',
  heading: '#157A6E',
  text: '#499F68',
  background: '#77B28C'
},{
  id: 'brown',
  heading:'#3C1518',
  text: '#69140E',
  background: '#D58936'
}, {
  id: 'blue',
  heading: '#0B2545',
  text: '#13315C',
  background: '#8DA9C4'
}, {
  id: 'black',
  heading: '#000000',
  text: '#000000',
  background: '#000000'
}]

////// EXAMPLE OF INJECTED COMPONENT ////////////////////////////////////////
// Use mobx @inject to inject ExampleStore from Provider component
// Store can be accessed from this.props.ExampleStore
// Note store is accessed by reference, cannot correctly be use with React
// methods that compare prevProps to this.props
@inject('ExampleStore')
@observer
export default class AppMain extends Component {
  setColorObject(colors) {
    this.props.ExampleStore.setColors(colors);
  }

  render() {
    const colors = this.props.ExampleStore.colors;
    console.log(this.props.ExampleStore.paletteId); // Log for demonstrating computed property of ExampleStore
    return (
      <div>
        <div>Palette:</div>
        <div className="palette-container">
          {PALETTES.map((palette) =>
            <div key={palette.id} onClick={() => this.setColorObject(palette)}>
              <div
                className="palette-block"
                style={{
                  backgroundColor: palette.text,
                  border: colors.id === palette.id ? "4px solid yellow" : "none"}}></div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
