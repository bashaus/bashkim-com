import React from 'react';

import { NavigationContext } from '%contexts/Navigation';
import * as NavigationActions from '%contexts/Navigation/actions';

import styles from './styles.scss';

export default class HeaderIntersection extends React.PureComponent {
  constructor(...args) {
    super(...args);

    if (typeof IntersectionObserver !== 'undefined') {
      this.intersectionObserver = new IntersectionObserver(
        this.processIntersectionEntries,
      );
    }

    this.ref = React.createRef();
  }

  componentDidMount() {
    if (this.intersectionObserver && this.ref.current) {
      this.intersectionObserver.observe(this.ref.current);
    }
  }

  componentWillUnmount() {
    if (this.intersectionObserver && this.ref.current) {
      this.intersectionObserver.unobserve(this.ref.current);
    }
  }

  processIntersectionEntries = (entries) => {
    const { dispatch } = this.context;
    entries.forEach(
      (entry) => dispatch({
        type: NavigationActions.SET_AT_TOP,
        payload: entry.isIntersecting,
      }),
    );
  }

  render() {
    return (
      <div ref={this.ref} className={styles.HeaderIntersection} />
    );
  }
}

HeaderIntersection.contextType = NavigationContext;
