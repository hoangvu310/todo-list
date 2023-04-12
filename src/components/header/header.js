import React from 'react';

import './header.css';

export const Header = props => {
  const { done, active } = props;
  return (
    <header className="header">
      <h1 className="header__title">To do List cua Hoang</h1>
      <p className="header__info">
        <span>Done: {done}</span> <span>Active: {active}</span>
      </p>
    </header>
  );
};
