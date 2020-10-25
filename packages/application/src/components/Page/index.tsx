import classNames from "classnames";
import Router from "next/router";
import React, { useCallback, useContext, useEffect } from "react";

import Footer from "%components/Footer";
import Header from "%components/Header";
import HeaderIntersection from "%components/HeaderIntersection";
import Menu from "%components/Menu";

import { NavigationContext } from "%contexts/Navigation";
import * as NavigationActions from "%contexts/Navigation/actions";

import styles from "./styles.module.scss";

type PageProps = {
  backButton?: React.ReactNode;
  children?: React.ReactNode;
  theme?: string;
};

const Page = ({
  backButton,
  children,
  theme = "default",
}: PageProps): JSX.Element => {
  const { state: navigationState, dispatch: navigationDispatch } = useContext(
    NavigationContext
  );

  const handleRouteChange = useCallback(
    (/* url */) => {
      navigationDispatch({ type: NavigationActions.MENU_HIDE });
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
          [styles.menuIsVisible]: navigationState.isVisible,
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

export default Page;
