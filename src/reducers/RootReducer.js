import { combineReducers } from 'redux';
import bucketlistReducer from './BucketlistReducer';
import itemReducer from './ItemReducer';

const rootReducer = combineReducers({
  bucketlistView: bucketlistReducer,
  itemView: itemReducer
});

export default rootReducer;
