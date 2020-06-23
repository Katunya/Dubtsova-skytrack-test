import * as React from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav>
        <NavLink to='/'>Главная</NavLink>
        <NavLink to='/history'>История</NavLink>
      </nav>
    </div>
  );
};

export default Header;
