import { combineReducers } from 'redux';
import bucketlistReducer from './BucketlistReducer';
import itemReducer from './ItemReducer';
import authReducer from './AuthReducer';

const rootReducer = combineReducers({
  bucketlistView: bucketlistReducer,
  itemView: itemReducer,
  authView: authReducer
});

export default rootReducer;
