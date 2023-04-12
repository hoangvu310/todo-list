import React, { Component } from 'react';

import './todo-add.css';

export class TodoAdd extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target }) => {
    const value = target.value;
    this.setState({ value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { onItemAdd } = this.props;
    const { value } = this.state;
    if (!this.state.value) {
      return;
    }
    onItemAdd(value);
    this.setState({
      value: '',
    });
  };

  render() {
    return (
      <div class="todo-add">
        <form class="todo-add__form" onSubmit={this.handleSubmit}>
          <input
            class="todo-add__input"
            placeholder="Add new task"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </form>
      </div>
    );
  }
}