import React, { PropTypes } from 'react';
import { Router, Route } from 'react-router';
import FluxComponent from 'flummox/component';

const rootRoute = {
  component: 'div',
  childRoutes: [{
    path: '/',
    component: require('./App'),
    childRoutes: [
      require('../modules/message'),
      require('../modules/counter')
    ]
  }]
};

const Root = React.createClass({
  propTypes: {
    history: PropTypes.object.isRequired
  },

  render() {
    const history = this.props.history;

    return (
      <Router history={history} routes={rootRoute} />
    );
  }
});

export default Root;
