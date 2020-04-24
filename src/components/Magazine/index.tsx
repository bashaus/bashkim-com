import classNames from 'classnames';
import React from 'react';

import $ from 'jquery';

import styles from './styles.module.scss';

const RESPONSIVE = !process.browser
  ? []
  : [
    {
      media: window.matchMedia('(max-width: 767px)'),
      display: 'single',
    },
    {
      media: window.matchMedia('(min-width: 768px)'),
      display: 'double',
    },
  ];

interface MagazineProps {
  pageWidth: number;
  pageHeight: number;
  children: React.ReactNode;
}

interface MagazineState {
  isInitialized: boolean;
  windowWidth?: number;
  windowHeight?: number;
}

export default class Magazine extends React.PureComponent<MagazineProps, MagazineState> {
  public containerRef = React.createRef<HTMLDivElement>();

  public pagesRef = React.createRef<HTMLOListElement>();

  constructor(props: MagazineProps) {
    super(props);

    this.state = {
      isInitialized: false,
      windowWidth: undefined,
      windowHeight: undefined,
    };
  }

  async componentDidMount(): Promise<void> {
    /* Must use require as turn.js is not a module */
    /* eslint-disable-next-line global-require */
    await require('%libraries/turn/turn.min');

    const { $pages } = this;

    $pages.turn({
      elevation: 50,
      gradients: true,
      autoCenter: false,
    });

    $pages.on('turned', () => this.forceUpdate());

    window.addEventListener('resize', this.handleWindowResize);

    this.resize();
  }

  componentDidUpdate(): void {
    const properties = RESPONSIVE.find((size) => size.media.matches);
    if (!properties) {
      return;
    }

    const { pageWidth, pageHeight } = this.props;
    const { $container, $pages } = this;
    const ratio = pageWidth / pageHeight;

    const display = properties.display || 'double';
    const outerWidth = $container.width();
    let outerHeight = $container.width() / ratio;

    if (display === 'double') {
      outerHeight /= 2;
    }

    $pages.turn('display', display);
    $pages.turn('size', outerWidth, outerHeight);
  }

  componentWillUnmount(): void {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  get $container(): any {
    if (!this.containerRef.current) {
      return null;
    }

    return $(this.containerRef.current);
  }

  get $pages(): any {
    if (!this.pagesRef.current) {
      return null;
    }

    return $(this.pagesRef.current);
  }

  handlePrevClick = (): void => {
    this.$pages.turn('previous');
  };

  handleNextClick = (): void => {
    this.$pages.turn('next');
  };

  handleWindowResize = (): void => {
    window.requestAnimationFrame(() => this.resize());
  };

  resize(): void {
    const $window = $(window);

    this.setState({
      isInitialized: true,
      windowWidth: $window.width(),
      windowHeight: $window.height(),
    });
  }

  render(): JSX.Element {
    const { children } = this.props;
    const { isInitialized, windowWidth, windowHeight } = this.state;
    const $pages = isInitialized ? this.$pages : null;

    return (
      <div
        ref={this.containerRef}
        className={classNames({
          [styles.Magazine]: true,
          [styles.initialized]: isInitialized,
          [styles.uninitialized]: !isInitialized,
        })}
        data-window-width={windowWidth}
        data-window-height={windowHeight}
      >
        <ol
          ref={this.pagesRef}
          className={styles.pages}
        >
          {children}
        </ol>

        {isInitialized && (
          <>
            <button
              type="button"
              className={styles.buttonPrev}
              onClick={this.handlePrevClick}
              disabled={$pages.turn('page') === 1}
            >
              Previous page
            </button>

            <button
              type="button"
              className={styles.buttonNext}
              onClick={this.handleNextClick}
              disabled={$pages.turn('page') === $pages.turn('pages')}
            >
              Next page
            </button>
          </>
        )}
      </div>
    );
  }
}
