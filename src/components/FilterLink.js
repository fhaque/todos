import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import { NavLink } from 'react-router-dom';

const FilterLink = ({ filter, children }) => (
  <NavLink 
    to={filter === 'all' ? '' : filter}
    activeStyle={{ 
      textDecoration: 'none',
      color: 'black',
    }}
  >
    {children}
  </NavLink>
)

export default FilterLink;
