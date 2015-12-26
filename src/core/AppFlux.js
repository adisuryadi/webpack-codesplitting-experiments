import { Flummox } from 'flummox';
import MessageActions from '../message/MessageActions';
import MessageStore from '../message/MessageStore';

class AppFlux extends Flummox {
  constructor() {
    super();

    this.createActions('messages', MessageActions);
    this.createStore('messages', MessageStore, this);
  }
}

export default AppFlux;
