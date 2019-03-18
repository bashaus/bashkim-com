import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk';

import sagas from '%sagas';
import reducers from '%reducers';

const INIT_STATE = {};
const sagaMiddleware = createSagaMiddleware();

export default function initializeStore(initialState = INIT_STATE) {
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware, thunkMiddleware)),
  );

  sagaMiddleware.run(sagas);

  return store;
}
