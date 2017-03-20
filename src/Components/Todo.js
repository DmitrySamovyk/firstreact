import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class Todo extends Component {
  render() {
    return (
      <li
        className={this.props.removed ? 'none' : ''
        }>
        <p
          onClick={this.props.onClick}
          style={{
            textDecoration: this.props.completed ? 'line-through' : 'none',
            cursor: this.props.completed ? 'default' : 'pointer'
        }}>
          {this.props.text}
        </p>
        <button
          onClick={this.props.onRemove}>
          X
        </button>
      </li>
    );
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  removed: PropTypes.bool.isRequired
};
