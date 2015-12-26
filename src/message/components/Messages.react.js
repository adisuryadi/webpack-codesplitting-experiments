import React, { PropTypes } from 'react';

const Messages = React.createClass({
  propTypes: {
    messages: PropTypes.array
  },

  render() {
    const messages = this.props.messages;
    return (
        <ul>
          {messages && messages.map((msg, i) =>
            <li key={i}>{msg}</li>
          )}
        </ul>
    );
  }
});

export default Messages;
