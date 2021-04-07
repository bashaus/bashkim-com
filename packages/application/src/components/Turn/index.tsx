import classNames from "classnames";
import React, { PureComponent, createRef } from "react";

import $ from "jquery";

import styles from "./styles.module.scss";

export enum Display {
  SINGLE = "single",
  DOUBLE = "double",
}

type TurnProps = {
  center?: boolean;
  children: React.ReactNode;
  display: Display;
  page: number;
  pages: number;
  pageWidth: number;
  pageHeight: number;
  onInitialize?(): void;
  onPageChange?(pageNumber: number): void;
};

type TurnState = {
  isInitialized: boolean;
};

class Turn extends PureComponent<TurnProps, TurnState> {
  public containerRef = createRef<HTMLDivElement>();

  public pagesRef = createRef<HTMLOListElement>();

  constructor(props: TurnProps) {
    super(props);

    this.state = {
      isInitialized: false,
    };
  }

  /* component management */
  async componentDidMount(): Promise<void> {
    /* Must use require as turn.js is not a module */
    /* eslint-disable-next-line global-require */
    await require("%libraries/turn/turn.min");

    const { $pages } = this;
    const { display, center, onInitialize } = this.props;

    $pages.turn({
      elevation: 50,
      gradients: true,
      autoCenter: center,
      display,
    });

    $pages.on("turned", this.handleTurnPageChange);

    this.setState({
      isInitialized: true,
    });

    if (onInitialize) {
      setTimeout(onInitialize, 1); // defer
    }

    window.addEventListener("resize", this.handleWindowResize);
  }

  componentDidUpdate(prevProps: TurnProps): void {
    const { $pages } = this;
    const { center, display, page } = this.props;

    if (prevProps.display !== display) {
      $pages.turn("display", display);
    }

    if (prevProps.page !== page) {
      $pages.turn("page", page);
    }

    if (prevProps.center !== center) {
      $pages.turn("center", center);
    }

    this.handleWindowResize();
  }

  componentWillUnmount(): void {
    window.removeEventListener("resize", this.handleWindowResize);
  }

  /* getters */
  get $container(): any {
    if (this.containerRef.current) {
      return $(this.containerRef.current);
    }

    return null;
  }

  get $pages(): any {
    if (this.pagesRef.current) {
      return $(this.pagesRef.current);
    }

    return null;
  }

  /* handlers */
  handleWindowResize = (): void => {
    const { $container, $pages } = this;
    const { display, pageWidth, pageHeight } = this.props;

    const containerWidth = Math.floor($container.width());

    const ratio = pageWidth / pageHeight;
    const outerWidth = Math.floor(containerWidth);
    let outerHeight = Math.floor(containerWidth / ratio);

    if (display === Display.DOUBLE) {
      outerHeight /= 2;
    }

    $pages.turn("size", outerWidth, outerHeight);
  };

  handleTurnPageChange = (): void => {
    const { $pages } = this;
    const { onPageChange } = this.props;

    if (onPageChange) {
      onPageChange($pages.turn("page"));
    }
  };

  handlePaginationPrevClick = (): void => {
    const { display, page, onPageChange } = this.props;

    if (!onPageChange) {
      return;
    }

    if (display === Display.DOUBLE) {
      onPageChange(page - 2);
    } else {
      onPageChange(page - 1);
    }
  };

  handlePaginationNextClick = (): void => {
    const { display, page, onPageChange } = this.props;

    if (!onPageChange) {
      return;
    }

    if (display === Display.DOUBLE) {
      onPageChange(page + 2);
    } else {
      onPageChange(page + 1);
    }
  };

  /* render */
  render(): JSX.Element {
    const { children } = this.props;
    const { isInitialized } = this.state;

    return (
      <div
        ref={this.containerRef}
        className={classNames({
          [styles.Turn]: true,
          [styles.initialized]: isInitialized,
          [styles.uninitialized]: !isInitialized,
        })}
      >
        <ol ref={this.pagesRef} className={styles.pages}>
          {children}
        </ol>
      </div>
    );
  }
}

export default Turn;
