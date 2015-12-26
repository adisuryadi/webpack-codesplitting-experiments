import React, { PropTypes } from 'react';
import { Router, Route } from 'react-router';
import App from './App';

const Root = React.createClass({
  propTypes: {
    history: PropTypes.object.isRequired
  },

  render() {
    const history = this.props.history;

    return (
     <Router history={history}>
       <Route path="/" component={App} />
     </Router>
    );
  }
});

export default Root;
