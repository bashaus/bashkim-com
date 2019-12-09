import PropTypes from 'prop-types';
import React from 'react';
import { CookiesReducer } from './reducer';

export const CookiesContext = React.createContext();

export default function CookiesProvider(props) {
  const { children } = props;

  const [state, dispatch] = React.useReducer(
    CookiesReducer,
    [],
    () => ({
      isDismissed: false,
    }),
  );

  /*
  React.useEffect(() => {
    localStorage.setItem('books', JSON.stringify(state));
  }, [state]);
  */

  return (
    <CookiesContext.Provider value={{ state, dispatch }}>
      {children}
    </CookiesContext.Provider>
  );
}

CookiesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
