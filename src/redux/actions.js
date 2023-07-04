export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
export const SET_SORT_BY = 'SET_SORT_BY';
export const SET_LOTTERY_DATA = 'SET_LOTTERY_DATA';

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
