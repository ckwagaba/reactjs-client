import { combineReducers } from 'redux';
import bucketlistReducer from './BucketlistReducer';

const rootReducer = combineReducers({
  bucketlistView: bucketlistReducer
});

export default rootReducer;
