import React from 'react';
import ReactTags from 'react-tag-autocomplete';

import ToggleButton from '%components/ToggleButton';
import ToggleGroup from '%components/ToggleGroup';

import { PortfolioListContext } from '%contexts/PortfolioList';
import * as PortfolioActions from '%contexts/PortfolioList/actions';

import styles from './styles.scss';

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

class PortfolioFilter extends React.PureComponent {
  constructor(...args) {
    super(...args);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDisplayChange = this.handleDisplayChange.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
    this.handlePhysicalComputingClick = this.handlePhysicalComputingClick.bind(this);
    this.handleWebDevelopmentClick = this.handleWebDevelopmentClick.bind(this);
  }

  setTags(tags) {
    const { dispatch } = this.context;
    dispatch({
      type: PortfolioActions.SET_FILTERS,
      payload: { filters: tags },
    });
  }

  handleDelete(i) {
    const { state } = this.context;
    const { filters } = state;
    const filtersCopy = filters.slice(0);
    filtersCopy.splice(i, 1);
    this.setTags(filtersCopy);
  }

  handleAddition(tag) {
    const { state } = this.context;
    const { filters } = state;
    this.setTags([].concat(filters, tag));
  }

  handleDisplayChange(e) {
    const { dispatch } = this.context;
    dispatch({
      type: PortfolioActions.SET_DISPLAY,
      payload: { display: e.currentTarget.value },
    });
  }

  handleSortChange(e) {
    const { dispatch } = this.context;
    dispatch({
      type: PortfolioActions.SET_SORT,
      payload: { sort: e.currentTarget.value },
    });
  }

  handlePhysicalComputingClick() {
    this.setTags([TAGS.PHYSICAL_COMPUTING]);
  }

  handleWebDevelopmentClick() {
    this.setTags([TAGS.WEB_DEVELOPMENT]);
  }

  render() {
    const { state } = this.context;
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
            tags={filters}
            suggestions={technologies}
            placeholder={placeholder}
            handleDelete={this.handleDelete}
            handleAddition={this.handleAddition}
          />

          { filters.length === 0 && (
            <p className={styles.inlineSuggestions}>
              <span>Stuck for ideas? Check out </span>
              <button type="button" onClick={this.handlePhysicalComputingClick}>
                { TAGS.PHYSICAL_COMPUTING.name }
              </button>
              <span> or </span>
              <button type="button" onClick={this.handleWebDevelopmentClick}>
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
            onChange={this.handleDisplayChange}
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
            onChange={this.handleSortChange}
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
  }
}

PortfolioFilter.contextType = PortfolioListContext;

export default PortfolioFilter;
