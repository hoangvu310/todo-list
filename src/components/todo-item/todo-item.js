import React from 'react';

import './todo-item.css';

export const TodoItem = ({ label, done, onDelete, onDone }) => {
  let classNames = 'todo-item';
  if (done) {
    classNames += ' todo-item--done';
  }
  return (
    <li className={classNames}>
      <p className="todo-item__label" onClick={onDone}>
        {label}
      </p>
      <button
        className="todo-item__delete"
        type="button"
        onClick={onDelete}
      >
        Delete
      </button>
    </li>
  );
};