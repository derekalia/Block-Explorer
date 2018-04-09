import { combineReducers } from 'redux';
import blocks from './blocks';
import navbar from './navbar';

const rootReducer = combineReducers({
  blocks,
  navbar
});

export default rootReducer;
