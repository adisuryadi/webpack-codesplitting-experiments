module.exports = {
  path: 'message',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/MessageContainer.react'));
    });
  }
};
