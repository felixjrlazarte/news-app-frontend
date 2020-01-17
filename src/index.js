import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from '../src/ducks/rootReducer';
import rootSaga from '../src/ducks/rootSaga';

const sagaMiddleware = createSagaMiddleware();

let middlewares = applyMiddleware(sagaMiddleware);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(middlewares),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
