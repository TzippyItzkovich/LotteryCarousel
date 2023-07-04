import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchText } from '../../redux/actions';

const Search = () => {
  const searchText = useSelector((state) => state.searchText);
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setSearchText(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search by lottery name..."
      value={searchText}
      onChange={handleSearchChange}
    />
  );
};

export default Search;
