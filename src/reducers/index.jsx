import articleListReducer from './article-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterTicketList: articleListReducer
});

export default rootReducer;
