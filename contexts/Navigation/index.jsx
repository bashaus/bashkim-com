import PropTypes from 'prop-types';
import React from 'react';

import { MenuReducer } from './reducer';

export const NavigationContext = React.createContext();

export default function NavigationProvider(props) {
  const { children } = props;

  const [state, dispatch] = React.useReducer(
    MenuReducer,
    [],
    () => ({
      isVisible: false,
    }),
  );

  /*
  React.useEffect(() => {
    localStorage.setItem('books', JSON.stringify(state));
  }, [state]);
  */

  return (
    <NavigationContext.Provider value={{ state, dispatch }}>
      {children}
    </NavigationContext.Provider>
  );
}

NavigationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
