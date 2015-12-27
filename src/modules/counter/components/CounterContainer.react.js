import React from 'react';
import FluxComponent from 'flummox/component';
import Counter from './Counter.react.js';

const CounterContainer = React.createClass({
  render() {
    return (
        <FluxComponent connectToStores={['counter']}>
          <Counter />
        </FluxComponent>
    );
  }
});

module.exports = CounterContainer;
