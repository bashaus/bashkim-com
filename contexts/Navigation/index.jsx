import PropTypes from 'prop-types';
import React from 'react';
import NavigationReducer from './reducer';

export const NavigationContext = React.createContext();

const NavigationStore = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    NavigationReducer,
    [],
    () => ({
      isVisible: false,
    }),
  );

  return (
    <NavigationContext.Provider value={{ state, dispatch }}>
      {children}
    </NavigationContext.Provider>
  );
};

NavigationStore.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavigationStore;
