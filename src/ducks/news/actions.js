import * as types from './types';

export const getArticlesData = data => ({
  type: types.GET_ARTICLES_DATA,
  payload: data,
});

export const getArticlesDataSuccess = data => ({
  type: types.GET_ARTICLES_DATA_SUCCESS,
  payload: data,
});

export const getArticlesDataFailed = data => ({
  type: types.GET_ARTICLES_DATA_REJECTED,
  payload: data,
});
