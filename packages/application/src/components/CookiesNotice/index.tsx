import Link from "next/link";
import { useCallback, useContext, useState } from "react";
import AnimateHeight from "react-animate-height";

import { CookiesActionsTypes } from "%contexts/Cookies/actions";
import { CookiesContext } from "%contexts/Cookies/context";

import styles from "./styles.module.scss";

const CookiesNotice = (): JSX.Element | null => {
  const { state: cookiesState, dispatch: cookiesDispatch } = useContext(
    CookiesContext
  );

  const [isVisible, setIsVisible] = useState(!cookiesState.isDismissed);

  const handleDismissClick = useCallback((): void => {
    cookiesDispatch({ type: CookiesActionsTypes.DISMISS });
  }, [cookiesDispatch]);

  const handleAnimationEnd = useCallback((): void => {
    setIsVisible(false);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.CookiesNotice}>
      <AnimateHeight
        duration={300}
        height={cookiesState.isDismissed ? 0 : "auto"}
        easing="ease-out"
        onAnimationEnd={handleAnimationEnd}
      >
        <div className={styles.container}>
          <div className={styles.content}>
            Even a small website like this uses cookies to give you the best
            possible browsing experience. By&nbsp;continuing, you agree to the{" "}
            <Link href="/legal/cookie-policy/">
              <a>Cookie&nbsp;Policy</a>
            </Link>
            .
          </div>
          <div className={styles.close}>
            <button type="button" onClick={handleDismissClick}>
              OK, Cool
            </button>
          </div>
        </div>
      </AnimateHeight>
    </div>
  );
};

export default CookiesNotice;
