import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortBy } from '../../redux/actions';

const Sort = () => {
  const sortBy = useSelector((state) => state.sortBy);
  const dispatch = useDispatch();

  const handleSortChange = (e) => {
    dispatch(setSortBy(e.target.value));
  };

  return (
    <select value={sortBy} onChange={handleSortChange}>
      <option value="">Sort By</option>
      <option value="date">Date</option>
      <option value="jackpot">Jackpot</option>
      <option value="name">Lottery Name</option>
    </select>
  );
};

export default Sort;
