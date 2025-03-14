import { useCallback, useEffect, useRef } from "react";

import { NavigationActionSetScrollAtTop } from "@/contexts/Navigation/actions";
import { useNavigation } from "@/contexts/Navigation/context";

import styles from "./styles.module.scss";

export default function HeaderIntersection() {
  const { navigationDispatch } = useNavigation();
  const ref = useRef<HTMLDivElement>(null);

  const processIntersectionEntries = useCallback(
    (entries: Array<IntersectionObserverEntry>): void => {
      entries.forEach((entry) =>
        navigationDispatch(
          NavigationActionSetScrollAtTop({
            scrollAtTop: entry.isIntersecting,
          }),
        ),
      );
    },
    [navigationDispatch],
  );

  useEffect(() => {
    if (typeof IntersectionObserver === typeof undefined) {
      return (): void => {
        /* IntersectionObserver not supported */
      };
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

  return <div ref={ref} className={styles["HeaderIntersection"]} />;
}
