import PropTypes from 'prop-types';
import React from 'react';
import CaseStudyPropType from '%prismic/content-types/case_study/prop-type';
import TechnologyPropType from '%prismic/content-types/technology/prop-type';
import PortfolioListReducer from './reducer';

export const PortfolioListContext = React.createContext();

export default function PortfolioListStore(props) {
  const { children, technologies, caseStudies } = props;

  const [state, dispatch] = React.useReducer(
    PortfolioListReducer,
    [],
    () => ({
      sort: 'launched',
      display: 'icon',
      filters: [],
      caseStudies,
      technologies,
    }),
  );

  return (
    <PortfolioListContext.Provider value={{ state, dispatch }}>
      {children}
    </PortfolioListContext.Provider>
  );
};

PortfolioListStore.propTypes = {
  children: PropTypes.node.isRequired,
  caseStudies: PropTypes.arrayOf(CaseStudyPropType).isRequired,
  technologies: PropTypes.arrayOf(TechnologyPropType).isRequired,
};
