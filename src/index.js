import React from 'react';
import ReactDOM from 'react-dom';
import Root from './core/Root';
import createHashHistory from 'history/lib/createHashHistory';

const history = createHashHistory();

ReactDOM.render(<Root history={history} />,
  document.getElementById('app')
);
