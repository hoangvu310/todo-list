import React from 'react';
import './todo-filters.css';

export const TodoFilters = ({ filter, onFilterChange }) => {
  const filtersButtons = [
    { label: 'All', id: 'all' },
    { label: 'Done', id: 'done' },
    { label: 'Active', id: 'active' },
  ];

  const buttons = filtersButtons.map(({ label, id }) => {
    const isActive = id === filter;
    const classNames =
      'todo-filter' + (isActive ? ' todo-filter--active' : '');
    const button = (
      <button
        type="button"
        key={id}
        class={classNames}
        onClick={() => onFilterChange(id)}
      >
        {label}
      </button>
    );
    return button;
  });

  return <div class="todo-filters">{buttons}</div>;
};