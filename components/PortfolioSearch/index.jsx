import React, { useContext } from 'react';

import PortfolioListBrick from '%components/PortfolioListBrick';
import PortfolioListRow from '%components/PortfolioListRow';
import PortfolioFilter from '%components/PortfolioFilter';

import { PortfolioListContext } from '%contexts/PortfolioList';

import styles from './styles.module.scss';

const DISPLAY_MODE = {
  ICON: 'icon',
  LIST: 'list',
};

const SORT_MODE = {
  ALPHABETICAL: 'alphabetical',
  LAUNCHED: 'launched',
};

const RenderComponents = {
  [DISPLAY_MODE.ICON]: PortfolioListBrick,
  [DISPLAY_MODE.LIST]: PortfolioListRow,
};

const SORT = {
  [SORT_MODE.ALPHABETICAL]: (a, b) => {
    if (a.data.meta_title < b.data.meta_title) return -1;
    if (a.data.meta_title > b.data.meta_title) return 1;
    return 0;
  },

  [SORT_MODE.LAUNCHED]: (a, b) => {
    if (a.data.info_launch_date < b.data.info_launch_date) return 1;
    if (a.data.info_launch_date > b.data.info_launch_date) return -1;

    /* For items with the same date */
    if (a.data.meta_title < b.data.meta_title) return -1;
    if (a.data.meta_title > b.data.meta_title) return 1;

    return 0;
  },
};

const PortfolioSearch = () => {
  const { state } = useContext(PortfolioListContext);
  const {
    display, sort, filters, caseStudies, technologies,
  } = state;

  const RenderComponent = RenderComponents[display];

  const filteredCaseStudies = caseStudies.filter(
    (caseStudy) => filters.reduce(
      (exists, filter) => {
        if (!exists) {
          return false;
        }

        const { type: filterType, value: filterValue } = filter.id;
        switch (filterType) {
          case 'technology':
            return caseStudy.data.info_technologies.find(
              (tech) => tech.info_technology.id === filterValue,
            );

          case 'tag':
            return caseStudy.tags.includes(filterValue);

          default:
            return false;
        }
      },
      true,
    ),
  ).sort(SORT[sort]);

  return (
    <>
      <PortfolioFilter technologies={technologies} />

      { filteredCaseStudies.length !== caseStudies.length && (
        <div className={styles.pagination}>
          {`Showing ${filteredCaseStudies.length} of ${caseStudies.length} case studies`}
        </div>
      ) }

      <ul className={`${styles.PortfolioSearch} ${styles[display]}`}>
        { filteredCaseStudies.map((caseStudy) => (
          <li key={caseStudy.uid}>
            <RenderComponent caseStudy={caseStudy} technologies={technologies} />
          </li>
        )) }
      </ul>
    </>
  );
};

export default PortfolioSearch;
