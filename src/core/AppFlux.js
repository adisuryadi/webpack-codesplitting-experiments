import { Flummox } from 'flummox';
import MessageActions from '../message/MessageActions';
import MessageStore from '../message/MessageStore';
import CounterActions from '../counter/CounterActions';
import CounterStore from '../counter/CounterStore';

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
