import { combineReducers } from 'redux';

import cookiesReducer from '%reducers/cookies';
import headerReducer from '%reducers/header';
import menuReducer from '%reducers/menu';
import routerReducer from '%reducers/router';
import prismicReducer from '%prismic/store/reducer';

export default combineReducers({
  cookies: cookiesReducer,
  header: headerReducer,
  menu: menuReducer,
  prismic: prismicReducer,
  router: routerReducer,
});
