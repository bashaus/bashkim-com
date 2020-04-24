import React, { useContext } from 'react';
import ReactTags from 'react-tag-autocomplete';

import ToggleButton from '%components/ToggleButton';
import ToggleGroup from '%components/ToggleGroup';

import { PortfolioListContext } from '%contexts/PortfolioList';
import * as PortfolioActions from '%contexts/PortfolioList/actions';

import styles from './styles.module.scss';

const TAGS = {
  PHYSICAL_COMPUTING: {
    id: {
      type: 'tag',
      value: 'physical computing',
    },
    name: 'Physical computing',
  },
  WEB_DEVELOPMENT: {
    id: {
      type: 'tag',
      value: 'web development',
    },
    name: 'Web development',
  },
};

const PortfolioFilter = () => {
  const { state, dispatch } = useContext(PortfolioListContext);

  const setTags = (tags) => {
    dispatch({
      type: PortfolioActions.SET_FILTERS,
      payload: { filters: tags },
    });
  };

  const handleReactTagsDelete = (i) => {
    const { filters } = state;
    const filtersCopy = filters.slice(0);
    filtersCopy.splice(i, 1);
    setTags(filtersCopy);
  };

  const handleReactTagsAdd = (tag) => {
    const { filters } = state;
    setTags([].concat(filters, tag));
  };

  const handleDisplayChange = (e) => {
    dispatch({
      type: PortfolioActions.SET_DISPLAY,
      payload: { display: e.currentTarget.value },
    });
  };

  const handleSortChange = (e) => {
    dispatch({
      type: PortfolioActions.SET_SORT,
      payload: { sort: e.currentTarget.value },
    });
  };

  const handlePhysicalComputingClick = () => {
    setTags([TAGS.PHYSICAL_COMPUTING]);
  };

  const handleWebDevelopmentClick = () => {
    setTags([TAGS.WEB_DEVELOPMENT]);
  };

  const {
    display, sort, filters, technologies,
  } = state;

  let placeholder = '';
  if (filters.length === 0) {
    placeholder = 'Filter by keyword or technology (e.g.: PHP)';
  }

  return (
    <div className={styles.PortfolioFilter}>
      <div className={styles.tags}>
        <ReactTags
          autofocus={false}
          tags={filters}
          suggestions={technologies}
          placeholder={placeholder}
          handleDelete={handleReactTagsDelete}
          handleAddition={handleReactTagsAdd}
        />

        { filters.length === 0 && (
          <p className={styles.inlineSuggestions}>
            <span>Stuck for ideas? Check out </span>
            <button type="button" onClick={handlePhysicalComputingClick}>
              { TAGS.PHYSICAL_COMPUTING.name }
            </button>
            <span> or </span>
            <button type="button" onClick={handleWebDevelopmentClick}>
              { TAGS.WEB_DEVELOPMENT.name }
            </button>
            .
          </p>
        ) }
      </div>

      <div className={styles.display}>
        <ToggleGroup
          initialValue={display}
          label="Display"
          onChange={handleDisplayChange}
        >
          <ToggleButton value="icon">
            <img
              src="/static/vectors/display/icon.svg"
              alt="Display as Icons"
              title="Display as Icons"
              className={styles.icon}
            />
          </ToggleButton>

          <ToggleButton value="list">
            <img
              src="/static/vectors/display/list.svg"
              alt="Display as List"
              title="Display as List"
              className={styles.icon}
            />
          </ToggleButton>
        </ToggleGroup>
      </div>

      <div className={styles.sort}>
        <ToggleGroup
          initialValue={sort}
          label="Sort by"
          onChange={handleSortChange}
        >
          <ToggleButton value="alphabetical">
            <img
              src="/static/vectors/sort/alphabetical.svg"
              alt="Sort alphabetically"
              title="Sort alphabetically"
              className={styles.icon}
            />
          </ToggleButton>

          <ToggleButton value="launched">
            <img
              src="/static/vectors/sort/launched.svg"
              alt="Sort by Launch Date"
              title="Sort by Launch Date"
              className={styles.icon}
            />
          </ToggleButton>
        </ToggleGroup>
      </div>
    </div>
  );
};

export default PortfolioFilter;
