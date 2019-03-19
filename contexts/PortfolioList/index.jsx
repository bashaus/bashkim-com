import PropTypes from 'prop-types';
import React from 'react';
import CaseStudyPropType from '%prismic/content-types/case_study/prop-type';
import TechnologyPropType from '%prismic/content-types/technology/prop-type';
import { PortfolioListReducer } from './reducer';

export const PortfolioListContext = React.createContext();

const PortfolioListProvider = (props) => {
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

  /*
  React.useEffect(() => {
    localStorage.setItem('books', JSON.stringify(state));
  }, [state]);
  */

  return (
    <PortfolioListContext.Provider value={{ state, dispatch }}>
      {children}
    </PortfolioListContext.Provider>
  );
};

PortfolioListProvider.propTypes = {
  children: PropTypes.node.isRequired,
  caseStudies: PropTypes.arrayOf(CaseStudyPropType).isRequired,
  technologies: PropTypes.arrayOf(TechnologyPropType).isRequired,
};

export default PortfolioListProvider;
