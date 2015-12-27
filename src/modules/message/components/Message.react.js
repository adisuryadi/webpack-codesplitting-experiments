import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

const Message = React.createClass({
  propTypes: {
    flux: PropTypes.object,
    messages: PropTypes.array
  },

  handleSubmit() {
    const flux = this.props.flux;
    const input = ReactDOM.findDOMNode(this.refs.msgInput);
    flux.getActions('messages').createMessage(input.value);
    input.value = '';
    input.focus();
  },

  render() {
    const messages = this.props.messages;
    return (
        <div>
          <ul>
            {messages && messages.map((msg, i) =>
                <li key={i}>{msg}</li>
            )}
          </ul>
          <input type="text" ref="msgInput" />
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </div>
    );
  }
});

export default Message;
