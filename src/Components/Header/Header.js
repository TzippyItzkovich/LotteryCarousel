import React from 'react';
import Search from '../Search/Search.js';
import Sort from '../Sort/Sort.js';

const Header = () => {
  return (
    <div className="header">
      <Search />
      <Sort />
    </div>
  );
};

export default Header;
