import React, { PropTypes } from 'react';

const Counter = React.createClass({
  propTypes: {
    counter: PropTypes.number.isRequired
  },

  handleDecrement() {
    this.props.flux.getActions('counter').decrement();
  },

  handleIncrement() {
    this.props.flux.getActions('counter').increment();
  },

  handleIncrementAsync() {
    this.props.flux.getActions('counter').incrementAsync();
  },

  render() {
    return (
        <div>
          <span>{this.props.counter}</span><br/>
          <button onClick={this.handleIncrement}>+ increment</button>
          <button onClick={this.handleDecrement}>- decrement</button><br/>
          <button onClick={this.handleIncrementAsync}>+ increment async</button>
        </div>
    );
  },
});

export default Counter;
