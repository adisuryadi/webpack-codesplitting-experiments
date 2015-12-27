// const { flux } = require('../../index');

module.exports = {
  path: 'counter',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      //  flux.createActions('counter', require('./CounterActions'));
      //  flux.createStore('counter', require('./CounterStore'), this);
      cb(null, require('./components/CounterContainer.react'));
    });
  }
};
