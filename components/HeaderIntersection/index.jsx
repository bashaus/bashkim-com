import React, { useContext, useEffect } from 'react';

import { NavigationContext } from '%contexts/Navigation';
import * as NavigationActions from '%contexts/Navigation/actions';

import styles from './styles.module.scss';

const HeaderIntersection = () => {
  const { dispatch: navigationDispatch } = useContext(NavigationContext);
  const ref = React.useRef();

  const processIntersectionEntries = (entries) => {
    entries.forEach(
      (entry) => navigationDispatch({
        type: NavigationActions.SET_AT_TOP,
        payload: entry.isIntersecting,
      }),
    );
  };

  useEffect(() => {
    let interactionObserver;

    if (typeof IntersectionObserver !== typeof undefined) {
      interactionObserver = new IntersectionObserver(
        processIntersectionEntries,
      );
    }

    if (interactionObserver && ref.current) {
      interactionObserver.observe(ref.current);
    }

    return () => {
      if (interactionObserver && ref.current) {
        interactionObserver.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={styles.HeaderIntersection} />
  );
};

export default HeaderIntersection;
