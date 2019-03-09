import PropTypes from 'prop-types';
import React from 'react';
import ReactTags from 'react-tag-autocomplete';

import ToggleButton from 'components/ToggleButton';
import ToggleGroup from 'components/ToggleGroup';

import allTags from 'data/portfolio/tags.json';

import styles from './styles.scss';

const TAG_PHYSICAL_COMPUTING = 'physical-computing';
const TAG_WEB_DEVELOPMENT = 'web-development';

export default class PortfolioFilter extends React.PureComponent {
  constructor(...args) {
    super(...args);

    this.state = {
      display: 'icon',
      sort: 'launched',
      tags: [],
      suggestions: Object.entries(allTags).map(([id, tag]) => ({
        id,
        name: tag.name,
      })),
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDisplayChange = this.handleDisplayChange.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
    this.handlePhysicalComputingClick = this.handlePhysicalComputingClick.bind(this);
    this.handleWebDevelopmentClick = this.handleWebDevelopmentClick.bind(this);
  }

  componentDidUpdate() {
    const { onChange } = this.props;
    onChange(this.state);
  }

  handleDelete(i) {
    const { tags } = this.state;
    const tagsCopy = tags.slice(0);
    tagsCopy.splice(i, 1);
    this.setState({ tags: tagsCopy });
  }

  handleAddition(tag) {
    const { tags } = this.state;
    this.setState({ tags: [].concat(tags, tag) });
  }

  handleDisplayChange(e) {
    this.setState({ display: e.currentTarget.value });
  }

  handleSortChange(e) {
    this.setState({ sort: e.currentTarget.value });
  }

  setTag(tag) {
    this.setState({
      tags: [{ id: tag, name: allTags[tag].name }],
    });
  }

  handlePhysicalComputingClick() {
    this.setTag(TAG_PHYSICAL_COMPUTING);
  }

  handleWebDevelopmentClick() {
    this.setTag(TAG_WEB_DEVELOPMENT);
  }

  render() {
    const {
      display, sort, suggestions, tags,
    } = this.state;

    let placeholder = '';

    if (tags.length === 0) {
      placeholder = 'Filter by keyword or technology (e.g.: PHP)';
    }

    return (
      <div className={styles.PortfolioFilter}>
        <div className={styles.tags}>
          <ReactTags
            tags={tags}
            suggestions={suggestions}
            placeholder={placeholder}
            handleDelete={this.handleDelete}
            handleAddition={this.handleAddition}
          />

          {tags.length === 0 && (
            <p className={styles.inlineSuggestions}>
              {'Stuck for ideas? Check out '}
              <button type="button" onClick={this.handlePhysicalComputingClick}>
                {allTags[TAG_PHYSICAL_COMPUTING].name}
              </button>
              {' or '}
              <button type="button" onClick={this.handleWebDevelopmentClick}>
                {allTags[TAG_WEB_DEVELOPMENT].name}
              </button>
              .
            </p>
          )}
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

PortfolioFilter.propTypes = {
  query: PropTypes.object,
  onChange: PropTypes.func,
};

PortfolioFilter.defaultProps = {
  onChange: () => {},
};
