import { combineReducers } from 'redux';

import cookiesReducer from './reducers/cookies';
import guiReducer from './reducers/gui';

export default combineReducers({
  cookies: cookiesReducer,
  gui: guiReducer,
});
