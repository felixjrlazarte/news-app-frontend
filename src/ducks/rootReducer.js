import { combineReducers } from 'redux';
import { reducer as news } from './news';

const rootReducer = combineReducers({
  news,
});

export default rootReducer;
