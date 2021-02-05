import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav className="header">
    <h1>Expensify</h1>
      <NavLink exact to="/" activeClassName="is-active">Home</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create</NavLink>
  </nav>
)

export default Header;