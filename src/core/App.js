import React from 'react';
import { Link } from 'react-router';
import FluxComponent from 'flummox/component';

const App = React.createClass({
  render() {
    return (
      <div>
        <Link to="/message">Message</Link>&nbsp;
        <Link to="/counter">Counter</Link>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
