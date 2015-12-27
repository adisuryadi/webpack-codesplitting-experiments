import { Store } from 'flummox';

class CounterStore extends Store {
  constructor(flux) {
    super();

    this.state = {
      counter: 0
    };

    const messageActionIds = flux.getActionIds('counter');
    this.register(messageActionIds.decrement, this.handleDecrement);
    this.register(messageActionIds.increment, this.handleIncrement);
    this.register(messageActionIds.incrementAsync, this.handleIncrement);
  }

  handleDecrement() {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  handleIncrement() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
}

export default CounterStore;
