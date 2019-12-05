import PropTypes from 'prop-types';
import React from 'react';

import TurnImport from '%libraries/turn/import';

import styles from './styles.scss';

const RESPONSIVE = !process.browser ? null : [
  {
    media: window.matchMedia('(max-width: 767px)'),
    display: 'single',
  },
  {
    media: window.matchMedia('(min-width: 768px)'),
    display: 'double',
  },
];

export default class Magazine extends React.PureComponent {
  constructor(props) {
    super(props);

    /* handlers */
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);

    /* state */
    this.state = {
      isInitialized: false,
      windowWidth: null,
      windowHeight: null,
    };

    /* references */
    this.containerRef = React.createRef();
    this.pagesRef = React.createRef();
  }

  async componentDidMount() {
    // Import Turn.JS on the client-side only
    await TurnImport();

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

  componentDidUpdate() {
    if (!window.jQuery) {
      return;
    }

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

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  get $container() {
    if (typeof window === 'undefined') {
      return null;
    }

    if (typeof window.jQuery === 'undefined') {
      return null;
    }

    return window.jQuery(this.containerRef.current);
  }

  get $pages() {
    if (typeof window === 'undefined') {
      return null;
    }

    if (typeof window.jQuery === 'undefined') {
      return null;
    }

    return window.jQuery(this.pagesRef.current);
  }

  handlePrevClick() {
    this.$pages.turn('previous');
  }

  handleNextClick() {
    this.$pages.turn('next');
  }

  handleWindowResize() {
    window.requestAnimationFrame(() => this.resize());
  }

  resize() {
    this.setState({
      isInitialized: true,
      windowWidth: window.jQuery(window).width(),
      windowHeight: window.jQuery(window).height(),
    });
  }

  render() {
    const { children } = this.props;
    const { isInitialized, windowWidth, windowHeight } = this.state;
    const $pages = isInitialized ? this.$pages : null;

    return (
      <div
        ref={this.containerRef}
        className={`
          ${styles.Magazine}
          ${styles[isInitialized ? 'initialized' : 'uninitialized']}
        `}
        data-windowWidth={windowWidth}
        data-windowHeight={windowHeight}
      >
        <ol ref={this.pagesRef} className={styles.pages}>
          { children }
        </ol>

        { isInitialized && (
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
        ) }
      </div>
    );
  }
}

Magazine.propTypes = {
  pageWidth: PropTypes.number.isRequired,
  pageHeight: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};
