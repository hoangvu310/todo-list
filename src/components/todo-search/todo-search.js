import React, { Component } from 'react';

import './todo-search.css';

export class TodoSearch extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target }) => {
    const { onSearchChange } = this.props;
    const value = target.value;
    this.setState({ value });
    onSearchChange(value);
  };

  render() {
    return (
      <div className="todo-search">
        <input
          className="todo-search__input"
          placeholder="Search"
          onChange={this.handleChange}
          value={this.state.value}
        />
      </div>
    );
  }
}