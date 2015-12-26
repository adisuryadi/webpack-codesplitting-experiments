import React from 'react';
import FluxComponent from 'flummox/component';
import AppFlux from './AppFlux';
import App from './App';

const flux = new AppFlux();

const Root = React.createClass({
  render() {
    return (
     <FluxComponent flux={flux} connectToStores={['messages']}>
        <App />
     </FluxComponent>
    );
  }
});

export default Root;
