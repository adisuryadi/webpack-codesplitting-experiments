import React from 'react';
import FluxComponent from 'flummox/component';
import Messages from '../message/components/Messages.react';

const App = React.createClass({
  render() {
    return (
      <FluxComponent connectToStores={['messages']}>
        <Messages />
      </FluxComponent>
    );
  }
});

export default App;
