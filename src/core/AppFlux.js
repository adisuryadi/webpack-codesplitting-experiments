import { Flummox } from 'flummox';
import MessageActions from '../modules/message/MessageActions';
import MessageStore from '../modules/message/MessageStore';
import CounterActions from '../modules/counter/CounterActions';
import CounterStore from '../modules/counter/CounterStore';

class AppFlux extends Flummox {
  constructor() {
    super();
    this.createActions('messages', MessageActions);
    this.createStore('messages', MessageStore, this);
    this.createActions('counter', CounterActions);
    this.createStore('counter', CounterStore, this);
  }
}

export default AppFlux;
