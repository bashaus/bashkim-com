import classNames from "classnames";
import { createRef, PureComponent, ReactNode } from "react";

import $ from "../../libraries/jquery";
import styles from "./styles.module.scss";

export enum TurnDisplay {
  SINGLE = "single",
  DOUBLE = "double",
}

export type TurnProps = {
  center?: boolean;
  children: ReactNode;
  display: TurnDisplay;
  page: number;
  pages: number;
  pageWidth: number;
  pageHeight: number;
  onInitialize?(): void;
  onPageChange?(pageNumber: number): void;
};

export type TurnState = {
  isInitialized: boolean;
};

export class Turn extends PureComponent<TurnProps, TurnState> {
  public containerRef = createRef<HTMLDivElement>();
  public pagesRef = createRef<HTMLDivElement>();

  static defaultProps = {
    display: TurnDisplay.DOUBLE,
  };

  constructor(props: TurnProps) {
    super(props);

    this.state = {
      isInitialized: false,
    };
  }

  /* component management */
  async componentDidMount(): Promise<void> {
    await import("turn-js/turn.min");

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

    if (!$pages.turn) {
      return;
    }

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

    if (display === TurnDisplay.DOUBLE) {
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

  render(): JSX.Element {
    const { children } = this.props;
    const { isInitialized } = this.state;

    return (
      <div
        ref={this.containerRef}
        className={classNames(styles.Turn, {
          [styles.isInitialized]: isInitialized,
          [styles.isUninitialized]: !isInitialized,
        })}
      >
        <div ref={this.pagesRef} className={styles.Pages}>
          {children}
        </div>
      </div>
    );
  }
}
