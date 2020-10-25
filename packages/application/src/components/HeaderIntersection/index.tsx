import React, { useContext, useEffect, useCallback } from "react";
import debounce from "lodash.debounce";

import { NavigationContext } from "%contexts/Navigation";
import * as NavigationActions from "%contexts/Navigation/actions";

import styles from "./styles.module.scss";
import { ScrollDirection } from "%contexts/Navigation/types";

let lastScrollTop = 0;

const HeaderIntersection = (): JSX.Element => {
  const { dispatch: navigationDispatch } = useContext(NavigationContext);
  const ref = React.useRef<HTMLDivElement>(null);

  /* SCROLL_AT_TOP */

  const processIntersectionEntries = useCallback(
    (entries: Array<IntersectionObserverEntry>): void => {
      entries.forEach((entry) =>
        navigationDispatch({
          type: NavigationActions.SET_SCROLL_AT_TOP,
          payload: entry.isIntersecting,
        })
      );
    },
    [navigationDispatch]
  );

  useEffect(() => {
    if (typeof IntersectionObserver === typeof undefined) {
      return (): void => {
        /* IntersectionObserver not supported */
      };
    }

    const interactionObserver = new IntersectionObserver(
      processIntersectionEntries
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

  /* SCROLL DIRECTION */

  const handleScroll = debounce(
    () => {
      const { scrollTop } = document.documentElement;

      navigationDispatch({
        type: NavigationActions.SET_SCROLL_DIRECTION,
        payload:
          lastScrollTop < scrollTop ? ScrollDirection.UP : ScrollDirection.DOWN,
      });

      lastScrollTop = scrollTop;
    },
    50,
    { leading: true, trailing: true, maxWait: 200 }
  );

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* Render */

  return <div ref={ref} className={styles.HeaderIntersection} />;
};

export default HeaderIntersection;
