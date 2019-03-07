import { combineReducers } from 'redux';

import cookiesReducer from './reducers/cookies';
import guiReducer from './reducers/gui';
import routerReducer from './reducers/router';

export default combineReducers({
  cookies: cookiesReducer,
  gui: guiReducer,
  router: routerReducer,
});
