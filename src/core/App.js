import React from 'react';
import FluxComponent from 'flummox/component';
import Messages from '../message/components/Messages.react';
import Counter from '../counter/components/Counter.react';

const App = React.createClass({
  render() {
    return (
      <FluxComponent connectToStores={['messages', 'counter']}>
        <Messages />
        <Counter />
      </FluxComponent>
    );
  }
});

export default App;
