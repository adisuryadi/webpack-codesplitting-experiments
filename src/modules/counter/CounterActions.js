import { Actions } from 'flummox';

class CounterActions extends Actions {
  increment() {
    return true;
  }

  decrement() {
    return true;
  }

  incrementAsync() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, 1000)
    });
  }
}

export default CounterActions;
