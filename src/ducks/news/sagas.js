import {
  takeEvery,
  put,
  call,
} from 'redux-saga/effects';
import instance, { baseURL } from '../../utils/api';
import {
  getArticlesDataSuccess,
  getArticlesDataFailed,
} from './actions';
import * as types from './types';

function* getArticlesData({ payload }) {
  try {
    const { data } = yield call(
      instance.get,
      `${baseURL}/${payload.url}`,
      {
        params: {
          page: payload.page,
          pageSize: 10,
        },
      }
    );
    localStorage.setItem('news-article', JSON.stringify(data));
    yield put(getArticlesDataSuccess(data));
  } catch (error) {
    const cachedArticles = localStorage.getItem('news-article');
    if (cachedArticles) {
      yield put(getArticlesDataSuccess(JSON.parse(cachedArticles)));
    } else {
      yield put(getArticlesDataFailed(error));
    }
  }
}

export default function* newsSagaWatcher() {
  yield takeEvery(types.GET_ARTICLES_DATA, getArticlesData);
}
