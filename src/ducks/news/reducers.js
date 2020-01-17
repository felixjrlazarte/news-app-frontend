import * as types from './types';

const INITIAL_STATE = {
  totalResults: 0,
  isFetching: false,
  articles: [],
  params: {},
}

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case types.GET_ARTICLES_DATA: {
      return {
        ...state,
        isFetching: true,
        params: action.payload,
      }
    }
    case types.GET_ARTICLES_DATA_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        totalResults: action.payload.totalResults,
        articles: action.payload.articles
      }
    }
    case types.GET_ARTICLES_DATA_REJECTED: {
      return {
        ...state,
        isFetching: false,
      }
    }
    default: return state;
  }
}

export default reducer;
