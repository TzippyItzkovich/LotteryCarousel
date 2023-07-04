import { combineReducers } from 'redux';
import { SET_SEARCH_TEXT, SET_SORT_BY, SET_LOTTERY_DATA } from './actions';

const initialState = {
  searchText: '',
  sortBy: '',
  lotteryData: [], // Initial empty array
};

const searchTextReducer = (state = initialState.searchText, action) => {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return action.payload;
    default:
      return state;
  }
};

const sortByReducer = (state = initialState.sortBy, action) => {
  switch (action.type) {
    case SET_SORT_BY:
      return action.payload;
    default:
      return state;
  }
};

const lotteryDataReducer = (state = initialState.lotteryData, action) => {
  switch (action.type) {
    case SET_LOTTERY_DATA:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  searchText: searchTextReducer,
  sortBy: sortByReducer,
  lotteryData: lotteryDataReducer,
});

export default rootReducer;
