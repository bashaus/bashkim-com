import React, { useContext, useEffect, useCallback } from 'react';

import { NavigationContext } from '%contexts/Navigation';
import * as NavigationActions from '%contexts/Navigation/actions';

import styles from './styles.module.scss';

const HeaderIntersection = (): JSX.Element => {
  const { dispatch: navigationDispatch } = useContext(NavigationContext);
  const ref = React.useRef<HTMLDivElement>(null);

  const processIntersectionEntries = useCallback(
    (entries: Array<IntersectionObserverEntry>): void => {
      entries.forEach((entry) => navigationDispatch({
        type: NavigationActions.SET_AT_TOP,
        payload: entry.isIntersecting,
      }));
    },
    [navigationDispatch],
  );

  useEffect(() => {
    if (typeof IntersectionObserver === typeof undefined) {
      return (): void => {}; // IntersectionObserver not supported
    }

    const interactionObserver = new IntersectionObserver(
      processIntersectionEntries,
    );

    const { current } = ref;

    if (current) {
      interactionObserver.observe(current);
    }

    return (): void => {
      if (current) {
        interactionObserver.unobserve(current);
      }
    };
  }, [processIntersectionEntries]);

  return <div ref={ref} className={styles.HeaderIntersection} />;
};

export default HeaderIntersection;
