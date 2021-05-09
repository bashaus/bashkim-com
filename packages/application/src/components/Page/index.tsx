import classNames from "classnames";
import { Router } from "next/router";
import { useCallback, useContext, useEffect } from "react";

import { Footer } from "%components/Footer";
import { Header } from "%components/Header";
import { HeaderIntersection } from "%components/HeaderIntersection";
import { Menu } from "%components/Menu";

import { NavigationContext } from "%contexts/Navigation/context";
import { NavigationActionsTypes } from "%contexts/Navigation/actions";

import styles from "./styles.module.scss";

export type PageProps = {
  backButton?: React.ReactNode;
  children?: React.ReactNode;
  theme?: string;
};

export const Page = ({
  backButton,
  children,
  theme = "default",
}: PageProps): JSX.Element => {
  const { state: navigationState, dispatch: navigationDispatch } = useContext(
    NavigationContext
  );

  const handleRouteChange = useCallback(
    (/* url: string */) => {
      navigationDispatch({ type: NavigationActionsTypes.MENU_HIDE });
    },
    [navigationDispatch]
  );

  useEffect(() => {
    Router.events.on("routeChangeComplete", handleRouteChange);

    return (): void => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [handleRouteChange]);

  return (
    <>
      <HeaderIntersection />
      <Header theme={theme} />

      <div
        className={classNames({
          [styles.menuIsVisible]: navigationState.menuIsVisible,
        })}
      >
        <div className={styles.menu}>
          <Menu backButton={backButton} />
        </div>

        <main
          id="content"
          className={classNames(styles.content, styles[`theme-${theme}`])}
          tabIndex={-1}
        >
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
};
