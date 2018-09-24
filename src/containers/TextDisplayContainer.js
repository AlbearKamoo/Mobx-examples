import React from 'react';
import { inject, observer } from 'mobx-react';

import TextDisplay from '../components/TextDisplay';

////// EXAMPLE OF MOBX CONTAINER  ////////////////////////////////////////
// Stateless functional container that uses the functional versions of Mobx
// 'inject' and 'observer' to manage props from the ExampleStore.
// Desired props are derefenced at the container level and passed down to
// contained component.
const TextDisplayContainer = inject('ExampleStore')(observer((props) => {
    const { background, heading, text } = props.ExampleStore.colors;
    return (
      <TextDisplay background={background} heading={heading} text={text} />
    )
  })
);

export default TextDisplayContainer;
