module.exports = {
  path: 'counter',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/CounterContainer.react'));
    });
  }
};
