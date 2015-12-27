//  import { flux } from '../../index';

module.exports = {
  path: 'message',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      //  TODO: see if it's possible to load on demand
      //  flux.createActions('messages', require('./MessageActions'));
      //  flux.createStore('messages', require('./MessageStore'), this);
      cb(null, require('./components/MessageContainer.react'));
    });
  }
};
