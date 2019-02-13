import React from 'react';

import CaseStudyBrick from 'components/CaseStudyBrick';
import PortfolioFilter from 'components/PortfolioFilter';
import PortfolioList from 'components/PortfolioList';

import * as caseStudies from 'data/caseStudies';

import styles from './styles.scss';

const SORT_ALPHABETICAL = 'alphabetical';
const SORT_LAUNCHED = 'launched';

const SORT = {
  [SORT_ALPHABETICAL]: (a, b) => {
    if (a.meta.title < b.meta.title) return -1;
    if (a.meta.title > b.meta.title) return 1;
    return 0;
  },

  [SORT_LAUNCHED]: (a, b) => {
    if (a.date < b.date) return 1;
    if (a.date > b.date) return -1;

    /* For items with the same date */
    if (a.meta.title < b.meta.title) return -1;
    if (a.meta.title > b.meta.title) return 1;

    return 0;
  },
};

const DISPLAY_ICON = 'icon';
const DISPLAY_LIST = 'list';

const DISPLAY = {
  [DISPLAY_ICON]: CaseStudyBrick,
  [DISPLAY_LIST]: PortfolioList,
};

export default class ViewPortfolio extends React.PureComponent {
  constructor(...args) {
    super(...args);

    this.filterRef = React.createRef();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      display: DISPLAY_ICON,
      sort: SORT_LAUNCHED,
      tags: [],
    };
  }

  handleChange(state) {
    this.setState(state);
  }

  render() {
    const { display, sort, tags } = this.state;

    const RenderComponent = DISPLAY[display];
    let filteredCaseStudies = Object.values(caseStudies);

    if (tags) {
      filteredCaseStudies = filteredCaseStudies.filter(caseStudy => tags.reduce(
        (exists, current) => exists && caseStudy.tags.includes(current.id),
        true,
      ));
    }

    filteredCaseStudies.sort(SORT[sort]);

    return (
      <React.Fragment>
        <PortfolioFilter ref={this.filterRef} onChange={this.handleChange} />

        <ul className={`${styles.ViewPortfolio} ${styles[display]}`}>
          { filteredCaseStudies.map(caseStudy => (
            <li key={caseStudy.slug}>
              <RenderComponent caseStudy={caseStudy} />
            </li>
          )) }
        </ul>
      </React.Fragment>
    );
  }
}
