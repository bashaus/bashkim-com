import Link from "next/link";
import { useCallback, useContext, useState } from "react";
import AnimateHeight from "react-animate-height";

import { CookiesActionsTypes } from "%contexts/Cookies/actions";
import { CookiesContext } from "%contexts/Cookies/context";

import styles from "./styles.module.scss";

export type CookiesNoticeProps = {
  onDismiss?(): void;
};

export const CookiesNotice = ({
  onDismiss,
}: CookiesNoticeProps): JSX.Element | null => {
  const { state: cookiesState, dispatch: cookiesDispatch } =
    useContext(CookiesContext);

  const [isVisible, setIsVisible] = useState(!cookiesState.isDismissed);

  const handleDismissClick = useCallback((): void => {
    cookiesDispatch({ type: CookiesActionsTypes.DISMISS });
    onDismiss && onDismiss();
  }, [cookiesDispatch, onDismiss]);

  const handleAnimationEnd = useCallback((): void => {
    setIsVisible(false);
  }, []);

  if (!isVisible) {
    return <div />;
  }

  return (
    <div className={styles.CookiesNotice}>
      <AnimateHeight
        duration={300}
        height={cookiesState.isDismissed ? 0 : "auto"}
        easing="ease-out"
        onAnimationEnd={handleAnimationEnd}
      >
        <div className={styles.Container}>
          <div className={styles.Content}>
            Even a small website like this uses cookies to give you the best
            possible browsing experience. By&nbsp;continuing, you agree to the{" "}
            <Link href="/cookies/">
              <a>Cookie&nbsp;Policy</a>
            </Link>
            .
          </div>
          <div className={styles.Close}>
            <button type="button" onClick={handleDismissClick}>
              OK, Cool
            </button>
          </div>
        </div>
      </AnimateHeight>
    </div>
  );
};
