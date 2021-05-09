import { useCallback, useContext, useEffect, useRef } from "react";
import debounce from "lodash.debounce";

import { NavigationContext } from "%contexts/Navigation/context";
import { NavigationActionsTypes } from "%contexts/Navigation/actions";

import { ScrollDirection } from "%contexts/Navigation/types";

import styles from "./styles.module.scss";

let lastScrollTop = 0;

export const HeaderIntersection = (): JSX.Element => {
  const { dispatch: navigationDispatch } = useContext(NavigationContext);
  const ref = useRef<HTMLDivElement>(null);

  /* SCROLL_AT_TOP */

  const processIntersectionEntries = useCallback(
    (entries: Array<IntersectionObserverEntry>): void => {
      entries.forEach((entry) =>
        navigationDispatch({
          type: NavigationActionsTypes.SET_SCROLL_AT_TOP,
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

  const handleScroll = useCallback(() => {
    debounce(
      () => {
        const { scrollTop } = document.documentElement;

        navigationDispatch({
          type: NavigationActionsTypes.SET_SCROLL_DIRECTION,
          payload:
            lastScrollTop < scrollTop
              ? ScrollDirection.UP
              : ScrollDirection.DOWN,
        });

        lastScrollTop = scrollTop;
      },
      50,
      { leading: true, trailing: true, maxWait: 200 }
    );
  }, [navigationDispatch]);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* Render */

  return <div ref={ref} className={styles.HeaderIntersection} />;
};
