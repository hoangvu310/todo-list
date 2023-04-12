import React, { Component } from 'react';

import Header from '../header';
import TodoList from '../todo-list';
import TodoAdd from '../todo-add';
import TodoSearch from '../todo-search';
import TodoFilters from '../todo-filters';

import './app.css';

export class App extends Component {
  state = {
    items: [
      { id: 1, label: 'First to do item', done: true },
      { id: 2, label: 'Second to do item', done: true },
      { id: 3, label: 'Third to do item', done: false },
    ],
    search: '',
    filter: 'all',
  };

  idCounter = 100;

  createItem = label => {
    return {
      id: ++this.idCounter,
      label,
      done: false,
    };
  };

  handleItemAdd = label => {
    this.setState(prevState => {
      const newItem = this.createItem(label);
      const items = [...prevState.items, newItem];
      return { items };
    });
  };

  handleItemDelete = id => {
    this.setState(prevState => {
      const itemIndex = prevState.items.findIndex(
        item => item.id === id,
      );
      const items = [
        ...prevState.items.slice(0, itemIndex),
        ...prevState.items.slice(itemIndex + 1),
      ];
      return { items };
    });
  };

  handleToggleDone = id => {
    this.setState(prevState => {
      const itemIndex = prevState.items.findIndex(
        item => item.id === id,
      );
      const oldItem = prevState.items[itemIndex];
      const newValue = !oldItem.done;
      const changedItem = { ...oldItem, done: newValue };
      const items = [
        ...prevState.items.slice(0, itemIndex),
        changedItem,
        ...prevState.items.slice(itemIndex + 1),
      ];
      return { items };
    });
  };

  handleSearchChange = search => {
    this.setState({ search });
  };

  handleFilterChange = filter => {
    this.setState({ filter });
  };

  searchItems = (items, search) => {
    return items.filter(({ label }) =>
      label.toLowerCase().includes(search.toLowerCase()),
    );
  };

  filterItems = (items, filter) => {
    switch (filter) {
      case 'all':
        return items;
      case 'done':
        return items.filter(({ done }) => done);
      case 'active':
        return items.filter(({ done }) => !done);
      default:
        return items;
    }
  };

  render() {
    const { items, search, filter } = this.state;
    const doneItemsCount = items.filter(({ done }) => done).length;
    const activeItemsCount = items.length - doneItemsCount;
    const visibleItems = this.searchItems(
      this.filterItems(items, filter),
      search,
    );
    return (
      <div className="app">
        <Header done={doneItemsCount} active={activeItemsCount} />
        <main>
          <TodoSearch onSearchChange={this.handleSearchChange} />
          <TodoFilters
            onFilterChange={this.handleFilterChange}
            filter={filter}
          />
          <TodoList
            items={visibleItems}
            onItemDelete={this.handleItemDelete}
            onToggleDone={this.handleToggleDone}
          />
          <TodoAdd onItemAdd={this.handleItemAdd} />
        </main>
      </div>
    );
  }
}