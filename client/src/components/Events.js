import React from 'react';

export default (props) => {
  return (
    <div>
    <h2>Welcome Home!</h2>

    {this.props.event.map(event => (
          <div key={event.id}>
            <p>{event.text}
          </div>
        ))}
  </div>
  )
}

