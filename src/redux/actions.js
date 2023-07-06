import { SET_SEARCH_TEXT, SET_SORT_BY, SET_LOTTERY_DATA } from './actionTypes';

export const setSearchText = (searchText) => ({
  type: SET_SEARCH_TEXT,
  payload: searchText,
});

export const setSortBy = (sortBy) => ({
  type: SET_SORT_BY,
  payload: sortBy,
});

export const setLotteryData = (data) => ({
  type: SET_LOTTERY_DATA,
  payload: data,
});
