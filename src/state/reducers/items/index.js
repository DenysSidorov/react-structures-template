import {
  CHANGE_FETCHING_STATE,
  CHANGE_SEARCH_VALUE,
  CHANGE_ERROR_VALUE,
  CHANGE_CODES_VALUES,
  CHANGE_CURRENT_ITEM,
} from '../../action-variables/index';
import cities from '../../../api/mocks/cities';

const initState = {
  currentItem: {},
  searchValue: '',
  searchError: '',
  isFetching: false,
  zipCodeItems: cities || [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case CHANGE_FETCHING_STATE:
      return {...state, isFetching: action.payload};
    case CHANGE_SEARCH_VALUE:
      return {...state, searchValue: action.payload};
    case CHANGE_ERROR_VALUE:
      return {...state, searchError: action.payload};
    case CHANGE_CODES_VALUES:
      return {...state, zipCodeItems: action.payload};
    case CHANGE_CURRENT_ITEM:
      return {...state, currentItem: action.payload};
    default:
      return state;
  }
};

export const changeFetchingState = stateBool => ({
  type: CHANGE_FETCHING_STATE,
  payload: stateBool,
});

export const changeSearchValue = searchString => ({
  type: CHANGE_SEARCH_VALUE,
  payload: searchString,
});

export const changeErrorValue = errorString => ({
  type: CHANGE_ERROR_VALUE,
  payload: errorString,
});

export const changeZIPCodes = codesArray => ({
  type: CHANGE_CODES_VALUES,
  payload: codesArray,
});

export const changeCurrentItem = currentItemObject => ({
  type: CHANGE_CURRENT_ITEM,
  payload: currentItemObject,
});
