import React, { PropTypes } from 'react';

const Messages = React.createClass({
  propTypes: {
    messages: PropTypes.array
  },

  render() {
    const messages = this.props.messages;
    return (
        <div>
          {messages && messages.map(msg =>
            <div>{msg}</div>
          )}
        </div>
    );
  }
});

export default Messages;
