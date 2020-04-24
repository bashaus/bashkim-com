import * as actions from './actions';

const PortfolioListReducer = (state, action) => {
  switch (action.type) {
    case actions.SET_FILTERS:
      return { ...state, filters: action.payload.filters };

    case actions.SET_SORT:
      return { ...state, sort: action.payload.sort };

    case actions.SET_DISPLAY:
      return { ...state, display: action.payload.display };

    default:
      return state;
  }
};

export default PortfolioListReducer;
