import { fork, all } from 'redux-saga/effects';
import { sagas as newsSaga } from './news';

function combineSagas(...sagas) {
  return function* rootSaga() {
    yield all(
      sagas.reduce((previousSagas, saga) => [
        ...previousSagas,
        ...Object.keys(saga).map(
          key => fork(saga[key]),
        ),
      ], []),
    );
  };
}

export default combineSagas(
  newsSaga,
  // ...other sagas,
);
