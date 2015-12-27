import React from 'react';
import FluxComponent from 'flummox/component';
import Message from './Message.react.js';

const MessageContainer = React.createClass({
  render() {
    return (
      <FluxComponent connectToStores={['messages']}>
        <Message />
      </FluxComponent>
    );
  }
});

module.exports = MessageContainer;
