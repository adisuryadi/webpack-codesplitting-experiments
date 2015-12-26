import React, { PropTypes } from 'react';
import { Router, Route } from 'react-router';
import FluxComponent from 'flummox/component';
import AppFlux from './AppFlux';
import App from './App';

const flux = new AppFlux();

const Root = React.createClass({
  propTypes: {
    history: PropTypes.object.isRequired
  },

  render() {
    const history = this.props.history;

    return (
     <FluxComponent flux={flux} connectToStores={['messages']}>
       <Router history={history}>
         <Route path="/" component={App} />
       </Router>
     </FluxComponent>
    );
  }
});

export default Root;
