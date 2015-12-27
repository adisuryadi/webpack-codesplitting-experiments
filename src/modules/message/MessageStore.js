import { Store } from 'flummox';

class MessageStore extends Store {
  constructor(flux) {
    super();

    this.state = {
      messages: [
        'first message',
        'second message'
      ]
    };

    const messageActionIds = flux.getActionIds('messages');
    this.register(messageActionIds.createMessage, this.handleNewMessage);
  }

  handleNewMessage(message) {
    const content = message.content;
    this.setState({
      messages: this.state.messages.concat([content])
    })
  }
}

export default MessageStore;
