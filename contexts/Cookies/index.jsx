import PropTypes from 'prop-types';
import React from 'react';
import CookiesReducer from './reducer';

export const CookiesContext = React.createContext();

export default function CookiesStore(props) {
  const { children } = props;

  const [state, dispatch] = React.useReducer(
    CookiesReducer,
    [],
    () => ({
      isDismissed: false,
    }),
  );

  return (
    <CookiesContext.Provider value={{ state, dispatch }}>
      {children}
    </CookiesContext.Provider>
  );
}

CookiesStore.propTypes = {
  children: PropTypes.node.isRequired,
};
