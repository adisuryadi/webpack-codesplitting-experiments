import React from 'react';
import ReactDOM from 'react-dom';
import FluxComponent from 'flummox/component';
import createHashHistory from 'history/lib/createHashHistory';
import AppFlux from './core/AppFlux';
import Root from './core/Root';

const flux = new AppFlux();
const history = createHashHistory();

if (window) {
  window.flux = flux;
}

function createRoot(flux, history) {
  return (
    <FluxComponent flux={flux}>
      <Root history={history} />
    </FluxComponent>
  );
}

ReactDOM.render(createRoot(flux, history),
  document.getElementById('app')
);
